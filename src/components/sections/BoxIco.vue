<script>
import axios from "axios";

export default {
  data() {
    return {
      boxes: [],

      isLoading: false,
      error: {
        state: false,
        text: "",
      },
    };
  },

  methods: {
    getUrlImg(img) {
      const imgUrl = new URL("../../assets/img/" + img, import.meta.url);
      return imgUrl.href;
    },

    fetchBoxes() {
      axios
        .get("http://localhost:3000/icoBoxes")
        .then((res) => {
          this.boxes = res.data;
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

  emits: ["box-ico-clicked"],

  created() {
    this.isLoading = true;
    this.fetchBoxes();
  },
};
</script>

<template>
  <div class="error" v-if="error.state">{{ error.text }}</div>
  <div v-if="!isLoading && !error.state" class="row">
    <div v-for="box in boxes" class="col">
      <div class="box-ico" @click="$emit('box-ico-clicked', box.id)">
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
    cursor: pointer;
    font-size: 1.4rem;
    padding-top: $space-l;
    padding-bottom: $space-l;
    color: $col-dark-bright4;
    background-color: $border-primary-light;
    @include flex-center($space-m, column);

    &:hover {
      opacity: 0.8;
    }

    img {
      width: 50%;
    }
  }
}

@media screen and (max-width: 1120px) {
  .row .col {
    width: calc(100% / 4);
  }
}

@media screen and (max-width: 970px) {
  .row .col {
    width: calc(100% / 3);
  }
}

@media screen and (max-width: 650px) {
  .row .col {
    width: calc(100% / 2);
  }
}
</style>
