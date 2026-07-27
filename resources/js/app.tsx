import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { route } from 'ziggy-js';

const appName = import.meta.env.VITE_APP_NAME || 'E-Catalog';

// daftarkan route() supaya bisa dipanggil global tanpa import manual
declare global {
    interface Window {
        route: typeof route;
    }
}
window.route = route;

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
});
