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
        path: "login/doctor",
        component: () => import("pages/doctor/LoginDoctor.vue"),
      },
      {
        path: "register/patient",
        component: () => import("pages/patient/RegisterPatient.vue"),
      },
      {
        path: "login/patient",
        component: () => import("pages/patient/LoginPatient.vue"),
      },
    ],
  },
  {
    path: "/doctor",
    component: () => import("layouts/DoctorLayout.vue"),
    children: [
      {
        path: "dashboard",
        component: () => import("pages/doctor/DashboardDoctor.vue"),
      },
    ],
  },
  {
    path: "/patient",
    component: () => import("layouts/PatientLayout.vue"),
    children: [
      {
        path: "dashboard",
        component: () => import("pages/patient/DashboardPatient.vue"),
      },
      {
        path: "appointments",
        component: () => import("pages/patient/AppointmentsPatient.vue"),
      },
      {
        path: "add-appointment",
        component: () => import("pages/patient/AddAppointment.vue"),
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
