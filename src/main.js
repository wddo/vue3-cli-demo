import { createApp, onUnmounted } from "vue/dist/vue.esm-bundler.js";
import App from "@/App.vue";
import router from "@/router";
import ModalButton from "@/plugins/ModalButton";
import axios from "axios";

axios.defaults.baseURL = "https://restful-booker.herokuapp.com";
axios.defaults.headers["Accept"] = "application/json";

const app = createApp(App);

app.use(router).mount("#app");

app.component("ModalButton", ModalButton);

app.config.token = null;
