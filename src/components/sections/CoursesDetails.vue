<script>
import axios from "axios";

export default {
  data() {
    return {
      overviews: [],

      error: {
        state: false,
        text: "",
      },
      isLoading: false,

      activeIndex: 0,
    };
  },

  computed: {
    activeView() {
      return this.overviews[this.activeIndex];
    },
  },

  methods: {
    setIndex(index) {
      this.activeIndex = index;
    },

    getUrlImg(img) {
      const imgUrl = new URL("../../assets/img/" + img, import.meta.url);
      return imgUrl.href;
    },

    fetchOverviews() {
      axios
        .get("http://localhost:3000/studentsOverviews")
        .then((res) => {
          this.overviews = res.data;
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

  components: {},

  created() {
    this.isLoading = true;
    this.fetchOverviews();
  },
};
</script>

<template>
  <div class="error" v-if="error.state">{{ error.text }}</div>
  <div class="row" v-if="!isLoading && !error.state">
    <div class="col col-30">
      <div v-for="(view, index) in overviews" :class="activeIndex == index ? 'active' : ''" @click="setIndex(index)">{{ view.tabTitle }}</div>
    </div>
    <div class="col col-70">
      <h2>{{ activeView.title }}</h2>
      <p class="main-p">{{ activeView.paragraph }}</p>
      <div class="steps-wrapper">
        <ul class="fa-ul">
          <li v-for="step in activeView.steps">
            <span class="fa-li" style="--fa-li-width: 4em"><font-awesome-icon icon="fa-solid fa-check" /></span>{{ step }}
          </li>
        </ul>
      </div>
    </div>
    <img :src="getUrlImg(activeView.icon)" :alt="`${activeView.tabTitle} icon`" />
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/mixins" as *;
@use "../../assets/scss/partials/var" as *;

.row {
  position: relative;
  .col-30 {
    width: 30%;

    > * {
      border: 1px solid $border-bright2;
      border-bottom: none;
      padding: $space-m $space-l;
      cursor: pointer;
      font-size: 1.5rem;
      text-transform: capitalize;
      color: $col-dark-bright10;

      &:last-child {
        border-bottom: 1px solid $border-bright2;
      }

      &.active {
        color: $col-primary-light;
        box-shadow: inset 11px 0px 0 $border-primary;
      }
    }
  }
  .col-70 {
    width: 70%;

    > * {
      margin-bottom: $space-l;
    }

    p {
      margin-bottom: $space-xl;
    }

    li {
      margin-bottom: $space-m;

      span {
        color: $col-primary;
      }
    }
  }

  .steps-wrapper {
    font-size: 1.4rem;
    color: $col-dark-bright6;
  }

  img {
    width: 150px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
