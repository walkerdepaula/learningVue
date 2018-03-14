<template>
  <div class="quote-group">
    <quote
    v-for="(myQuote, index) in quotes"
    :quote="{ text: myQuote, id: index }"></quote>

    <div class="col-md-12 alert alert-info text-center">
      <strong
      v-if="this.quotes.length === 10">
        Number max of quotes
      </strong>

      <small>Click in a quote to delete it</small>
    </div>
  </div>
</template>

<script>
import quote from './quote.vue';
import { EventBuss } from '../../../plugin/eventBuss.js'

export default {
  name: 'Quotes',
  components: {
    quote
  },
  data() {
    return {
      quotes: []
    }
  },
  methods: {
    onAddQuote(newQuote) {
      if (this.quotes.length < 10) {
        this.quotes.push(newQuote);
      }
    },
    onDeleteQuote(index) {
      this.quotes.splice(index, 1)
    }
  },
  created() {
    EventBuss.$on('onAddQuote', this.onAddQuote)
    EventBuss.$on('onDeleteQuote', this.onDeleteQuote)
  }
}
</script>

<style scoped>
  .quote-group {
    margin: 15px 0;
  }

  .alert {
    margin: 15px 0;
  }
</style>
