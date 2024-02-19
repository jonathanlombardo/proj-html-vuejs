<script>
import BoxIco from "./sections/BoxIco.vue";
import HomeTutoring from "./sections/HomeTutoring.vue";
import EmpoweringChildren from "./sections/EmpoweringChildren.vue";
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

  components: { BoxIco, HomeTutoring, EmpoweringChildren },

  created() {
    // ...
  },
};
</script>

<template>
  <section>
    <div class="container">
      <BoxIco />
    </div>
  </section>
  <section>
    <div class="container">
      <HomeTutoring />
    </div>
  </section>
  <section>
    <div class="container">
      <EmpoweringChildren />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/mixins" as *;
@use "../assets/scss/partials/var" as *;

section {
  margin-top: $space-xl;
}
</style>
