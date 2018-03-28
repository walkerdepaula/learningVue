import Vue from 'vue'

Vue.filter('toCurrency', currencyFormatter);

function currencyFormatter(value) {
  if (typeof value !== "number") {
    return value;
  }

  var formatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0
  });

  return formatter.format(value);
}