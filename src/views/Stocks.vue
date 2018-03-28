<template>
  <div>
    <stocks-list></stocks-list>
  </div>
</template>

<script>
import StocksList from '@/shared/modules/stocks/_components/stocks-list.vue'

export default {
  name: 'StocksApp',
  components: {
    StocksList
  }
}
</script>

<style>

</style>
