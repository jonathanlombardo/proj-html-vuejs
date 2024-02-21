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
      hamMenu: false,
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
      this.hamMenu = false;
    },

    isCurrentLink(id) {
      return this.activeLinkId == id;
    },

    handleHamClick() {
      this.hamMenu = !this.hamMenu;
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
          <li class="menu" v-for="link in links" :key="link.id" :class="isCurrentLink(link.id) ? 'active' : ''">
            <a :href="link.href" @click="handleLinkClick(link.id)">{{ link.text }}</a>
          </li>
          <li>
            <a href="#"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a>
          </li>
          <li>
            <a href="#"><font-awesome-icon icon="fa-solid fa-bag-shopping" /></a>
          </li>
          <li>
            <span class="ham-wrapper">
              <font-awesome-icon icon="fa-solid fa-bars" @click="handleHamClick()" />
              <ul v-if="hamMenu" class="toggle-menu">
                <li class="menu-opt" v-for="link in links" :key="link.id">
                  <a :href="link.href" @click="handleLinkClick(link.id)">{{ link.text }}</a>
                </li>
              </ul>
            </span>
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

.ham-wrapper {
  position: relative;
  .toggle-menu {
    display: none;
    background-color: $bg-light-info;
    height: auto;
    position: absolute;
    right: 0;
    border: 1px solid $border-bright1;
    border-bottom: none;

    .menu-opt {
      display: block;
      color: $col-dark-bright6;
      border-bottom: 1px solid $border-bright1;

      > a {
        padding: $space-s $space-m;
        display: block;
        height: 100%;
        width: 100%;

        &:hover {
          color: $col-light;
          background-color: $bg-primary;
        }
      }
    }
  }
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

      > * {
        text-transform: uppercase;
        padding-bottom: 5px;
      }
    }
  }
}

@media screen and (max-width: 1140px) {
  .ham-wrapper {
    .toggle-menu {
      display: block;
    }
  }

  nav ul li.menu {
    display: none;
  }
}
</style>
