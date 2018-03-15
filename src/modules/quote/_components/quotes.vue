<template>
  <div class="quote-group">
    <quote
    v-for="(myQuote, index) in quotes"
    @click.native="onDeleteQuote(index)">
      {{ myQuote }}
    </quote>

    <div class="col-md-12 alert alert-info text-center">
      <strong
      v-if="this.quotes.length === 10">
        Number max of quotes
        <br>
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
  props: {
    quotes: {
      type: Array
    }
  },
  methods: {
    onDeleteQuote(quoteId) {
      EventBuss.$emit('onDeleteQuote', quoteId)
    }
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
