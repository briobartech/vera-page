import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faPlus, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons';
import { uploadImage, uploadVideo } from '../../services/newsApi';

const blockLabels = {
    heading: 'Título',
    text_image: 'Texto con imagen',
    just_image: 'Solo imagen',
    just_text: 'Solo texto',
    gallery: 'Galería',
    video: 'Video',
    link: 'Vista previa de enlace',
};

let blockIdCounter = 0;
function createBlockId() {
    blockIdCounter += 1;
    return `block-${Date.now()}-${blockIdCounter}`;
}

function createEmptyBlock(type) {
    const id = createBlockId();
    switch (type) {
        case 'heading':
            return { id, type, text: '' };
        case 'text_image':
            return { id, type, text: '', image: null, alt: '' };
        case 'just_image':
            return { id, type, image: null, caption: '', alt: '' };
        case 'just_text':
            return { id, type, text: '' };
        case 'gallery':
            return { id, type, items: [] };
        case 'video':
            return { id, type, source: 'upload', url: null, caption: '', alt: '' };
        case 'link':
            return { id, type, url: '', title: '', description: '', image: null };
        default:
            return { id, type };
    }
}

function toFormState(news) {
    const blocks = Array.isArray(news?.content?.blocks)
        ? news.content.blocks.map((block) => ({ id: createBlockId(), ...block }))
        : [];

    return {
        categoria: news?.categoria ?? '',
        date: news?.date ?? '',
        author: news?.author ?? '',
        rol: news?.rol ?? '',
        tags: Array.isArray(news?.tags) ? news.tags.join(', ') : '',
        visible: news?.visible ?? true,
        title: news?.title ?? '',
        subtitle: news?.subtitle ?? '',
        link: news?.link ?? '',
        thumbnail: news?.thumbnail ?? null,
        content: { blocks },
    };
}

function ImageUploadField({ value, onChange, label }) {
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    const handleFileChange = async (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        setUploadError(null);

        try {
            const result = await uploadImage(file);
            onChange(result.secure_url);
        } catch (error) {
            setUploadError(error.message);
        } finally {
            setIsUploading(false);
            event.target.value = '';
        }
    };

    return (
        <div className="image-upload-field">
            <label>
                {label}
                <input type="file" accept="image/*" onChange={handleFileChange} disabled={isUploading} />
            </label>
            {isUploading && <span className="upload-status"><FontAwesomeIcon icon={faSpinner} spin /> Subiendo...</span>}
            {uploadError && <span className="upload-error">{uploadError}</span>}
            {value && (
                <div className="image-preview">
                    <img src={value} alt="" />
                </div>
            )}
        </div>
    );
}

function VideoUploadField({ value, onChange, label }) {
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    const handleFileChange = async (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        setUploadError(null);

        try {
            const result = await uploadVideo(file);
            onChange(result.secure_url);
        } catch (error) {
            setUploadError(error.message);
        } finally {
            setIsUploading(false);
            event.target.value = '';
        }
    };

    return (
        <div className="image-upload-field">
            <label>
                {label}
                <input type="file" accept="video/*" onChange={handleFileChange} disabled={isUploading} />
            </label>
            {isUploading && <span className="upload-status"><FontAwesomeIcon icon={faSpinner} spin /> Subiendo...</span>}
            {uploadError && <span className="upload-error">{uploadError}</span>}
            {value && (
                <div className="image-preview">
                    <video src={value} controls muted />
                </div>
            )}
        </div>
    );
}

function NewsEditorModal({ initialNews, onClose, onSave }) {
    const [form, setForm] = useState(() => toFormState(initialNews));
    const [isSaving, setIsSaving] = useState(false);
    const [saveError, setSaveError] = useState(null);
    const [draggedBlockId, setDraggedBlockId] = useState(null);

    const updateField = (field, value) => setForm((current) => ({ ...current, [field]: value }));

    const addBlock = (type) => {
        setForm((current) => ({
            ...current,
            content: { blocks: [...current.content.blocks, createEmptyBlock(type)] },
        }));
    };

    const updateBlock = (id, patch) => {
        setForm((current) => ({
            ...current,
            content: {
                blocks: current.content.blocks.map((block) => (
                    block.id === id ? { ...block, ...patch } : block
                )),
            },
        }));
    };

    const removeBlock = (id) => {
        setForm((current) => ({
            ...current,
            content: { blocks: current.content.blocks.filter((block) => block.id !== id) },
        }));
    };

    const addGalleryImage = (blockId) => {
        setForm((current) => ({
            ...current,
            content: {
                blocks: current.content.blocks.map((block) => (
                    block.id === blockId
                        ? { ...block, items: [...block.items, { image: null, caption: '', alt: '' }] }
                        : block
                )),
            },
        }));
    };

    const updateGalleryImage = (blockId, itemIndex, patch) => {
        setForm((current) => ({
            ...current,
            content: {
                blocks: current.content.blocks.map((block) => (
                    block.id === blockId
                        ? {
                            ...block,
                            items: block.items.map((item, index) => (
                                index === itemIndex ? { ...item, ...patch } : item
                            )),
                        }
                        : block
                )),
            },
        }));
    };

    const removeGalleryImage = (blockId, itemIndex) => {
        setForm((current) => ({
            ...current,
            content: {
                blocks: current.content.blocks.map((block) => (
                    block.id === blockId
                        ? { ...block, items: block.items.filter((_, index) => index !== itemIndex) }
                        : block
                )),
            },
        }));
    };

    const reorderBlocks = (targetId) => {
        if (!draggedBlockId || draggedBlockId === targetId) return;

        setForm((current) => {
            const blocks = [...current.content.blocks];
            const fromIndex = blocks.findIndex((block) => block.id === draggedBlockId);
            const toIndex = blocks.findIndex((block) => block.id === targetId);
            if (fromIndex === -1 || toIndex === -1) return current;

            const [movedBlock] = blocks.splice(fromIndex, 1);
            blocks.splice(toIndex, 0, movedBlock);
            return { ...current, content: { blocks } };
        });
    };

    const handleSave = async () => {
        if (!form.title.trim()) {
            setSaveError('El título es obligatorio.');
            return;
        }

        setIsSaving(true);
        setSaveError(null);

        const blocks = form.content.blocks
            .map(({ id: _id, ...block }) => {
                if (block.type === 'gallery') {
                    return { ...block, items: block.items.filter((item) => item.image) };
                }
                return block;
            })
            .filter((block) => {
                if (block.type === 'heading' || block.type === 'just_text') return Boolean(block.text?.trim());
                if (block.type === 'text_image') return Boolean(block.text || block.image);
                if (block.type === 'just_image') return Boolean(block.image);
                if (block.type === 'gallery') return block.items.length > 0;
                if (block.type === 'video') return Boolean(block.url);
                if (block.type === 'link') return Boolean(block.url?.trim());
                return false;
            });

        const payload = {
            categoria: form.categoria,
            date: form.date || new Date().toISOString().slice(0, 10),
            author: form.author,
            rol: form.rol,
            tags: form.tags.split(',').map((tag) => tag.trim()).filter(Boolean),
            visible: form.visible,
            title: form.title,
            subtitle: form.subtitle,
            link: form.link,
            thumbnail: form.thumbnail || null,
            content: { blocks },
        };

        try {
            await onSave(payload);
        } catch (error) {
            setSaveError(error.message);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <ModalOverlay role="dialog" aria-modal="true" aria-label="Editor de novedad">
            <ModalStyled>
                <header className="modal-header">
                    <h2>{initialNews ? 'Editar novedad' : 'Crear novedad'}</h2>
                    <button type="button" className="close-button" onClick={onClose} aria-label="Cerrar">×</button>
                </header>

                <div className="modal-body">
                    <section className="fields-grid">
                        <label>
                            Título
                            <input value={form.title} onChange={(event) => updateField('title', event.target.value)} />
                        </label>
                        <label>
                            Subtítulo
                            <input value={form.subtitle} onChange={(event) => updateField('subtitle', event.target.value)} />
                        </label>
                        <label>
                            Categoría
                            <input value={form.categoria} onChange={(event) => updateField('categoria', event.target.value)} />
                        </label>
                        <label>
                            Fecha
                            <input type="date" value={form.date} onChange={(event) => updateField('date', event.target.value)} />
                        </label>
                        <label>
                            Autor
                            <input value={form.author} onChange={(event) => updateField('author', event.target.value)} />
                        </label>
                        <label>
                            Rol
                            <input value={form.rol} onChange={(event) => updateField('rol', event.target.value)} />
                        </label>
                        <label>
                            Tags (separados por coma)
                            <input value={form.tags} onChange={(event) => updateField('tags', event.target.value)} />
                        </label>
                        <label>
                            Enlace externo
                            <input value={form.link} onChange={(event) => updateField('link', event.target.value)} />
                        </label>
                        <label className="checkbox-field">
                            <input
                                type="checkbox"
                                checked={form.visible}
                                onChange={(event) => updateField('visible', event.target.checked)}
                            />
                            Visible en el sitio
                        </label>
                    </section>

                    <section className="fields-grid">
                        <div style={{ gridColumn: '1 / -1' }}>
                            <ImageUploadField
                                label="Miniatura (usada en la card de novedades)"
                                value={form.thumbnail}
                                onChange={(url) => updateField('thumbnail', url)}
                            />
                        </div>
                    </section>

                    <section className="block-palette">
                        <h3>Agregar contenido</h3>
                        <div className="palette-buttons">
                            <button type="button" onClick={() => addBlock('heading')}>+ Título</button>
                            <button type="button" onClick={() => addBlock('text_image')}>+ Texto con imagen</button>
                            <button type="button" onClick={() => addBlock('just_image')}>+ Solo imagen</button>
                            <button type="button" onClick={() => addBlock('just_text')}>+ Solo texto</button>
                            <button type="button" onClick={() => addBlock('gallery')}>+ Galería</button>
                            <button type="button" onClick={() => addBlock('video')}>+ Video</button>
                            <button type="button" onClick={() => addBlock('link')}>+ Vista previa de enlace</button>
                        </div>
                    </section>

                    <section className="content-blocks">
                        {form.content.blocks.map((block) => (
                            <div
                                className={`content-block${draggedBlockId === block.id ? ' is-dragging' : ''}`}
                                key={block.id}
                                draggable
                                onDragStart={() => setDraggedBlockId(block.id)}
                                onDragEnd={() => setDraggedBlockId(null)}
                                onDragOver={(event) => event.preventDefault()}
                                onDrop={() => reorderBlocks(block.id)}
                            >
                                <div className="block-header">
                                    <span className="drag-handle" aria-hidden="true">
                                        <FontAwesomeIcon icon={faGripVertical} />
                                    </span>
                                    <span>{blockLabels[block.type]}</span>
                                    <button type="button" className="remove-button" onClick={() => removeBlock(block.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>

                                {block.type === 'heading' && (
                                    <input
                                        placeholder="Texto del título"
                                        value={block.text}
                                        onChange={(event) => updateBlock(block.id, { text: event.target.value })}
                                    />
                                )}

                                {block.type === 'text_image' && (
                                    <>
                                        <textarea
                                            placeholder="Texto"
                                            value={block.text}
                                            onChange={(event) => updateBlock(block.id, { text: event.target.value })}
                                        />
                                        <ImageUploadField
                                            label="Imagen"
                                            value={block.image}
                                            onChange={(url) => updateBlock(block.id, { image: url })}
                                        />
                                        <input
                                            placeholder="Texto alternativo"
                                            value={block.alt || ''}
                                            onChange={(event) => updateBlock(block.id, { alt: event.target.value })}
                                        />
                                    </>
                                )}

                                {block.type === 'just_image' && (
                                    <>
                                        <ImageUploadField
                                            label="Imagen"
                                            value={block.image}
                                            onChange={(url) => updateBlock(block.id, { image: url })}
                                        />
                                        <input
                                            placeholder="Pie de imagen"
                                            value={block.caption || ''}
                                            onChange={(event) => updateBlock(block.id, { caption: event.target.value })}
                                        />
                                        <input
                                            placeholder="Texto alternativo"
                                            value={block.alt || ''}
                                            onChange={(event) => updateBlock(block.id, { alt: event.target.value })}
                                        />
                                    </>
                                )}

                                {block.type === 'just_text' && (
                                    <textarea
                                        placeholder="Texto"
                                        value={block.text}
                                        onChange={(event) => updateBlock(block.id, { text: event.target.value })}
                                    />
                                )}

                                {block.type === 'gallery' && (
                                    <div className="gallery-block">
                                        {block.items.map((item, itemIndex) => (
                                            <div className="gallery-item-editor" key={`${block.id}-${itemIndex}`}>
                                                <ImageUploadField
                                                    label={`Imagen ${itemIndex + 1}`}
                                                    value={item.image}
                                                    onChange={(url) => updateGalleryImage(block.id, itemIndex, { image: url })}
                                                />
                                                <input
                                                    placeholder="Pie de imagen"
                                                    value={item.caption || ''}
                                                    onChange={(event) => updateGalleryImage(block.id, itemIndex, { caption: event.target.value })}
                                                />
                                                <button
                                                    type="button"
                                                    className="remove-button"
                                                    onClick={() => removeGalleryImage(block.id, itemIndex)}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </div>
                                        ))}
                                        <button type="button" className="add-gallery-image" onClick={() => addGalleryImage(block.id)}>
                                            <FontAwesomeIcon icon={faPlus} /> Agregar imagen
                                        </button>
                                    </div>
                                )}

                                {block.type === 'video' && (
                                    <div className="video-block-editor">
                                        <div className="source-toggle">
                                            <button
                                                type="button"
                                                className={block.source === 'upload' ? 'is-active' : ''}
                                                onClick={() => updateBlock(block.id, { source: 'upload', url: null })}
                                            >
                                                Subir archivo
                                            </button>
                                            <button
                                                type="button"
                                                className={block.source === 'link' ? 'is-active' : ''}
                                                onClick={() => updateBlock(block.id, { source: 'link', url: null })}
                                            >
                                                Enlace externo
                                            </button>
                                        </div>

                                        {block.source === 'upload' ? (
                                            <VideoUploadField
                                                label="Video"
                                                value={block.url}
                                                onChange={(url) => updateBlock(block.id, { url })}
                                            />
                                        ) : (
                                            <input
                                                placeholder="https://youtube.com/... o enlace directo a video"
                                                value={block.url || ''}
                                                onChange={(event) => updateBlock(block.id, { url: event.target.value })}
                                            />
                                        )}
                                        <input
                                            placeholder="Pie de video (opcional)"
                                            value={block.caption || ''}
                                            onChange={(event) => updateBlock(block.id, { caption: event.target.value })}
                                        />
                                    </div>
                                )}

                                {block.type === 'link' && (
                                    <>
                                        <input
                                            placeholder="https://..."
                                            value={block.url}
                                            onChange={(event) => updateBlock(block.id, { url: event.target.value })}
                                        />
                                        <input
                                            placeholder="Título del enlace"
                                            value={block.title}
                                            onChange={(event) => updateBlock(block.id, { title: event.target.value })}
                                        />
                                        <input
                                            placeholder="Descripción breve"
                                            value={block.description}
                                            onChange={(event) => updateBlock(block.id, { description: event.target.value })}
                                        />
                                        <ImageUploadField
                                            label="Miniatura (opcional)"
                                            value={block.image}
                                            onChange={(url) => updateBlock(block.id, { image: url })}
                                        />
                                    </>
                                )}
                            </div>
                        ))}
                    </section>

                    {saveError && <p className="save-error">{saveError}</p>}
                </div>

                <footer className="modal-footer">
                    <button type="button" className="cancel-button" onClick={onClose}>Cancelar</button>
                    <button type="button" className="save-button" onClick={handleSave} disabled={isSaving}>
                        {isSaving ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Guardar'}
                    </button>
                </footer>
            </ModalStyled>
        </ModalOverlay>
    );
}

export default NewsEditorModal;

const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 200;
    display: grid;
    place-items: center;
    padding: 1.5rem;
    background: rgba(20, 10, 40, 0.55);
    backdrop-filter: blur(4px);
`;

const ModalStyled = styled.div`
    width: min(100%, 780px);
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    border-radius: 1.4rem;
    background: #fdfbff;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
    overflow: hidden;

    .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.1rem 1.4rem;
        background: var(--color-gradient);
        color: var(--color-white);
    }

    .modal-header h2 {
        margin: 0;
        font-family: var(--font-heading);
        font-size: 1.2rem;
    }

    .close-button {
        border: 0;
        background: transparent;
        color: var(--color-white);
        font-size: 1.5rem;
        line-height: 1;
        cursor: pointer;
    }

    .modal-body {
        flex: 1;
        overflow-y: auto;
        padding: 1.2rem 1.4rem;
        display: grid;
        gap: 1.4rem;
    }

    .fields-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.8rem;
    }

    .fields-grid label {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        color: var(--color-dark-purple);
        font-family: var(--font-body);
        font-size: 0.8rem;
        font-weight: 600;
    }

    .fields-grid input,
    textarea {
        border: 1px solid var(--color-border);
        border-radius: 0.6rem;
        padding: 0.5rem 0.65rem;
        font-family: var(--font-body);
        font-size: 0.88rem;
    }

    textarea {
        min-height: 90px;
        resize: vertical;
    }

    .checkbox-field {
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }

    .block-palette h3 {
        margin: 0 0 0.6rem;
        color: var(--color-dark-purple);
        font-family: var(--font-heading);
        font-size: 1rem;
    }

    .palette-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
    }

    .palette-buttons button {
        padding: 0.55rem 0.9rem;
        border: 1px solid var(--color-institutional-purple);
        border-radius: 999px;
        background: rgba(127, 70, 219, 0.08);
        color: var(--color-institutional-purple);
        font-family: var(--font-body);
        font-size: 0.8rem;
        font-weight: 700;
        cursor: pointer;
    }

    .palette-buttons button:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    .content-blocks {
        display: grid;
        gap: 0.9rem;
    }

    .content-block {
        display: grid;
        gap: 0.55rem;
        padding: 0.9rem;
        border: 1px solid var(--color-border);
        border-radius: 0.9rem;
        background: rgba(127, 70, 219, 0.04);
        cursor: grab;
    }

    .content-block.is-dragging {
        opacity: 0.5;
        border-style: dashed;
    }

    .drag-handle {
        color: var(--color-text);
        opacity: 0.6;
        cursor: grab;
    }

    .block-header {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        color: var(--color-dark-purple);
        font-family: var(--font-heading);
        font-size: 0.85rem;
        font-weight: 700;
    }

    .block-header span:nth-child(2) {
        flex: 1;
    }

    .remove-button {
        border: 0;
        background: transparent;
        color: #b3364a;
        cursor: pointer;
    }

    .image-upload-field {
        display: grid;
        gap: 0.4rem;
    }

    .image-upload-field label {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        font-size: 0.78rem;
        font-weight: 600;
        color: var(--color-dark-purple);
    }

    .upload-status { color: var(--color-institutional-purple); font-size: 0.78rem; }
    .upload-error { color: #b3364a; font-size: 0.78rem; }

    .image-preview img {
        max-width: 200px;
        max-height: 140px;
        border-radius: 0.6rem;
        object-fit: cover;
    }

    .image-preview video {
        max-width: 260px;
        max-height: 160px;
        border-radius: 0.6rem;
    }

    .gallery-block {
        display: grid;
        gap: 0.7rem;
    }

    .gallery-item-editor {
        display: grid;
        gap: 0.4rem;
        padding: 0.7rem;
        border: 1px dashed var(--color-border);
        border-radius: 0.7rem;
    }

    .add-gallery-image {
        justify-self: start;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.5rem 0.85rem;
        border: 1px dashed var(--color-institutional-purple);
        border-radius: 999px;
        background: transparent;
        color: var(--color-institutional-purple);
        font-family: var(--font-body);
        font-size: 0.78rem;
        font-weight: 700;
        cursor: pointer;
    }

    .video-block-editor {
        display: grid;
        gap: 0.55rem;
    }

    .source-toggle {
        display: flex;
        gap: 0.5rem;
    }

    .source-toggle button {
        padding: 0.4rem 0.8rem;
        border: 1px solid var(--color-institutional-purple);
        border-radius: 999px;
        background: transparent;
        color: var(--color-institutional-purple);
        font-family: var(--font-body);
        font-size: 0.76rem;
        font-weight: 700;
        cursor: pointer;
    }

    .source-toggle button.is-active {
        background: var(--color-institutional-purple);
        color: var(--color-white);
    }

    .save-error { margin: 0; color: #b3364a; font-family: var(--font-body); font-size: 0.85rem; }

    .modal-footer {
        display: flex;
        justify-content: flex-end;
        gap: 0.75rem;
        padding: 1rem 1.4rem;
        border-top: 1px solid var(--color-border);
        background: #fff;
    }

    .cancel-button {
        padding: 0.6rem 1.1rem;
        border: 1px solid var(--color-border);
        border-radius: 0.7rem;
        background: transparent;
        color: var(--color-text);
        cursor: pointer;
    }

    .save-button {
        padding: 0.6rem 1.3rem;
        border: 0;
        border-radius: 0.7rem;
        background: var(--color-institutional-purple);
        color: var(--color-white);
        font-weight: 700;
        cursor: pointer;
    }

    .save-button:disabled { opacity: 0.6; cursor: not-allowed; }

    @media (max-width: 640px) {
        .fields-grid { grid-template-columns: 1fr; }
    }
`;
