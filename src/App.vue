<script>
import AppHeader from "./components/AppHeader.vue";
import AppHero from "./components/sections/AppHero.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
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

  components: { AppHeader, AppHero, AppMain, AppFooter },

  created() {
    // ...
  },
};
</script>

<template>
  <header>
    <AppHeader>
      <template #hero>
        <AppHero />
      </template>
    </AppHeader>
  </header>

  <main>
    <AppMain />
  </main>

  <footer>
    <AppFooter />
  </footer>
</template>

<style lang="scss">
@use "./assets/scss/global.scss";
@use "./assets/scss/partials/var" as *;

footer {
  background-color: black;
  color: aliceblue;
}
</style>
