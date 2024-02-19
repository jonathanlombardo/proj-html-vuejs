<script>
// import MyComp from './components/MyComp.vue';
// import {store} from './store/index.js'

export default {
  data() {
    return {
      // store,
      // ...

      testimonials: [
        {
          pic: "testimonials-standard-1.png",
          story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam dolores adipisci vitae quos, perferendis ipsam debitis consequatur blanditiis soluta veniam accusantium, veritatis voluptatum dignissimos dolore dolorem voluptatem laboriosam suscipit?",
          name: "Joan Collins",
          role: "Students",
        },
        {
          pic: "testimonials-standard-2.png",
          story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam dolores adipisci vitae quos, perferendis ipsam debitis consequatur blanditiis soluta veniam accusantium, veritatis voluptatum dignissimos dolore dolorem voluptatem laboriosam suscipit?",
          name: "Joan Collins",
          role: "Students",
        },
        {
          pic: "testimonials-standard-3.png",
          story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam dolores adipisci vitae quos, perferendis ipsam debitis consequatur blanditiis soluta veniam accusantium, veritatis voluptatum dignissimos dolore dolorem voluptatem laboriosam suscipit?",
          name: "Joan Collins",
          role: "Students",
        },
        {
          pic: "testimonials-standard-4.png",
          story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam dolores adipisci vitae quos, perferendis ipsam debitis consequatur blanditiis soluta veniam accusantium, veritatis voluptatum dignissimos dolore dolorem voluptatem laboriosam suscipit?",
          name: "Joan Collins",
          role: "Students",
        },
        {
          pic: "testimonials-standard-5.png",
          story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam dolores adipisci vitae quos, perferendis ipsam debitis consequatur blanditiis soluta veniam accusantium, veritatis voluptatum dignissimos dolore dolorem voluptatem laboriosam suscipit?",
          name: "Joan Collins",
          role: "Students",
        },
        {
          pic: "testimonials-standard-6.png",
          story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam dolores adipisci vitae quos, perferendis ipsam debitis consequatur blanditiis soluta veniam accusantium, veritatis voluptatum dignissimos dolore dolorem voluptatem laboriosam suscipit?",
          name: "Joan Collins",
          role: "Students",
        },
      ],

      activeIndex: 0,
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
  },

  components: {},

  created() {
    // ...
  },
};
</script>

<template>
  <div class="wrapper">
    <img :src="getUrlImg(activeTestimonial.pic)" :alt="`${activeTestimonial.name} picture`" />
    <p>"{{ activeTestimonial.story }}"</p>
    <h3>{{ activeTestimonial.name }}</h3>
    <div>{{ activeTestimonial.role }}</div>
    <div class="dots">x x x</div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/mixins" as *;
@use "../../assets/scss/partials/var" as *;

.wrapper {
  padding-top: $space-xl;
  padding-bottom: $space-xl;
  > * {
    margin-right: auto;
    margin-left: auto;
    margin-bottom: $space-l;
    text-align: center;
  }
}
</style>
