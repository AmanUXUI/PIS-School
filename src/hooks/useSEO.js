
import { useEffect } from 'react';

export function useSEO({ title, description, keywords, canonical }) {
    useEffect(() => {
        if (title) document.title = title;
        if (description) {
            updateOrCreateMeta('name', 'description', description);
        }

        if (keywords) {
            updateOrCreateMeta('name', 'keywords', keywords);
        }
        if (canonical) {
            updateOrCreateLink('canonical', canonical);
        }
    }, [title, description, keywords, canonical]);
}

function updateOrCreateMeta(attribute, value, content) {
    const selector = `meta[${attribute}="${value}"]`;
    let element = document.querySelector(selector);

    if (element) {
        element.setAttribute('content', content);
    } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        element.setAttribute('content', content);
        document.head.appendChild(element);
    }
}
function updateOrCreateLink(rel, href) {
    const selector = `link[rel="${rel}"]`;
    let element = document.querySelector(selector);

    if (element) {
        element.setAttribute('href', href);
    } else {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        element.setAttribute('href', href);
        document.head.appendChild(element);
    }
}