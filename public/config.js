// Central Configuration for Control Tower n8n API endpoints
// Automatically detects environment: localhost vs deployed Render service
const N8N_PRODUCTION_URL = 'https://n8n-control-tower-anshul.onrender.com';

const N8N_BASE_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:5678'
    : N8N_PRODUCTION_URL;

/**
 * Builds a full webhook URL with automatic cache-busting
 * @param {string} endpoint - e.g. "webhook/scorecard-data"
 */
function getWebhookUrl(endpoint) {
    const clean = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    const sep = clean.includes('?') ? '&' : '?';
    return `${N8N_BASE_URL}/${clean}${sep}t=${Date.now()}`;
}

window.N8N_BASE_URL = N8N_BASE_URL;
window.getWebhookUrl = getWebhookUrl;
