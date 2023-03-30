import { createRouter, createWebHistory } from "vue-router";
import Consumer from "@/views/consumer/index.vue";
import Admin from "@/views/admin/index.vue";

const routes = [
  {
    path: "/consumer",
    name: "consumerIndex",
    component: Consumer,
  },
  {
    path: "/",
    name: "consumerIndex",
    component: Admin,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
