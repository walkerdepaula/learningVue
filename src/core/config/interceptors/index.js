import Vue from 'vue'
import VueResource from 'vue-resource'

import {errorInterceptor} from './error.interceptor'
import {loaderInterceptor} from './loader.interceptor'

Vue.use(VueResource);

Vue.http.interceptors.push(errorInterceptor)
Vue.http.interceptors.push(loaderInterceptor)