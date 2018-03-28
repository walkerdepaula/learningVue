import Vue from 'vue';

export function errorInterceptor(request, next) {
  next( (response) => {
    if (response.status >= 400) {
      Vue.toastr({
        message: response.statusText,
        type: 'danger'
      })
    };

    return response;
  })
}