import Vue from "vue";
import Vuelidate from "vuelidate";
import Paginate from "vuejs-paginate"
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import localizeFilter from "@/filters/localize.filter"
import tooltipDirective from "@/derectives/tooltip.directive";
import messagePlugin from "@/utils/message.plugin";
import Loader from "@/components/app/Loader";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.filter("localize", localizeFilter);
Vue.directive("tooltip", tooltipDirective);
Vue.component("Loader", Loader);
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: "AIzaSyBli3d46Ze91KE4EOIOZ2_w8YZMMpVZV7M",
  authDomain: "hello-world-3dc0d.firebaseapp.com",
  projectId: "hello-world-3dc0d",
  storageBucket: "hello-world-3dc0d.appspot.com",
  messagingSenderId: "709557263416",
  appId: "1:709557263416:web:ee5b7839c2a3a2a0b45acd",
  measurementId: "G-VL5EG25CSN",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
