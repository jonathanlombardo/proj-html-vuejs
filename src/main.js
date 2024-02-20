import { createApp } from "vue";
import App from "./App.vue";
import AppLogo from "./components/AppLogo.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
library.add(faTwitter, faFacebookF, faInstagram, faPhone, faClock);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("app-logo", AppLogo);

app.mount("#app");
