import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import images from '../data/images.js';

const categoryColors = {
    tecnologia: '#6451c8',
    comunidad: '#2b9b87',
    institucional: '#c47b43',
    cultura: '#c35891',
};

function resolveImagePath(image) {
    if (!image) return images.logoVera;
    if (/^(https?:)?\//.test(image)) return image;
    return `${import.meta.env.BASE_URL}images/${image}`;
}

function getSummary(news) {
    const blocks = Array.isArray(news.content?.blocks) ? news.content.blocks : [];
    const textBlock = blocks.find((block) => (
        (block.type === 'text_image' || block.type === 'just_text') && block.text
    ));
    const firstText = textBlock?.text || news.subtitle || '';

    return String(firstText)
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ')
        .slice(0, 24)
        .join(' ')
        .concat(firstText && String(firstText).trim().split(/\s+/).length > 24 ? '...' : '');
}

function getCardImage(news) {
    return news.thumbnail || null;
}

function NewsCard({ id, news }) {
    const category = news.categoria?.trim();
    const categoryColor = categoryColors[category?.toLowerCase()] || '#6d55bd';
    const image = getCardImage(news);

    return (
        <NewsCardStyled $categoryColor={categoryColor} className="liquid-glass-effect">
            <div className="news-card-media">
                <img
                    src={resolveImagePath(image)}
                    alt={news.title}
                    onError={(event) => {
                        event.currentTarget.src = images.logoVera;
                    }}
                />
                {category && <span className="news-category">{category}</span>}
                {news.date && <time className="news-date">{news.date}</time>}
            </div>

            <div className="news-card-body">
                <h2>{news.title}</h2>
                <p>{getSummary(news)}</p>
                <div className="news-card-footer">
                    <span className="news-author">
                        {news.author || 'Instituto Vera'}
                        {news.rol && <span className="news-role"> · {news.rol}</span>}
                    </span>
                    <Link to={`/novedades/${id}`} className="read-more">
                        <span>Leer más</span>
                        <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </NewsCardStyled>
    );
}

export default NewsCard;

const NewsCardStyled = styled.article`
    --category-color: ${({ $categoryColor }) => $categoryColor};
    width: 100%;
    max-width: 520px;
    overflow: hidden;
    border-radius: 1.8rem;
    background: rgba(255, 255, 255, 0.34);
    box-shadow: 0 18px 38px rgba(var(--glass-shadow-rgb), 0.13);
    transition: transform 220ms ease, box-shadow 220ms ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 24px 46px rgba(var(--glass-shadow-rgb), 0.2);
    }

    .news-card-media {
        position: relative;
        height: 260px;
        margin: 0.8rem;
        overflow: hidden;
        border-radius: 1.35rem;
        background: rgba(255, 255, 255, 0.5);
    }

    .news-card-media::after {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, transparent 58%, rgba(38, 22, 79, 0.32));
        content: '';
        pointer-events: none;
    }

    .news-card-media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .news-category,
    .news-date {
        position: absolute;
        top: 1rem;
        z-index: 1;
        padding: 0.55rem 0.9rem;
        border-radius: 999px;
        color: var(--color-dark-purple);
        background: rgba(255, 255, 255, 0.82);
        box-shadow: 0 6px 14px rgba(59, 31, 102, 0.12);
        backdrop-filter: blur(10px);
        font-family: var(--font-body);
        font-size: 0.76rem;
        font-weight: 700;
    }

    .news-category {
        left: 1rem;
        border-left: 4px solid var(--category-color);
    }

    .news-date { right: 1rem; }

    .news-card-body { padding: 0.5rem 1.35rem 1.35rem; }

    h2 {
        margin: 0;
        color: var(--color-dark-purple);
        font-family: var(--font-heading);
        font-size: clamp(1.35rem, 1.1rem + 0.55vw, 1.85rem);
        line-height: 1.12;
    }

    p {
        min-height: 3.3rem;
        margin: 0.65rem 0 1rem;
        color: var(--color-text);
        font-family: var(--font-body);
        font-size: 0.95rem;
        line-height: 1.4;
    }

    .news-card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.8rem;
        padding-top: 0.9rem;
        border-top: 1px solid rgba(127, 70, 219, 0.14);
    }

    .news-author {
        color: var(--color-text);
        font-family: var(--font-body);
        font-size: 0.78rem;
    }

    .news-role {
        color: var(--color-text);
        opacity: 0.72;
    }

    .read-more {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.7rem 1rem;
        border-radius: 999px;
        color: var(--color-white);
        background: var(--category-color);
        font-family: var(--font-heading);
        font-size: 0.78rem;
        font-weight: 700;
    }

    @media (max-width: 560px) {
        .news-card-media { height: 220px; }
        .news-card-footer { align-items: flex-end; }
    }
`;