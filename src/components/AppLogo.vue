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
    img: String,
  },

  methods: {
    getUrlImg() {
      const imgUrl = new URL("../assets/img/" + this.img, import.meta.url);
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
  <img :src="getUrlImg()" alt="iAccademy Logo" />
</template>

<style lang="scss" scoped></style>
