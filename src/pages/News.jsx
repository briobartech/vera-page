import { useEffect, useState } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort, faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';
import VirtualAccess from "../components/VirtualAccess";
import NavBar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import NewsCard from '../components/NewsCard';
import { fetchNewsList } from '../services/newsApi';

function getTimestamp(news) {
    const parsed = Date.parse(news.date);
    return Number.isNaN(parsed) ? null : parsed;
}

function sortByDate(entries, sortOrder) {
    const direction = sortOrder === 'asc' ? 1 : -1;
    return [...entries].sort(([, newsA], [, newsB]) => {
        const timestampA = getTimestamp(newsA);
        const timestampB = getTimestamp(newsB);
        if (timestampA === null && timestampB === null) return 0;
        if (timestampA === null) return 1;
        if (timestampB === null) return -1;
        return (timestampA - timestampB) * direction;
    });
}

function News() {
    const [newsMap, setNewsMap] = useState(null);
    const [loadError, setLoadError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Todas');
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {
        let isActive = true;

        fetchNewsList()
            .then((data) => {
                if (isActive) setNewsMap(data);
            })
            .catch((error) => {
                if (isActive) setLoadError(error.message);
            });

        return () => {
            isActive = false;
        };
    }, []);

    const newsEntries = Object.entries(newsMap ?? {}).filter(([, news]) => news.visible !== false);
    const categories = [...new Set(
        newsEntries
            .map(([, news]) => news.categoria?.trim())
            .filter(Boolean),
    )];
    const filteredNews = selectedCategory === 'Todas'
        ? newsEntries
        : newsEntries.filter(([, news]) => news.categoria?.trim() === selectedCategory);
    const sortedNews = sortByDate(filteredNews, sortOrder);

    return (
        <NewsStyled>
            <VirtualAccess />
            <NavBar />
            <Title>Novedades</Title>
            <div className="category-filter" role="group" aria-label="Filtrar novedades por categoría">
                <button
                    type="button"
                    className={selectedCategory === 'Todas' ? 'is-active' : ''}
                    aria-pressed={selectedCategory === 'Todas'}
                    onClick={() => setSelectedCategory('Todas')}
                >
                    Todas
                </button>
                {categories.map((category) => (
                    <button
                        type="button"
                        className={selectedCategory === category ? 'is-active' : ''}
                        aria-pressed={selectedCategory === category}
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <button
                type="button"
                className="sort-toggle"
                onClick={() => setSortOrder((current) => (current === 'desc' ? 'asc' : 'desc'))}
            >
                <FontAwesomeIcon icon={sortOrder === 'desc' ? faArrowDownWideShort : faArrowUpWideShort} />
                {sortOrder === 'desc' ? 'Más recientes primero' : 'Más antiguas primero'}
            </button>
            <main className="news-list" aria-label="Listado de novedades">
                {loadError ? (
                    <p className="empty-state">No pudimos cargar las novedades: {loadError}</p>
                ) : !newsMap ? (
                    <p className="empty-state">Cargando novedades...</p>
                ) : sortedNews.length ? (
                    sortedNews.map(([id, news]) => <NewsCard key={id} id={id} news={news} />)
                ) : (
                    <p className="empty-state">No hay novedades en esta categoría.</p>
                )}
            </main>
            <Footer />

        </NewsStyled>
    );
}

export default News;

const NewsStyled = styled.div`
    width: min(80%, 1440px);
    margin: 0 auto;
    box-sizing: border-box;

    .category-filter {
        display: flex;
        flex-wrap: wrap;
        gap: 0.55rem;
        width: 100%;
        margin: 0.25rem 0 1.25rem;
    }

    .sort-toggle {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        min-height: 38px;
        margin: 0 0 1.25rem;
        padding: 0.55rem 1rem;
        border: 1px solid rgba(255, 255, 255, 0.72);
        border-radius: 999px;
        color: var(--color-institutional-purple);
        background: rgba(255, 255, 255, 0.32);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72), 0 6px 14px rgba(var(--glass-shadow-rgb), 0.08);
        font-family: var(--font-heading);
        font-size: 0.78rem;
        font-weight: 700;
        cursor: pointer;
        transition: transform 180ms ease;
    }

    .sort-toggle:hover,
    .sort-toggle:focus-visible {
        transform: translateY(-1px);
    }

    .category-filter button {
        min-height: 38px;
        padding: 0.55rem 1rem;
        border: 1px solid rgba(255, 255, 255, 0.72);
        border-radius: 999px;
        color: var(--color-dark-purple);
        background: rgba(255, 255, 255, 0.32);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72), 0 6px 14px rgba(var(--glass-shadow-rgb), 0.08);
        font-family: var(--font-heading);
        font-size: 0.78rem;
        font-weight: 700;
        cursor: pointer;
        transition: transform 180ms ease, color 180ms ease, background 180ms ease, box-shadow 180ms ease;
    }

    .category-filter button:hover,
    .category-filter button:focus-visible {
        color: var(--color-institutional-purple);
        transform: translateY(-1px);
    }

    .category-filter button.is-active {
        color: var(--color-white);
        background: var(--color-gradient);
        box-shadow: 0 8px 16px rgba(var(--glass-shadow-rgb), 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.38);
    }

    .news-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
        justify-items: center;
        gap: 1.5rem;
        width: 100%;
        padding: 0.5rem 0 2.5rem;
    }

    .empty-state {
        grid-column: 1 / -1;
        color: var(--color-text);
        font-family: var(--font-body);
    }

    @media (max-width: 900px) {
        width: min(100%, 1440px);
        padding: 0 0.8rem;
    }
`;