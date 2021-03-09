import { createApp } from "vue";
import App from "./App.vue";
import Products from "./components/Products.vue";  //"@/components/Products.vue";// ici composant Products dvient globale pour toute application
import router from "./router";
const app = createApp(App);
app.component("Products", Products);
app.use(router);
app.mount("#app");
