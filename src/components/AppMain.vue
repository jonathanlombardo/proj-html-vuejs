<script>
import BoxIco from "./sections/BoxIco.vue";
import HomeTutoring from "./sections/HomeTutoring.vue";
import EmpoweringChildren from "./sections/EmpoweringChildren.vue";
import StudentsStories from "./sections/StudentsStories.vue";
import CoursesDetails from "./sections/CoursesDetails.vue";
import PopCourses from "./sections/PopCourses.vue";
import PricingPlans from "./sections/PricingPlans.vue";
import AppPartners from "./sections/AppPartners.vue";

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

  components: { BoxIco, HomeTutoring, EmpoweringChildren, StudentsStories, CoursesDetails, PopCourses, PricingPlans, AppPartners },

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
  <section class="stories">
    <div class="container">
      <StudentsStories />
    </div>
  </section>
  <section>
    <div class="container">
      <CoursesDetails />
    </div>
  </section>
  <section class="bg-polig">
    <div class="container">
      <PopCourses />
    </div>
  </section>
  <section class="bg-polig">
    <div class="container">
      <PricingPlans />
    </div>
  </section>
  <section>
    <div class="container">
      <AppPartners />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/mixins" as *;
@use "../assets/scss/partials/var" as *;

section {
  margin-top: $space-xl;

  &.stories {
    background-image: url("../assets/img/interactive-map-slider-img-1.png");
    background-size: cover;
    background-position: center top 100px;
    background-repeat: no-repeat;
    background-color: $bg-primary;
  }

  &.bg-polig {
    background-image: url("../assets/img/background-pattern.jpg");
  }
}
</style>
