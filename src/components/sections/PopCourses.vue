<script>
import axios from "axios";

export default {
  data() {
    return {
      courses: [],

      activeIndex: 0,
      cardPerSlide: 3,

      error: {
        state: false,
        text: "",
      },
      isLoading: false,
      autoplay: false,
    };
  },

  computed: {
    steps() {
      const steps = [];
      for (let i = 0; i <= this.courses.length - 1; i += this.cardPerSlide) {
        steps.push(i);
      }

      return steps;
    },
  },

  methods: {
    getUrlImg(img) {
      const imgUrl = new URL("../../assets/img/" + img, import.meta.url);
      return imgUrl.href;
    },

    getCourse(index) {
      return this.courses[this.activeIndex + index - 1];
    },

    isOffRange(index) {
      return this.activeIndex + index - 1 >= this.courses.length;
    },

    isCurrentSlide(index) {
      return this.activeIndex == index;
    },

    goToSlide(n) {
      this.activeIndex = n;
    },

    fetchCourses() {
      axios
        .get("http://localhost:3000/popCourses")
        .then((res) => {
          this.courses = res.data;
        })
        .catch((error) => {
          this.error.state = true;
          this.error.text = error;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    startAutoplay() {
      this.autoplay = setInterval(() => {
        if (this.activeIndex + this.cardPerSlide > this.steps.at(-1)) {
          this.activeIndex = 0;
          return;
        }
        this.activeIndex += this.cardPerSlide;
      }, 4000);
    },

    stopAutoplay() {
      clearInterval(this.autoplay);
    },
  },

  components: {},

  created() {
    this.isLoading = true;
    this.fetchCourses();
    this.startAutoplay();
  },
};
</script>

<template>
  <div class="title-wrapper">
    <h2>Popular Online Courses</h2>
    <p class="main-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt labore inventore, sed ut aspernatur!</p>
  </div>
  <div class="error" v-if="error.state">{{ error.text }}</div>
  <div v-if="!isLoading && !error.state" class="row" @mouseenter="stopAutoplay()" @mouseleave="startAutoplay()">
    <div v-for="index in cardPerSlide" class="col" :style="`width: calc(100% / ${cardPerSlide});`">
      <div v-if="!isOffRange(index)" class="card">
        <img :src="getUrlImg(getCourse(index).img)" :alt="`${getCourse(index).name} image`" />
        <div class="info-wrapper">
          <div class="course-title-wrapper">
            <h3 class="course-title">
              {{ getCourse(index).name }} <span :class="getCourse(index).price">{{ getCourse(index).price }}</span>
            </h3>
            <div class="course-subtitle">{{ getCourse(index).teacher }}</div>
          </div>
          <p>{{ getCourse(index).desc }}</p>
          <div class="tags-wrapper">
            <font-awesome-icon class="icon" icon="fa-solid fa-user" />
            <span>{{ getCourse(index).nTeachers }}</span>
            <font-awesome-icon class="icon" icon="fa-solid fa-tag" />
            <span>{{ getCourse(index).tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!isLoading && !error.state" class="dot-wrapper" @mouseenter="stopAutoplay()" @mouseleave="startAutoplay()">
    <font-awesome-icon v-for="index in steps" @click="goToSlide(index)" :icon="isCurrentSlide(index) ? 'fa-regular fa-circle-dot' : 'fa-solid fa-circle'" />
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/mixins" as *;
@use "../../assets/scss/partials/var" as *;

.row {
  padding-bottom: $space-xl;
}
.title-wrapper {
  text-align: center;
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: $space-xl;
}

.card {
  border: 1px solid $border-bright2;
  .info-wrapper {
    background-color: $bg-light;
    padding: $space-m;
    display: flex;
    flex-direction: column;
    gap: $space-m;
    height: 300px;

    .course-title {
      display: flex;
      justify-content: space-between;
      font-size: 1.5rem;
      color: $col-dark-bright4;
      margin-bottom: $space-s;

      span {
        font-size: 1.1rem;
        text-transform: uppercase;
        text-align: center;
        width: 78px;
        height: 30px;
        line-height: 30px;
        background-color: $bg-primary;
        border-radius: 25px;
        color: $col-light;
        font-weight: 100;
        letter-spacing: 2px;

        &.free {
          background-color: $bg-warning;
        }
      }
    }
    .course-subtitle {
      font-size: 1.2rem;
      color: $col-dark-bright7;
    }

    p {
      color: $col-dark-bright5;
      font-size: 1.3rem;
      line-height: 160%;

      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .tags-wrapper {
      margin-top: auto;
      font-size: 1.3rem;
      color: $col-dark-bright4;
      font-weight: bold;

      > * {
        margin-right: calc($space-m / 2);

        &.icon {
          font-size: 1rem;
          margin-right: $space-s;
        }
      }
    }
  }
}

.dot-wrapper {
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  color: $col-primary-light;
}
</style>
