<script>
// import MyComp from './components/MyComp.vue';
// import {store} from './store/index.js'

export default {
  data() {
    return {
      // store,
      // ...
      partners: [
        {
          name: "Study Central",
          logo: "h5-client-1.png",
        },
        {
          name: "Educator",
          logo: "h5-client-2.png",
        },
        {
          name: "TeachHub",
          logo: "h5-client-3.png",
        },
        {
          name: "Scholar",
          logo: "h5-client-4.png",
        },
        {
          name: "iAcademy",
          logo: "h5-client-5.png",
        },
      ],
    };
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
  <div class="row">
    <div v-for="partner in partners" class="col">
      <img :src="getUrlImg(partner.logo)" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/var" as *;
@use "../../assets/scss/partials/mixins" as *;
.row {
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: $col-dark-bright15 white;

  .col {
    width: calc(100% / 4);
    flex-shrink: 0;
    img {
      margin: auto;
    }
  }
}
</style>
