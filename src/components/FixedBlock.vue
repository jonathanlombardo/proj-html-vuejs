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
    top: Boolean,
    cart: Boolean,
    stat: Boolean,
    active: Boolean,
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
  <div v-if="top" class="top" :class="active ? 'active' : ''">
    <font-awesome-icon icon="fa-solid fa-angle-up" />
    <span>TOP</span>
  </div>
  <div v-else-if="cart" class="cart" :class="active ? 'active' : ''">
    <font-awesome-icon icon="fa-solid fa-angle-up" />
    <span>TOP</span>
  </div>
  <div v-else-if="stat" class="stat" :class="active ? 'active' : ''">
    <font-awesome-icon icon="fa-solid fa-angle-up" />
    <span>TOP</span>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/var" as *;

$dim: 60px;

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: $dim;
  height: $dim;
  font-size: 1.2rem;

  position: fixed;
  left: 100vw;
  z-index: 2;

  transition: 0.4s;

  &.active {
    left: calc(100vw - $dim - 20px);
  }
  .top {
    background-color: $bg-primary;
    color: $col-light;
    bottom: 20vh;
  }

  .cart {
    background-color: $bg-secondary-light;
    color: $col-light;
    bottom: calc(20vh + $dim + $space-m);
  }

  .stat {
    background-color: $bg-secondary-light;
    color: $col-light;
    bottom: calc(20vh + $dim * 2 + $space-m * 2);
  }
}
</style>
