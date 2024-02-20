<script>
import axios from "axios";

export default {
  data() {
    return {
      links: [],
      activeLinkId: 0,
      error: {
        state: false,
        text: "",
      },
      isLoading: false,
    };
  },

  emits: ["header-link-clicked"],

  methods: {
    fetchHeaderLinks() {
      axios
        .get("http://localhost:3000/headerLinks")
        .then((res) => {
          this.links = res.data;
        })
        .catch((error) => {
          this.error.state = true;
          this.error.text = error;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    handleLinkClick(id) {
      this.activeLinkId = id;
      this.$emit("header-link-clicked", id);
    },

    isCurrentLink(id) {
      return this.activeLinkId == id;
    },
  },

  components: {},

  created() {
    this.isLoading = true;
    this.fetchHeaderLinks();
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="error" v-if="error.state">{{ error.text }}</div>
      <app-logo v-if="!isLoading && !error.state" img="logo-light.png" />
      <nav v-if="!isLoading && !error.state">
        <ul>
          <li v-for="link in links" :key="link.id" :class="isCurrentLink(link.id) ? 'active' : ''">
            <a :href="link.href" @click="handleLinkClick(link.id)">{{ link.text }}</a>
          </li>
          <li>
            <a href="#"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a>
          </li>
          <li>
            <a href="#"><font-awesome-icon icon="fa-solid fa-bag-shopping" /></a>
          </li>
          <li>
            <a href="#"><font-awesome-icon icon="fa-solid fa-bars" /></a>
          </li>
        </ul>
      </nav>
    </div>
    <slot name="hero"></slot>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/mixins" as *;
@use "../assets/scss/partials/var" as *;

.error {
  color: black;
  background-color: red;
  padding-left: $space-m;
  padding-right: $space-m;
}
.container {
  height: $header-h;
  font-size: 1.2rem;
  padding-top: $space-m;
  padding-bottom: $space-m;
  color: $col-light;

  position: relative;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    height: 100%;
  }

  ul {
    @include flex-center($space-l);
    height: 100%;

    li {
      height: 100%;
      display: flex;
      align-items: flex-end;

      &.active {
        // color: $col-primary-dark;
        box-shadow: 0 5px 0 $col-light;
        font-weight: bold;
      }

      a {
        text-transform: uppercase;
        padding-bottom: 5px;
      }
    }
  }
}
</style>
