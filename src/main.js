import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import { createPinia } from 'pinia';

// Import UI5 Web Components assets and components (Horizon theme)
import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents/dist/Card.js';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/MessageStrip.js';
import '@ui5/webcomponents-fiori/dist/IllustratedMessage.js';
import '@ui5/webcomponents/dist/Icon.js';

import './style.css';

// Icon component registered above; individual icons loaded per-view

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
