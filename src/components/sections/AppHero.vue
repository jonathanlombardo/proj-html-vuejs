<script>
import axios from "axios";

export default {
  data() {
    return {
      slides: [],
      activeIndex: 0,
      error: {
        state: false,
        text: "",
      },
      isLoading: false,
      autoplay: false,
    };
  },

  computed: {
    activeSlide() {
      return this.slides[this.activeIndex];
    },
  },

  methods: {
    getUrlImg(img) {
      const imgUrl = new URL("../../assets/img/" + img, import.meta.url);
      return imgUrl.href;
    },

    fetchSlides() {
      axios
        .get("http://localhost:3000/heroSlides")
        .then((res) => {
          this.slides = res.data;
        })
        .catch((error) => {
          this.error.state = true;
          this.error.text = error;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    isCurrentSlide(index) {
      return this.activeIndex == index;
    },

    goToSlide(n) {
      this.activeIndex = n;
    },

    startAutoplay() {
      this.autoplay = setInterval(() => {
        if (this.activeIndex + 1 >= this.slides.length) {
          this.activeIndex = 0;
          return;
        }
        this.activeIndex++;
      }, 4000);
    },

    stopAutoplay() {
      clearInterval(this.autoplay);
    },
  },

  components: {},

  created() {
    this.isLoading = true;
    this.fetchSlides();
    this.startAutoplay();
  },
};
</script>

<template>
  <div class="error" v-if="error.state">{{ error.text }}</div>
  <div v-if="!isLoading && !error.state" class="wrapper" :style="`background-image: url(${getUrlImg(activeSlide.img)})`">
    <div class="content-wrapper" @mouseenter="stopAutoplay()" @mouseleave="startAutoplay()">
      <h1 class="pBottom">{{ activeSlide.title }}</h1>
      <p class="pBottom">{{ activeSlide.subTitle }}</p>
      <app-btn class="btn" :text="activeSlide.buttonText" />
    </div>
    <div class="dot-wrapper" @mouseenter="stopAutoplay()" @mouseleave="startAutoplay()">
      <font-awesome-icon v-for="(slide, index) in slides" @click="goToSlide(index)" :icon="isCurrentSlide(index) ? 'fa-regular fa-circle-dot' : 'fa-solid fa-circle'" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/mixins" as *;
@use "../../assets/scss/partials/var" as *;

.pBottom {
  padding-bottom: $space-m;
}
.wrapper {
  height: 600px;
  position: relative;
  top: calc(-1 * $header-h);
  margin-bottom: calc(-1 * $header-h);
  background-position: center;

  @include flex-center(0, column);

  color: $col-light-op80;

  .content-wrapper {
    text-align: center;
    width: fit-content;
    max-width: 900px;
    padding-left: $space-m;
    padding-right: $space-m;
    font-size: 1.5rem;

    .btn {
      background-color: $bg-primary;
      border: none;
    }
  }

  .dot-wrapper {
    position: absolute;
    bottom: $space-m;
  }
}
</style>
