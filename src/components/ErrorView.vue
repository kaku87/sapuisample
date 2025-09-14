<template>
  <div class="error-page">
    <div class="brand-bar" />
    <div class="wrap">
      <div class="ias-layout">
        <!-- Alert box on top -->
        <ui5-message-strip
          class="ias-alert"
          :design="status === 500 ? 'Negative' : 'Attention'"
          hide-close-button
        >
          <div class="ias-alert-ja">{{ messageText }}</div>
        </ui5-message-strip>

        <!-- Cloud icon + titles -->
        <div class="ias-hero">
          <div class="ias-hero-icon">
            <ui5-icon name="business-suite-v1/face-bad"></ui5-icon>
          </div>
          <div class="ias-title-en">おっと。</div>
          <div class="ias-subtitle-en">問題が発生しました。</div>
          <div class="ias-badge-cn">{{ messageText }}</div>
        </div>

        <!-- No local simulation buttons; status driven by route params -->

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
// Register icon component and explicitly register v1 icon variant
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents-icons-business-suite/dist/v1/face-bad.js';
import { getAppBundle } from '../i18n/bundle.ts';

// Read status from route params only (single source of truth)
const route = useRoute();
const status = computed<number | null>(() => {
  const fromParam = route.params?.status;
  const raw = fromParam ?? null;
  const n = Number(raw);
  return Number.isFinite(n) ? n : null;
});

const messageId = computed(() => {
  const s = Number(status.value);
  if (s === 403) return 'COMMON-ERROR-403';
  if (s === 500) return 'COMMON-ERROR-500';
  return 'COMMON-ERROR-500';
});

const bundle = ref<any | null>(null);
onMounted(async () => {
  bundle.value = await getAppBundle();
});

const messageText = computed(() =>
  bundle.value ? bundle.value.getText(messageId.value) : messageId.value
);

function onRetry() { window.location.reload(); }
function onBack() {
  if (history.length > 1) history.back();
  else window.location.href = '/';
}
</script>

<style scoped>
/* Error page-only styles moved here */
.error-page {
  min-height: 100vh;
  background-color: var(--sapBackgroundColor, #eaf0f2);
  background-image: linear-gradient(180deg, #d8eef1 0%, #e6edf1 35%, #e9eef2 100%);
}
.brand-bar {
  height: 2px;
  width: 100%;
  background: var(--sapBrandColor, #0a6ed1);
}
.wrap {
  min-height: calc(100vh - 2px);
  display: grid;
  place-items: start center; /* slightly higher like IAS */
  padding: 48px 24px 24px;
}

.ias-layout { display: grid; justify-items: center; gap: 28px; }

.ias-alert {
  max-width: 320px;
  width: 90vw;
  --_ui5_message_strip_padding_inline: 12px; /* compact */
  --_ui5_message_strip_padding_block: 8px;
}
.ias-alert-ja { margin-top: 0; font-size: 12px; opacity: 0.95; }

.ias-hero { display: grid; justify-items: center; gap: 8px; }
.ias-hero-icon {
  height: 92px;
  width: 92px;
  border-radius: 50%;
  background: #ffffff66; /* soft circle */
  border: 2px solid #d2d6da;
  display: grid;
  place-items: center;
}
.ias-hero-icon ui5-icon { color: #6a6d70; --_ui5_icon_size: 44px; }
.ias-title-en { color: #6f8997; font-size: 20px; font-weight: 500; }
.ias-subtitle-en { color: #6f8997; font-size: 18px; font-weight: 400; }
.ias-badge-cn {
  margin-top: 8px;
  color: #6f8997;
  font-size: 18px;
  padding: 6px 10px;
  border: 2px dotted #b6c6cf;
  border-radius: 4px;
  background: transparent;
}


</style>
