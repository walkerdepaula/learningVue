<template>
  <div class="col-md-4">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { EventBuss } from '../../../plugin/eventBuss.js'

export default {
  name: 'Quote'
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
