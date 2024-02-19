<script>
// import MyComp from './components/MyComp.vue';
// import {store} from './store/index.js'

export default {
  data() {
    return {
      // store,
      // ...

      boxes: [
        {
          img: "h5-custom-icon-1.png",
          title: "Languages",
        },
        {
          img: "h5-custom-icon-2.png",
          title: "Software",
        },
        {
          img: "h5-custom-icon-3.png",
          title: "Business",
        },
        {
          img: "h5-custom-icon-4.png",
          title: "Chemistry",
        },
        {
          img: "h5-custom-icon-5.png",
          title: "Science",
        },
        {
          img: "h5-custom-icon-6.png",
          title: "DIY&Craft",
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
    <div v-for="box in boxes" class="col">
      <div class="box-ico">
        <img :src="getUrlImg(box.img)" :alt="`${box.title} icon`" />
        <div>
          <strong>{{ box.title }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/mixins" as *;
@use "../../assets/scss/partials/var" as *;

.row {
  flex-wrap: wrap;
  justify-content: center;
  .col {
    width: calc(100% / 6);
  }
  .box-ico {
    font-size: 1.4rem;
    padding-top: $space-l;
    padding-bottom: $space-l;
    color: $col-dark-bright4;
    background-color: $border-primary-light;
    @include flex-center($space-m, column);

    img {
      width: 50%;
    }
  }
}
</style>
