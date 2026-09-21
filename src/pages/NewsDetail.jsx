import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import VirtualAccess from '../components/VirtualAccess';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import { fetchNewsItem } from '../services/newsApi';
import { ContentBlocks } from '../components/NewsContentSections';

function NewsDetail() {
    const { newsId } = useParams();
    const [news, setNews] = useState(null);
    const [loadError, setLoadError] = useState(null);

    useEffect(() => {
        let isActive = true;
        setNews(null);
        setLoadError(null);

        fetchNewsItem(newsId)
            .then((data) => {
                if (isActive) setNews(data);
            })
            .catch((error) => {
                if (isActive) setLoadError(error.message);
            });

        return () => {
            isActive = false;
        };
    }, [newsId]);

    if (loadError) {
        return (
            <NewsDetailStyled>
                <VirtualAccess />
                <NavBar />
                <main className="not-found">
                    <Title>Novedad no encontrada</Title>
                    <Link to="/novedades">Volver a novedades</Link>
                </main>
                <Footer />
            </NewsDetailStyled>
        );
    }

    if (!news) {
        return (
            <NewsDetailStyled>
                <VirtualAccess />
                <NavBar />
                <main className="not-found">
                    <Title>Cargando novedad...</Title>
                </main>
                <Footer />
            </NewsDetailStyled>
        );
    }

    const content = news.content ?? {};

    return (
        <NewsDetailStyled>
            <VirtualAccess />
            <NavBar />
            <main className="news-detail">
                <header className="news-detail-header ">
                    <Title>{news.title}</Title>
                    {news.subtitle && <p>{news.subtitle}</p>}
                    <div className="news-meta">
                        {news.categoria && <span>{news.categoria}</span>}
                        {news.date && <time>{news.date}</time>}
                        {news.author && <span>{news.author}{news.rol ? ` · ${news.rol}` : ''}</span>}
                    </div>
                </header>

                <div className="news-content">
                    <ContentBlocks blocks={content.blocks ?? []} />
                </div>

                <Link className="back-link" to="/novedades">← Volver a novedades</Link>
            </main>
            <Footer />
        </NewsDetailStyled>
    );
}

export default NewsDetail;

const NewsDetailStyled = styled.div`
    width: min(80%, 1440px);
    min-height: 100vh;
    margin: 0 auto;
    box-sizing: border-box;

    .news-detail-header {
        margin-bottom: 1.2rem;
        padding: 1.2rem 1.4rem;
        border-radius: 1.5rem;
        background: /* linear-gradient(135deg, rgba(91, 46, 166, 0.88), rgba(169, 141, 224, 0.4)), */
  url("/images/mini-banner.png");

background-size: cover;
background-position: right 35% bottom 45%;
background-repeat: no-repeat;;
        box-shadow: 0 18px 36px rgba(var(--glass-shadow-rgb), 0.15);
    }
.news-detail-header h1 {
color: var(--color-white);
}
    .news-detail-header p {
        margin: -0.15rem 0 0.85rem;
        color: rgba(255, 255, 255, 0.86);
        font-family: var(--font-body);
        font-size: 1rem;
        line-height: 1.4;
    }

    .news-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 0.55rem;
        color: rgba(255, 255, 255, 0.88);
        font-family: var(--font-body);
        font-size: 0.78rem;
    }

    .news-meta span,
    .news-meta time {
        padding: 0.35rem 0.7rem;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.17);
    }

    .news-content { display: grid; gap: 1rem; }

    .back-link,
    .not-found a {
        display: inline-flex;
        margin: 1.4rem 0 2rem;
        color: var(--color-institutional-purple);
        font-family: var(--font-heading);
        font-weight: 700;
    }

    .not-found { text-align: center; }
    .not-found .title-1 { color: var(--color-dark-purple); }

    @media (max-width: 900px) {
        width: min(100%, 1440px);
        padding: 0 0.8rem;
    }
`;