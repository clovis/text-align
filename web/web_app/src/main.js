// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import axios from "axios";
import Velocity from "velocity-animate";

import globalConfig from "../appConfig.json";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$globalConfig = globalConfig;

export const EventBus = new Vue(); // To pass messages between components


Vue.mixin({
    methods: {
        paramsToUrl: function(formValues) {
            var queryParams = [];
            for (var param in formValues) {
                queryParams.push(
                    `${param}=${encodeURIComponent(formValues[param])}`
                );
            }
            return queryParams.join("&");
        }
    }
});

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    template: "<App/>",
    components: { App }
});
