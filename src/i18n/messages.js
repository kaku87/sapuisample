// Very small .properties parser and accessor for JA messages
import jaRaw from './messages_ja.properties?raw';

function parseProperties(raw) {
  const map = {};
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

const JA = parseProperties(jaRaw);

export function t(id) {
  return JA[id] ?? id;
}

export default { t };

