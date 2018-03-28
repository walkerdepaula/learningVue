<template>
  <b-navbar toggleable type="light" variant="light">
    <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>

    <b-navbar-brand>
      <router-link to="/">{{ $t('appName') }}</router-link>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_text_collapse">
      <b-navbar-nav>
        <b-nav-item to="/portfolio">
          {{ $t('pages.portfolio') }}
        </b-nav-item>
        <b-nav-item to="/stocks">
          {{ $t('pages.stocks') }}
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="finishDay()">
          {{ $t('navbar.finish') }}
        </b-nav-item>

        <b-nav-item-dropdown right :text="$t('navbar.dropdown-button')">
          <b-dropdown-item @click="saveData()">Save</b-dropdown-item>
          <b-dropdown-item @click="loadData()">Load</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-text><strong>{{ $t('navbar.founds') }}: {{ foundsAvailable | toCurrency }} </strong></b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    foundsAvailable() {
      return this.$store.getters.getFoundsAvailable
    }
  },
  methods: {
    finishDay() {
      console.log('finalizar dia deve lodar os preços das ações novamente.');
    },
    loadData() {
      console.log('deve carregar meus dados antigos salvos do dia anterior.');
    },
    saveData() {
      console.log('deve salvar os valores das ações desse dia.');
    }
  }
}
</script>

<style scoped>
  .navbar {
    margin: 20px 0;
  }
</style>
