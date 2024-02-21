import { createApp } from "vue";

import App from "./App.vue";
import AppLogo from "./components/AppLogo.vue";
import AppBtn from "./components/AppBtn.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faClock, faBars, faBagShopping, faMagnifyingGlass, faCircle, faCheck, faUser, faTag, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
library.add(faTwitter, faFacebookF, faInstagram, faPhone, faClock, faBars, faBagShopping, faMagnifyingGlass, faCircle, faCircleDot, faCheck, faUser, faTag, faXmark);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("app-logo", AppLogo);
app.component("app-btn", AppBtn);

app.mount("#app");
