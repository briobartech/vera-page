import API_BASE_URL from './newsApi';

export function sendContactMessage({ email, subject, message }) {
    return fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, subject, message }),
    }).then(async (response) => {
        if (!response.ok) {
            const detail = await response.json().catch(() => null);
            throw new Error(detail?.detail || `Request failed with status ${response.status}`);
        }
        return response.json();
    });
}
