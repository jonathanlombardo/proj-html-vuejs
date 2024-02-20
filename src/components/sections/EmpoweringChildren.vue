<script>
import axios from "axios";

export default {
  data() {
    return {
      counters: [],

      error: {
        state: false,
        text: "",
      },
      isLoading: false,
    };
  },

  methods: {
    fetchCounter() {
      axios
        .get("http://localhost:3000/counters")
        .then((res) => {
          this.counters = res.data;
        })
        .catch((error) => {
          this.error.state = true;
          this.error.text = error;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },

  created() {
    this.isLoading = true;
    this.fetchCounter();
  },
};
</script>

<template>
  <div class="row">
    <div class="col col-image">
      <img src="../../assets/img/h5-img-2.jpg" alt="Hands hold up the world" />
    </div>
    <div class="col">
      <h2>Empowering Children to Reach Their Potential.</h2>
      <p class="main-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus veniam, excepturi quod atque, necessitatibus optio quia itaque illum quidem nam ea ullam harum magnam unde dolorem quas, maxime aut iusto?</p>
      <div class="error" v-if="error.state">{{ error.text }}</div>
      <div v-if="!isLoading && !error.state" class="counters">
        <div v-for="counter in counters">
          <div class="count">{{ counter.count }}</div>
          <div class="counter-name">{{ counter.name }}</div>
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

  > * {
    margin-bottom: $space-m;
  }

  &.col-image {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    img {
      margin-bottom: 0;
    }
  }
}

.counters {
  display: flex;
  text-transform: capitalize;
  color: $col-primary;

  > * {
    flex-grow: 1;
  }

  .count {
    font-size: 4.5rem;
  }
  .counter-name {
    font-size: 1.8rem;
  }
}
</style>
