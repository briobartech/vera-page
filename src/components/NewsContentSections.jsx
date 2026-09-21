import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Title from './Title';

function resolveImagePath(image) {
    if (!image) return '';
    if (/^(https?:)?\//.test(image)) return image;
    return `${import.meta.env.BASE_URL}images/${image}`;
}

function getVideoEmbedUrl(url) {
    const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
    if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}`;

    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

    return null;
}

function getHostname(url) {
    try {
        return new URL(url).hostname.replace(/^www\./, '');
    } catch {
        return url;
    }
}

export function HeadingBlock({ text }) {
    if (!text) return null;
    return (
        <HeadingStyled>
            <Title>{text}</Title>
        </HeadingStyled>
    );
}

export function TextImageBlock({ text, image, alt }) {
    return (
        <TextImageStyled>
            <div className="text-image-row">
                <p>{text}</p>
                {image && <img src={resolveImagePath(image)} alt={alt || ''} />}
            </div>
        </TextImageStyled>
    );
}

export function JustImageBlock({ image, caption, alt }) {
    if (!image) return null;
    return (
        <JustImageStyled>
            <figure>
                <img src={resolveImagePath(image)} alt={alt || caption || ''} />
                {caption && <figcaption>{caption}</figcaption>}
            </figure>
        </JustImageStyled>
    );
}

export function GalleryBlock({ items = [] }) {
    const validItems = items.filter((item) => item?.image);
    if (!validItems.length) return null;

    return (
        <GalleryStyled>
            {validItems.map((item, index) => (
                <figure key={`${item.image}-${index}`}>
                    <img src={resolveImagePath(item.image)} alt={item.alt || item.caption || ''} />
                    {item.caption && <figcaption>{item.caption}</figcaption>}
                </figure>
            ))}
        </GalleryStyled>
    );
}

export function JustTextBlock({ text }) {
    if (!text) return null;
    return (
        <JustTextStyled>
            <p>{text}</p>
        </JustTextStyled>
    );
}

export function VideoBlock({ url, caption }) {
    if (!url) return null;
    const embedUrl = getVideoEmbedUrl(url);

    return (
        <VideoStyled>
            {embedUrl ? (
                <div className="video-embed">
                    <iframe
                        src={embedUrl}
                        title={caption || 'Video'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            ) : (
                <video src={url} controls />
            )}
            {caption && <p className="video-caption">{caption}</p>}
        </VideoStyled>
    );
}

export function LinkBlock({ url, title, description, image }) {
    if (!url) return null;

    return (
        <LinkStyled href={url} target="_blank" rel="noopener noreferrer">
            {image && <img src={resolveImagePath(image)} alt="" />}
            <div className="link-copy">
                <strong>{title || getHostname(url)}</strong>
                {description && <p>{description}</p>}
                <span className="link-host">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> {getHostname(url)}
                </span>
            </div>
        </LinkStyled>
    );
}

const blockRenderers = {
    heading: (block) => <HeadingBlock text={block.text} />,
    text_image: (block) => <TextImageBlock text={block.text} image={block.image} alt={block.alt} />,
    just_image: (block) => <JustImageBlock image={block.image} caption={block.caption} alt={block.alt} />,
    just_text: (block) => <JustTextBlock text={block.text} />,
    gallery: (block) => <GalleryBlock items={block.items} />,
    video: (block) => <VideoBlock url={block.url} caption={block.caption} />,
    link: (block) => <LinkBlock url={block.url} title={block.title} description={block.description} image={block.image} />,
};

export function ContentBlocks({ blocks = [] }) {
    return (
        <>
            {blocks.map((block, index) => {
                const render = blockRenderers[block.type];
                if (!render) return null;
                return <div key={`${block.type}-${index}`}>{render(block)}</div>;
            })}
        </>
    );
}

const ContentShell = styled.section`
    width: 100%;
    padding: 1.3rem;
    box-sizing: border-box;
    border-radius: 1.35rem;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 12px 28px rgba(var(--glass-shadow-rgb), 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.65);
`;

const HeadingStyled = styled(ContentShell)`
    padding: 0.9rem 1.3rem;
    
    
    h1 { padding: 0; }
`;

const TextImageStyled = styled(ContentShell)`
    display: grid;
    gap: 1rem;

    .text-image-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(220px, 0.75fr);
        align-items: center;
        gap: 1.5rem;
    }

    p, img { min-width: 0; }
    p { margin: 0; color: var(--color-text); font-family: var(--font-body); font-size: 1rem; line-height: 1.55; }
    img { width: 100%; max-height: 360px; object-fit: cover; border-radius: 1rem; }

    @media (max-width: 700px) {
        .text-image-row { grid-template-columns: 1fr; }
    }
`;

const JustImageStyled = styled(ContentShell)`
    figure { margin: 0; }
    img { display: block; width: 100%; max-height: 620px; object-fit: contain; border-radius: 1rem; }
    figcaption { margin-top: 0.65rem; color: var(--color-text); font-family: var(--font-body); font-size: 0.85rem; text-align: center; }
`;

const GalleryStyled = styled(ContentShell)`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.85rem;

    figure { min-width: 0; margin: 0; }
    img { display: block; width: 100%; aspect-ratio: 1 / 0.78; object-fit: cover; border-radius: 0.9rem; }
    figcaption { margin-top: 0.45rem; color: var(--color-text); font-family: var(--font-body); font-size: 0.75rem; line-height: 1.3; }

    @media (max-width: 700px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    @media (max-width: 420px) { grid-template-columns: 1fr; }
`;

const JustTextStyled = styled(ContentShell)`
    p { margin: 0; color: var(--color-text); font-family: var(--font-body); font-size: 1rem; line-height: 1.6; white-space: pre-line; }
    p + p { margin-top: 0.9rem; }
`;

const VideoStyled = styled(ContentShell)`
    .video-embed {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 1rem;
        overflow: hidden;
    }

    .video-embed iframe {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }

    video {
        display: block;
        width: 100%;
        max-height: 480px;
        border-radius: 1rem;
        background: #000;
    }

    .video-caption {
        margin: 0.65rem 0 0;
        color: var(--color-text);
        font-family: var(--font-body);
        font-size: 0.85rem;
        text-align: center;
    }
`;

const LinkStyled = styled.a`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 1.1rem;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0 12px 28px rgba(var(--glass-shadow-rgb), 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.65);
    transition: transform 180ms ease, box-shadow 180ms ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 16px 34px rgba(var(--glass-shadow-rgb), 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.65);
    }

    img {
        flex: 0 0 96px;
        width: 96px;
        height: 96px;
        object-fit: cover;
        border-radius: 0.8rem;
    }

    .link-copy {
        flex: 1;
        min-width: 0;
    }

    .link-copy strong {
        display: block;
        color: var(--color-dark-purple);
        font-family: var(--font-heading);
        font-size: 1rem;
    }

    .link-copy p {
        margin: 0.3rem 0 0;
        color: var(--color-text);
        font-family: var(--font-body);
        font-size: 0.85rem;
        line-height: 1.35;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .link-host {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        margin-top: 0.5rem;
        color: var(--color-institutional-purple);
        font-family: var(--font-body);
        font-size: 0.76rem;
        font-weight: 700;
    }
`;