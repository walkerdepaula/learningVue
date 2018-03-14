<template>
  <div class="col-md-4" @click="onDeleteQuote(quote.id)">
    <span>{{ quote.text }}</span>
  </div>
</template>

<script>
import { EventBuss } from '../../../plugin/eventBuss.js'

export default {
  name: 'Quote',
  props: {
    quote: Object
  },
  methods: {
    onDeleteQuote(id) {
      EventBuss.$emit('onDeleteQuote', id)
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid gray;
    padding: 15px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: .5s;
  }

  div:hover {
    background: rgb(180, 85, 85);
    color: white;
    border-color: white;
  }
</style>
