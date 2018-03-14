<template>
  <section>
    <h2>Quotes added</h2>

    <div class="row">
      <div class="col-md-12">
        <progresse-bar></progresse-bar>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <quote-writer></quote-writer>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <quotes></quotes>
      </div>
    </div>
  </section>
</template>

<script>
import progresseBar from './_components/progress-bar.vue'
import quoteWriter from './_components/quote-writer.vue'
import quotes from './_components/quotes.vue'

export default {
  components: {
    progresseBar,
    quoteWriter,
    quotes
  }
}
</script>

<style>

</style>
