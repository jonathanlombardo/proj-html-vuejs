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

  emits: ["clicked"],
};
</script>

<template>
  <div v-if="top" class="top" :class="active ? 'active' : ''" @click="$emit('clicked')">
    <font-awesome-icon icon="fa-solid fa-angle-up" />
    <span>TOP</span>
  </div>
  <div v-else-if="cart" class="cart" :class="active ? 'active' : ''" @click="$emit('clicked')">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height: 25px" fill="currentColor">
      <circle cx="9" cy="21" r="2" />
      <circle cx="20" cy="21" r="2" />
      <path d="M23.8 5.4c-.2-.3-.5-.4-.8-.4H6.8L6 .8C5.9.3 5.5 0 5 0H1C.4 0 0 .4 0 1s.4 1 1 1h3.2L5 6.2v.1l1.7 8.3C7 16 8.2 17 9.6 17H19.4c1.5 0 2.7-1 3-2.4L24 6.2c0-.3 0-.6-.2-.8z" />
    </svg>
  </div>
  <div v-else-if="stat" class="stat" :class="active ? 'active' : ''" @click="$emit('clicked')">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87 87" style="height: 26px" fill="currentColor">
      <path d="M55.4 81.5c6.1-11.1 5.2-16.1-4.3-24.3 6.1-3.5 9.5-8.5 9.1-15.7-.5-8.2-7.7-14.7-16.3-14.6-8.5.1-15.6 6.7-15.9 15-.3 8.5 5.9 15.8 14.3 16.6 1.4.1 2.8.2 4.2.5 5.9 1.2 10.2 6.7 9.8 12.6-.4 6.4-5.5 11.4-11.8 11.7-19.6.9-38.6-14.8-41.3-34C-.1 26.9 14.4 6.8 36.4 2.8c22.3-4 43.4 10 48.1 32 4.3 20-8.6 41.2-28.4 46.7h-.7z" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/var" as *;

$dim-big: 60px;
$dim-small: 50px;

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 8px 0 #00000054;

  width: $dim-big;
  height: $dim-big;
  font-size: 1.2rem;

  position: fixed;
  left: 100vw;
  z-index: 2;

  transition: 0.4s;

  &.active {
    left: calc(100vw - $dim-big - 20px);
  }
  .top {
    background-color: $bg-primary;
    color: $col-light;
    bottom: 20vh;
    &.active {
      left: calc(100vw - $dim-big - 20px);
    }
  }

  .cart {
    width: $dim-small;
    height: $dim-small;
    background-color: $col-light;
    color: $bg-secondary-light;
    bottom: calc(20vh + $dim-big + $space-l);
    &.active {
      left: calc(100vw - $dim-small - 20px);
    }
  }

  .stat {
    width: $dim-small;
    height: $dim-small;
    background-color: $bg-secondary-light;
    color: $col-light;
    bottom: calc(20vh + $dim-big + $space-l + $dim-small + $space-s);
    &.active {
      left: calc(100vw - $dim-small - 20px);
    }
  }
}
</style>
