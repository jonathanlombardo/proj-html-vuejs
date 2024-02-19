<script>
import AppHeader from "./components/AppHeader.vue";
import AppHero from "./components/sections/AppHero.vue";
import AppMain from "./components/AppMain.vue";
// import {store} from './store/index.js'

export default {
  data() {
    return {
      // store,
      // ...
    };
  },

  props: {
    // ...
  },

  methods: {
    // ...
  },

  components: { AppHeader, AppHero, AppMain },

  created() {
    // ...
  },
};
</script>

<template>
  <AppHeader class="header">
    <template #hero>
      <AppHero class="header-hero" />
    </template>
  </AppHeader>

  <AppMain></AppMain>
</template>

<style lang="scss">
@use "./assets/scss/global.scss";
@use "./assets/scss/partials/var" as *;
</style>
