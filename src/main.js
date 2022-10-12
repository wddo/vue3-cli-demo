import { createApp } from "vue/dist/vue.esm-bundler.js";
import App from "@/App.vue";
import router from "@/router";
import ModalButton from "@/plugins/ModalButton";

const app = createApp(App);

app.use(router).mount("#app");

app.component("ModalButton", ModalButton);
