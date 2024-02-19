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
  <app-header class="header">
    <template #hero>
      <app-hero class="header-hero" />
    </template>
  </app-header>

  <app-main></app-main>
</template>

<style lang="scss">
@use "./assets/scss/global.scss";
@use "./assets/scss/partials/var" as *;
</style>
