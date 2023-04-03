import { defineStore } from "pinia";

export const useLayoutStore = defineStore({
  id: "layoutState",
  state: () => ({
    layouts: [],
    indexLayout: 0,
  }),
  getters: {},
  actions: {
    addLayout(data) {
      this.layouts = [data, ...this.layouts];
      this.indexLayout++;
    },
    async saveLayout() {
      this.layouts = [...this.layouts];
      await localStorage.clear();
      await localStorage.setItem("data", JSON.stringify(this.layouts));
      alert("success");
    },
    viewLayout() {
      this.layouts.length > 0
        ? window.open("/consumer", "_blank")
        : alert("layout not found");
    },
  },
});
