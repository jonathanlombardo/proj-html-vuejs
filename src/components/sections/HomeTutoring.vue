<script>
// import MyComp from './components/MyComp.vue';
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

  components: {},

  created() {
    // ...
  },
};
</script>

<template>
  <div class="wrapper">
    <h2>
      The Trusted Name <br />
      for In-Home Tutoring
    </h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus veniam, excepturi quod atque, necessitatibus optio quia itaque illum quidem nam ea ullam harum magnam unde dolorem quas, maxime aut iusto?</p>
    <a href="#">Learn more</a>
    <img src="../../assets/img/h5-img-1.jpg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/mixins" as *;
@use "../../assets/scss/partials/var" as *;
.wrapper {
  > * {
    margin-top: $space-m;
  }

  img {
    width: 100%;
  }

  a {
    display: block;
  }
}
</style>
