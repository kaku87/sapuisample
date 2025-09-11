import { defineStore } from 'pinia';

export const useErrorStore = defineStore('error', {
  state: () => ({
    status: null,
  }),
  actions: {
    setStatus(code) {
      const n = Number(code);
      this.status = Number.isFinite(n) ? n : null;
    },
    clear() {
      this.status = null;
    },
  },
});

export default useErrorStore;

