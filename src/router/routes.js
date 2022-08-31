const routes = [
  {
    path: "/",
    component: () => import("layouts/LoadingLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      { path: "login", component: () => import("pages/LoginPage.vue") },
      { path: "register", component: () => import("pages/RegisterPage.vue") },
      {
        path: "register/doctor",
        component: () => import("pages/doctor/RegisterDoctor.vue"),
      },
      {
        path: "register/patient",
        component: () => import("pages/patient/RegisterPatient.vue"),
      },
    ],
  },
  // PAGE ERROR 404
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
