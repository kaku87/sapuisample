<template>
  <div class="home-wrap">
    <div class="home-layout">
      <h1 class="home-title">错误页面跳转测试</h1>
      <div class="home-actions">
        <ui5-button design="Negative" @click="go(500)">跳转 500 错误</ui5-button>
        <ui5-button design="Attention" @click="go(403)">跳转 403 错误</ui5-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function go(code: number) {
  // Navigate with status via route param
  router.push({ name: 'error', params: { status: code } });
}
</script>

<style scoped>
.home-wrap { min-height: 100vh; display: grid; place-items: center; padding: 24px; }
.home-layout { display: grid; gap: 16px; justify-items: center; }
.home-title { margin: 0; color: #3f5161; font-weight: 600; font-size: 20px; }
.home-actions { display: flex; gap: 12px; }
</style>
