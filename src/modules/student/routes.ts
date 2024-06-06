import type { RouteRecordRaw } from "vue-router";

export const studentRoutes: Array<RouteRecordRaw> = [
    {
      path: "",
      redirect: "student/dashboard",
      name: "RedirectLink"
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
      path: "assignments/:subjectId/",
      name: "AssignmentsSubject",
      component: () => import("./views/SubjectView.vue"),
    },
    {
      path: "assignments/:subjectId/:chapterId",
      name: "AssignmentsTopic",
      component: () => import("./views/ChapterView.vue"),
    },
    {
      path: "assignments/:subjectId/:chapterId/assignment/:topicId/",
      name: "AssignmentsTopic",
      component: () => import("./views/AssignmentView.vue"),
    },
    {
      path: "grades",
      name: "StudentGrades",
      component: () => import("./views/GradesView.vue"),
    }
];