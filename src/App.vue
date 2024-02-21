<script>
import AppHeader from "./components/AppHeader.vue";
import AppHero from "./components/sections/AppHero.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      pageY: 0,
    };
  },

  methods: {
    handleTopClick() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },

  components: { AppHeader, AppHero, AppMain, AppFooter },

  created() {
    window.addEventListener("scroll", () => {
      this.pageY = window.scrollY;
    });
  },
};
</script>

<template>
  <fixed-block :top="true" :active="pageY > 700" @clicked="handleTopClick()" />
  <fixed-block :cart="true" :active="pageY > 700" />
  <fixed-block :stat="true" :active="pageY > 700" />
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
  margin-top: $space-xl;
}
</style>
