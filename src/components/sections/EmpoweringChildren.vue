<script>
// import MyComp from './components/MyComp.vue';
// import {store} from './store/index.js'

export default {
  data() {
    return {
      counters: [
        {
          count: 168,
          name: "user stories",
        },
        {
          count: 347,
          name: "events",
        },
      ],
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
  <div class="row">
    <div class="col">
      <img src="../../assets/img/h5-img-2.jpg" alt="Hands hold up the world" />
    </div>
    <div class="col">
      <h2>Empowering Children to Reach Their Potential.</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus veniam, excepturi quod atque, necessitatibus optio quia itaque illum quidem nam ea ullam harum magnam unde dolorem quas, maxime aut iusto?</p>
      <div class="counters">
        <div v-for="counter in counters">
          <div>{{ counter.count }}</div>
          <div>{{ counter.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/mixins" as *;
@use "../../assets/scss/partials/var" as *;
.row {
  padding-bottom: $space-m;
  position: relative;
}
.col {
  width: 50%;
  margin: 0 auto;

  img {
    margin: 0 auto;
  }
}

.counters {
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
}
</style>
