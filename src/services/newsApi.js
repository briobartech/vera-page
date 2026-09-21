const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

async function handleResponse(response) {
    if (!response.ok) {
        const detail = await response.json().catch(() => null);
        throw new Error(detail?.detail || `Request failed with status ${response.status}`);
    }
    if (response.status === 204) return null;
    return response.json();
}

export function fetchNewsList() {
    return fetch(`${API_BASE_URL}/api/news`).then(handleResponse);
}

export function fetchNewsItem(newsId) {
    return fetch(`${API_BASE_URL}/api/news/${newsId}`).then(handleResponse);
}

export function createNews(payload) {
    return fetch(`${API_BASE_URL}/api/news`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    }).then(handleResponse);
}

export function updateNews(newsId, payload) {
    return fetch(`${API_BASE_URL}/api/news/${newsId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    }).then(handleResponse);
}

export function deleteNews(newsId) {
    return fetch(`${API_BASE_URL}/api/news/${newsId}`, { method: 'DELETE' }).then(handleResponse);
}

export function uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);
    return fetch(`${API_BASE_URL}/api/images`, { method: 'POST', body: formData }).then(handleResponse);
}

export function uploadVideo(file) {
    const formData = new FormData();
    formData.append('file', file);
    return fetch(`${API_BASE_URL}/api/videos`, { method: 'POST', body: formData }).then(handleResponse);
}

export default API_BASE_URL;
