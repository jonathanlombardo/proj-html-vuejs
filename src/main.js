import { createApp } from "vue";
import App from "./App.vue";
import AppLogo from "./components/AppLogo.vue";

const app = createApp(App);

app.component("app-logo", AppLogo);

app.mount("#app");
