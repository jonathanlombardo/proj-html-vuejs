<script>
import AppHeader from "./components/AppHeader.vue";
import AppHero from "./components/sections/AppHero.vue";
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

  components: { AppHeader, AppHero },

  created() {
    // ...
  },
};
</script>

<template>
  <app-header class="header">
    <template #hero>
      <app-hero />
    </template>
  </app-header>
</template>

<style lang="scss">
@use "./assets/scss/global.scss";
</style>
