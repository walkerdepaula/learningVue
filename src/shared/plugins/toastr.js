import Vue from 'vue'
import Toastr from '@/shared/modules/toastr/toastr.vue'

const Ctor = Vue.extend(Toastr)

function toastr (opts) {
  var instance = new Ctor({
    propsData: opts
  }).$mount()
  document.body.appendChild(instance.$el)
  return instance
}

export default {
  install () {
    Vue.toastr = toastr
    Vue.prototype.$toastr = toastr
  }
}