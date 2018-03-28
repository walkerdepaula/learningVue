<template>
  <div>
    <b-card-group deck>
      <stock-item
      v-for="stock in stocks"
      :key="stock.id"
      :model="stock"></stock-item>
    </b-card-group>
  </div>
</template>

<script>
import StockItem from "./stock.vue";

export default {
  name: "StockList",
  components: {
    StockItem
  },
  data() {
    return {
      stocks: []
    }
  },
  methods: {
    fetchData() {
      this.$http.get('stocks.json')
      .then( (response) => {
        this.stocks = response.body
      });
    }
  },
  created() {
    this.fetchData();
  }
}
</script>

<style>

</style>
