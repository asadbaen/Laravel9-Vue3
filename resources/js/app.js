import "./bootstrap";

import { createApp } from "vue";
import * as VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";

const routes = [
    { path: "/", component: ExampleComponent },
    { path: "/about", component: AboutComponent },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory("/Laravue3/public/"),
    routes,
});

const app = createApp({});

app.use(router);

app.component("example-component", ExampleComponent);

app.mount("#app");
