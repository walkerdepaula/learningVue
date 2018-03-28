<template>
  <div id="app" class="container-fluid">
    <app-navbar></app-navbar>

    <router-view/>
  </div>
</template>

<script>
import appNavbar from './shared/modules/navbar/_components/navbar.vue'

export default {
  name: "RootApp",
  components: {
    appNavbar
  }
}
</script>


<style lang="scss">

</style>
