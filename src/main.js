import { createApp } from "vue/dist/vue.esm-bundler.js";
import App from "@/App.vue";
import router from "@/router";
import ModalButton from "@/plugins/ModalButton";
import VueCookies from "vue-cookies";
import "@/axios";

const app = createApp(App);

app.use(router).use(VueCookies).mount("#app");

app.component("ModalButton", ModalButton);
