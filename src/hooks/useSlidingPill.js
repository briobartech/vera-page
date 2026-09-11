import { useLayoutEffect, useRef, useState } from 'react';

export default function useSlidingPill(activeKey) {
  const selectorRef = useRef(null);
  const itemRefs = useRef(new Map());
  const [pill, setPill] = useState({ left: 0, top: 0, width: 0, height: 0, visible: false });

  useLayoutEffect(() => {
    const updatePill = () => {
      const activeItem = itemRefs.current.get(activeKey);
      const selector = selectorRef.current || activeItem?.parentElement;

      if (!selector || !activeItem) return;

      const selectorRect = selector.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      setPill({
        left: itemRect.left - selectorRect.left + selector.scrollLeft,
        top: itemRect.top - selectorRect.top + selector.scrollTop,
        width: itemRect.width,
        height: itemRect.height,
        visible: true,
      });
    };

    updatePill();
    window.addEventListener('resize', updatePill);
    const selector = selectorRef.current;
    const activeItem = itemRefs.current.get(activeKey);
    selector?.addEventListener('scroll', updatePill, { passive: true });

    const resizeObserver = new ResizeObserver(updatePill);
    if (selector) resizeObserver.observe(selector);
    if (activeItem) resizeObserver.observe(activeItem);

    return () => {
      window.removeEventListener('resize', updatePill);
      selector?.removeEventListener('scroll', updatePill);
      resizeObserver.disconnect();
    };
  }, [activeKey]);

  return {
    itemRef: (key) => (element) => {
      if (element) itemRefs.current.set(key, element);
      else itemRefs.current.delete(key);
    },
    pillStyle: {
      left: `${pill.left}px`,
      top: `${pill.top}px`,
      width: `${pill.width}px`,
      height: `${pill.height}px`,
      opacity: pill.visible ? 1 : 0,
    },
    selectorRef,
  };
}
