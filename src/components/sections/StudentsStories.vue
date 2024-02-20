<script>
import axios from "axios";

export default {
  data() {
    return {
      testimonials: [],

      error: {
        state: false,
        text: "",
      },
      isLoading: false,

      activeIndex: 0,
      autoplay: false,
    };
  },

  computed: {
    activeTestimonial() {
      return this.testimonials[this.activeIndex];
    },
  },

  methods: {
    getUrlImg(img) {
      const imgUrl = new URL("../../assets/img/" + img, import.meta.url);
      return imgUrl.href;
    },

    isCurrentSlide(index) {
      return this.activeIndex == index;
    },

    goToSlide(n) {
      this.activeIndex = n;
    },

    fetchTestimonials() {
      axios
        .get("http://localhost:3000/testimonials")
        .then((res) => {
          this.testimonials = res.data;
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
        if (this.activeIndex + 1 >= this.testimonials.length) {
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
    this.fetchTestimonials();
    this.startAutoplay();
  },
};
</script>

<template>
  <div class="error" v-if="error.state">{{ error.text }}</div>
  <div v-if="!isLoading && !error.state" class="wrapper" @mouseenter="stopAutoplay()" @mouseleave="startAutoplay()">
    <img :src="getUrlImg(activeTestimonial.pic)" :alt="`${activeTestimonial.name} picture`" />
    <p>"{{ activeTestimonial.story }}"</p>
    <h3>{{ activeTestimonial.name }}</h3>
    <div class="role">{{ activeTestimonial.role }}</div>
    <div class="dot-wrapper">
      <font-awesome-icon v-for="(testimonial, index) in testimonials" @click="goToSlide(index)" :icon="isCurrentSlide(index) ? 'fa-regular fa-circle-dot' : 'fa-solid fa-circle'" />
    </div>
    <!-- <div class="dots">x x x</div> -->
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/mixins" as *;
@use "../../assets/scss/partials/var" as *;

.wrapper {
  padding-top: $space-xl;
  padding-bottom: $space-xl;

  color: $col-light-off;

  > * {
    margin-right: auto;
    margin-left: auto;
    // margin-bottom: $space-l;
    text-align: center;
  }

  img {
    width: 150px;
    border-radius: 50%;
    margin-bottom: $space-l;
  }

  p {
    margin-bottom: $space-l;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: $space-s;
  }

  .role {
    font-size: 1.3rem;
    margin-bottom: $space-l;
  }

  .dot-wrapper {
    width: fit-content;
  }
}
</style>
