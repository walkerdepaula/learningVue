import Vue from 'vue'
import VueResource from 'vue-resource'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueResource)

Vue.http.options.progress = function (event) {
  if (event.lengthComputable) {
    NProgress.set(event.loaded / event.total)
  }
}

export function loaderInterceptor(request, next) {
  NProgress.start()

  next( (response) => {
    NProgress.done()

    return response
  })
}