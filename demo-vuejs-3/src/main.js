import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from "@/i18n/i18n.ts";
import { router } from "@/plugins/router/router.ts";
import { BootstrapVue3 } from 'bootstrap-vue-3'
import { pinia } from "@/plugins/pinia.ts";

// Add Boostrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// add icon bootstap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';





const app = createApp(App);

app.use(pinia);
app.use(i18n);
app.use(router);
app.use(BootstrapVue3);

app.mount('#app')
