import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import UI5 Web Components assets and components (Horizon theme)
import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents/dist/Card.js';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/MessageStrip.js';
import '@ui5/webcomponents-fiori/dist/IllustratedMessage.js';
import '@ui5/webcomponents/dist/Icon.js';

import './style.css';
import './i18n/bundle';

const app = createApp(App);
app.use(router);
app.mount('#app');

