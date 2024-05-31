import type { RouteRecordRaw } from "vue-router";

export const studentRoutes: Array<RouteRecordRaw> = [
    {
      path: "",
      redirect: "student/dashboard",
    },
    {
      path: "dashboard",
      name: "StudentDashboard",
      component: () => import("./views/DashboardView.vue"),
    },
    {
      path: "assignments",
      name: "StudentAssignments",
      component: () => import("./views/AssignmentsView.vue"),
    },
    {
      path: "grades",
      name: "StudentGrades",
      component: () => import("./views/GradesView.vue"),
    }
];