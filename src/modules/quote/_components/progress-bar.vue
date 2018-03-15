<template>
  <div class="progress-bar-wrapper">
    <div class="progress-bar"
    :style="{ width: progressStatus / maxOfQuotes * 100 + '%' }">
      {{ progressStatus }} / {{ maxOfQuotes }}
    </div>
  </div>
</template>

<script>
import { EventBuss } from '../../../plugin/eventBuss.js';

export default {
  name: 'ProgresseBar',
  props: {
    maxOfQuotes: {
      type: Number
    },
    progressStatus: {
      type: Number
    }
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
