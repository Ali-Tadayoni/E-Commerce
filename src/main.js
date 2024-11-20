import "./assets/main.css";
import "primeicons/primeicons.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { store } from "./store/store";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Toast);

app.mount("#app");
