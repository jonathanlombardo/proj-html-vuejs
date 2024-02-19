<script>
// import MyComp from './components/MyComp.vue';
// import {store} from './store/index.js'

export default {
  data() {
    return {
      // store,
      // ...

      slides: [
        {
          img: "h5-slide-1-background.jpg",
          title: "Contemporary Ideas",
          subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ullam cum optio voluptatum ut rerum?",
          buttonText: "register now",
        },
        {
          img: "h5-slide-2-background.jpg",
          title: "Contemporary Ideas",
          subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ullam cum optio voluptatum ut rerum?",
          buttonText: "register now",
        },
        {
          img: "h5-slide-3-background.jpg",
          title: "Contemporary Ideas",
          subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ullam cum optio voluptatum ut rerum?",
          buttonText: "register now",
        },
      ],
      activeIndex: 0,
    };
  },

  computed: {
    activeSlide() {
      return this.slides[this.activeIndex];
    },
  },

  props: {
    // ...
  },

  methods: {
    getUrlImg(img) {
      const imgUrl = new URL("../../assets/img/" + img, import.meta.url);
      return imgUrl.href;
    },
  },

  components: {},

  created() {
    // ...
  },
};
</script>

<template>
  <div class="wrapper" :style="`background-image: url(${getUrlImg(activeSlide.img)})`">
    <h1>{{ activeSlide.title }}</h1>
    <p>{{ activeSlide.subTitle }}</p>
    <div>{{ activeSlide.buttonText }}</div>
    <div class="dot-wrapper">x x x</div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/mixins" as *;
@use "../../assets/scss/partials/var" as *;
.wrapper {
  height: 600px;
  position: relative;
  top: calc(-1 * $header-h);
  margin-bottom: calc(-1 * $header-h);

  @include flex-center(0, column);

  color: $col-light;

  .dot-wrapper {
    // align-self: flex-end;
    position: absolute;
    bottom: $space-m;
  }
}
</style>
