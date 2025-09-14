import { registerI18nLoader } from '@ui5/webcomponents-base/dist/asset-registries/i18n.js';
import { getI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle.js';
import { setFetchDefaultLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';

import enRaw from './messagebundle_en.properties?raw';
import jaRaw from './messagebundle_ja.properties?raw';

export const APP_I18N_PACKAGE = 'app';

function parseProperties(raw: string): Record<string, string> {
  const map: Record<string, string> = {};
  if (!raw) return map;
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('!')) continue;
    const eq = trimmed.indexOf('=');
    const sep = eq >= 0 ? eq : trimmed.indexOf(':');
    if (sep < 0) continue;
    const key = trimmed.slice(0, sep).trim();
    const val = trimmed.slice(sep + 1).trim();
    if (key) map[key] = val;
  }
  return map;
}

// Register loaders for needed locales
setFetchDefaultLanguage(true);
registerI18nLoader(APP_I18N_PACKAGE, 'en', async () => parseProperties(enRaw));
registerI18nLoader(APP_I18N_PACKAGE, 'ja', async () => parseProperties(jaRaw));

export async function getAppBundle() {
  return getI18nBundle(APP_I18N_PACKAGE);
}
