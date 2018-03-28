<template>
  <div class="home">
    <!-- IMG REFERENCE: -->
    <!-- <img src="../assets/logo.png"> -->

    <b-jumbotron :header="$t('welcome')" bg-variant="white" border-variant="gray">
      <p>{{ $t('home.tradeOrViewPortfolio') }}.</p>
      <p>{{ $t('home.introductionInstruction') }}</p>

      <hr class="my-4">

      <h3> {{ $t('home.yourFounds') }}: {{ foundsAvailable | toCurrency }}</h3>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'HomeApp',
  computed: {
    foundsAvailable() {
      return this.$store.getters.getFoundsAvailable
    }
  }
}
</script>
