<template>
  <div class="col-md-offset-2 col-md-8 text-center">
    <div class="form-group text-left">
      <h4>Quote</h4>

      <textarea
      name="quote"
      rows="5"
      placeholder="Write your quote"
      class="form-control"
      v-model="myQuote"></textarea>

      <span
      class="error-mensage"
      v-if="errorMensage">{{ errorMensage }}</span>
    </div>

    <button type="button" class="btn" @click="onAddQuote(myQuote)">Add quote</button>
  </div>
</template>

<script>
import { EventBuss } from '../../../plugin/eventBuss.js'

const WRITE_SOME_QUOTE = 'Write your quote first';

export default {
  name: 'QuoteWriter',
  data() {
    return {
      myQuote: null,
      errorMensage: null
    }
  },
  methods: {
    onAddQuote() {
      if (this.myQuote) {
        this.errorMensage = null;

        EventBuss.$emit('onAddQuote', this.myQuote);

      } else {
        this.errorMensage = WRITE_SOME_QUOTE;
      }
    }
  }
}
</script>

<style scoped>
  button {
    color: white;
    background: rgb(58, 58, 197);
  }

  .error-mensage {
    color: red;
  }

</style>
