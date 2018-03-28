import Vue from 'vue'
import VueResource from 'vue-resource'
import '../config/interceptors'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
Vue.http.options.root = 'https://learning-vue-e6ab9.firebaseio.com/'

// export const Auth = Vue.resource('/auth/local')