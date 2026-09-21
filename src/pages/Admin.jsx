import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import NewsEditorModal from '../components/admin/NewsEditorModal';
import { createNews, deleteNews, fetchNewsList, updateNews } from '../services/newsApi';

function Admin() {
    const [newsMap, setNewsMap] = useState(null);
    const [loadError, setLoadError] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const loadNews = () => {
        fetchNewsList()
            .then(setNewsMap)
            .catch((error) => setLoadError(error.message));
    };

    useEffect(loadNews, []);

    const newsEntries = Object.entries(newsMap ?? {});
    const editingNews = editingId ? newsMap?.[editingId] : null;

    const openCreateModal = () => {
        setEditingId(null);
        setIsModalOpen(true);
    };

    const openEditModal = (id) => {
        setEditingId(id);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const handleSave = async (payload) => {
        if (editingId) {
            await updateNews(editingId, payload);
        } else {
            await createNews(payload);
        }
        setIsModalOpen(false);
        loadNews();
    };

    const handleDelete = async (id) => {
        if (!window.confirm('¿Eliminar esta novedad?')) return;
        await deleteNews(id);
        loadNews();
    };

    return (
        <AdminStyled>
            <header className="admin-header">
                <h1>Gestión de novedades</h1>
                <button type="button" className="create-button" onClick={openCreateModal}>
                    <FontAwesomeIcon icon={faPlus} /> Crear novedad
                </button>
            </header>

            {loadError && <p className="load-error">No pudimos cargar las novedades: {loadError}</p>}

            <ul className="news-list">
                {newsEntries.map(([id, news]) => (
                    <li key={id} className="news-row">
                        <div className="news-row-info">
                            <span className="news-row-title">{news.title}</span>
                            <span className="news-row-meta">
                                {news.categoria || 'Sin categoría'} · {news.visible === false ? 'Oculta' : 'Visible'}
                            </span>
                        </div>
                        <div className="news-row-actions">
                            <button type="button" onClick={() => openEditModal(id)} aria-label="Editar">
                                <FontAwesomeIcon icon={faPen} />
                            </button>
                            <button type="button" className="delete-button" onClick={() => handleDelete(id)} aria-label="Eliminar">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </li>
                ))}
                {newsMap && newsEntries.length === 0 && <p className="empty-state">Todavía no hay novedades creadas.</p>}
            </ul>

            {isModalOpen && (
                <NewsEditorModal
                    initialNews={editingNews}
                    onClose={closeModal}
                    onSave={handleSave}
                />
            )}
        </AdminStyled>
    );
}

export default Admin;

const AdminStyled = styled.div`
    width: min(80%, 1440px);
    margin: 2rem auto;
    box-sizing: border-box;

    .admin-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.4rem;
    }

    .admin-header h1 {
        margin: 0;
        color: var(--color-dark-purple);
        font-family: var(--font-heading);
        font-size: 1.6rem;
    }

    .create-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.7rem 1.2rem;
        border: 0;
        border-radius: 999px;
        background: var(--color-institutional-purple);
        color: var(--color-white);
        font-family: var(--font-heading);
        font-weight: 700;
        cursor: pointer;
    }

    .load-error { color: #b3364a; font-family: var(--font-body); }

    .news-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 0.7rem;
    }

    .news-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.9rem 1.1rem;
        border: 1px solid var(--color-border);
        border-radius: 0.9rem;
        background: rgba(255, 255, 255, 0.6);
    }

    .news-row-info {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }

    .news-row-title {
        color: var(--color-dark-purple);
        font-family: var(--font-heading);
        font-weight: 700;
    }

    .news-row-meta {
        color: var(--color-text);
        font-family: var(--font-body);
        font-size: 0.8rem;
    }

    .news-row-actions {
        display: flex;
        gap: 0.5rem;
    }

    .news-row-actions button {
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        border: 1px solid var(--color-border);
        border-radius: 0.6rem;
        background: transparent;
        color: var(--color-institutional-purple);
        cursor: pointer;
    }

    .delete-button { color: #b3364a; }

    .empty-state { color: var(--color-text); font-family: var(--font-body); }
`;