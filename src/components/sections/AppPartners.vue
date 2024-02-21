<script>
import axios from "axios";

export default {
  data() {
    return {
      // store,
      // ...
      partners: [],

      error: {
        state: false,
        text: "",
      },
      isLoading: false,
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

    fetchPartners() {
      axios
        .get("http://localhost:3000/partners")
        .then((res) => {
          this.partners = res.data;
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
    this.fetchPartners();
  },
};
</script>

<template>
  <div class="error" v-if="error.state">{{ error.text }}</div>
  <div class="row" v-if="!isLoading && !error.state">
    <div v-for="partner in partners" class="col">
      <a href="#">
        <img :src="getUrlImg(partner.logo)" :alt="`${partner.name} logo`" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/var" as *;
@use "../../assets/scss/partials/mixins" as *;
.row {
  padding-top: $space-xl;
  padding-bottom: $space-s;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: $border-bright6 white;

  &:hover {
    scrollbar-color: $border-bright2 white;
  }

  .col {
    width: calc(100% / 4);
    flex-shrink: 0;
    img {
      margin: auto;
      cursor: pointer;

      &:hover {
        filter: brightness(1.8);
      }
    }
  }
}
</style>
