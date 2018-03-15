<template>
  <section>
    <h2>Quotes added</h2>

    <div class="row">
      <div class="col-md-12">
        <progresse-bar :max-of-quotes="maxOfQuotes" :progress-status="progressStatus"></progresse-bar>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <quote-writer></quote-writer>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <quotes-grid :quotes="quotes"></quotes-grid>
      </div>
    </div>
  </section>
</template>

<script>
import progresseBar from './_components/progress-bar.vue'
import quoteWriter from './_components/quote-writer.vue'
import quotesGrid from './_components/quotes.vue'
import { EventBuss } from '../../plugin/eventBuss.js'

export default {
  components: {
    progresseBar,
    quoteWriter,
    quotesGrid
  },
  data() {
    return {
      quotes: [],
      progressStatus: 0,
      maxOfQuotes: 10
    }
  },
  methods: {
    onAddQuote(newQuote) {
      if (this.quotes.length < 10) {
        this.quotes.push(newQuote);

        this.progressStatus = this.quotes.length
      }
    },
    onDeleteQuote(index) {
      this.quotes.splice(index, 1)

      this.progressStatus = this.quotes.length
    }
  },
  created() {
    EventBuss.$on('onAddQuote', this.onAddQuote)
    EventBuss.$on('onDeleteQuote', this.onDeleteQuote)
  }
}
</script>

<style>

</style>
