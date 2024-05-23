import type { RouteRecordRaw } from "vue-router";

export const authRoutes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "auth/login",
  },
];