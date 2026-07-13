
import { useEffect } from 'react';

export function useSEO({ title, description, keywords }) {
    useEffect(() => {
        if (title) document.title = title;
        if (description) {
            updateOrCreateMeta('name', 'description', description);
        }

        if (keywords) {
            updateOrCreateMeta('name', 'keywords', keywords);
        }
    }, [title, description, keywords]);
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