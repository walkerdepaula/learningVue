<template>
  <div class="progress-bar-wrapper">
    <div class="progress-bar"
    :style="{ width: progressStatus + '0%' }">
      {{ progressStatus }} / 10
    </div>
  </div>
</template>

<script>
import { EventBuss } from '../../../plugin/eventBuss.js';

export default {
  name: 'ProgresseBar',
  data() {
    return {
      progressStatus: 0
    }
  },
  methods: {
    onAddQuote() {
      if (this.progressStatus < 10) {
        this.progressStatus += 1;
      }
    },
    onDeleteQuote() {
      if (this.progressStatus > 0) {
        this.progressStatus -= 1;
      }
    }
  },
  created() {
    EventBuss.$on('onAddQuote', this.onAddQuote)
    EventBuss.$on('onDeleteQuote', this.onDeleteQuote)
  }
}
</script>

<style scoped>
  .progress-bar-wrapper {
    width: 100%;
    height: 20px;
    display: block;
    background: rgb(214, 214, 214);
    border-radius: 5px;
  }

  .progress-bar {
    overflow: hidden;
    color: white;
    background: rgb(58, 58, 197);
  }
</style>
