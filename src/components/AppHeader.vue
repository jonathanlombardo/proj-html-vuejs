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
  <header>
    <div class="container">
      <app-logo img="logo-light.png" />
      <nav>
        <ul>
          <li><a href="#">home</a></li>
          <li><a href="#">courses</a></li>
          <li><a href="#">instructors</a></li>
          <li><a href="#">events</a></li>
          <li><a href="#">pages</a></li>
          <li><a href="#">elements</a></li>
          <li><a href="#">LINK</a></li>
          <li><a href="#">LINK</a></li>
          <li><a href="#">LINK</a></li>
        </ul>
      </nav>
    </div>
    <slot name="hero"></slot>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/mixins" as *;
@use "../assets/scss/partials/var" as *;

.container {
  height: $header-h;
  font-size: 1.2rem;
  padding-top: $space-m;
  padding-bottom: $space-m;
  color: $col-light;

  position: relative;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    height: 100%;
  }

  ul {
    @include flex-center($space-l);
    height: 100%;

    li {
      height: 100%;
      display: flex;
      align-items: flex-end;

      a {
        text-transform: uppercase;
        padding-bottom: 5px;
      }
    }
  }
}
</style>
