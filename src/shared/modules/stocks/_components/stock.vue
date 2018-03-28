<template>
  <div>
    <b-card class="card-wrapper"
      border-variant="info"
      :header="model.title"
      header-bg-variant="light"
      header-text-variant="info"
      align="left"
      :sub-title="model.description">

      <p class="card-text">
        {{ $t('stock.price') }}: {{ stock.randomPrice | toCurrency }} | {{ $t('stock.minQuantity') }}: {{ stock.quantity }}
      </p>

      <div class="card-text row">
        <div class="col-md-6">
          <b-form-input v-model="numberOfStock"
            type="number"
            :placeholder="$t('stock.quantity')"></b-form-input>
        </div>

        <div class="col-md-6 text-right">
          <b-button variant="info"
            :disabled="numberOfStock < stock.quantity">
            {{ $t('stock.buy') }}
          </b-button>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "StockItem",
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      numberOfStock: null,

      stock: {
        randomPrice: 0,
        quantity: 0
      }
    }
  },
  methods: {
    setRandomPrice(min, max) {
      this.stock.randomPrice = Math.floor( Math.random() * (max - min) + min )
    },
    setRamdomQuantity(min, max) {
      this.stock.quantity = Math.floor( Math.random() * (max - min) + min )
    }
  },
  created() {
    this.setRandomPrice(35, 110);
    this.setRamdomQuantity(1, 30);
  }
}
</script>

<style scoped lang="scss">
  .card-wrapper {
    margin-bottom: 20px;
  }
</style>
