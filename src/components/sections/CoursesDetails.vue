<script>
// import MyComp from './components/MyComp.vue';
// import {store} from './store/index.js'

export default {
  data() {
    return {
      // store,
      // ...

      overviews: [
        {
          tabTitle: "What We Do",
          title: "Learning Possibilities",
          paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione culpa fugiat excepturi odio autem aliquid velit aut id, vitae ab laboriosam aliquam nesciunt! Aperiam voluptatum commodi voluptatibus omnis illo!",
          steps: ["We enrich lives through learning.", "Maximizing potential through individual attention.", "The trusted name for specialized training.", "People teach. People learn. This is where they connect."],
          icon: "h12-tabs-icon-1.png",
        },
        {
          tabTitle: "Degree Programme",
          title: "Degree Programme",
          paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione culpa fugiat excepturi odio autem aliquid velit aut id, vitae ab laboriosam aliquam nesciunt! Aperiam voluptatum commodi voluptatibus omnis illo!",
          steps: ["We enrich lives through learning.", "Maximizing potential through individual attention.", "The trusted name for specialized training.", "People teach. People learn. This is where they connect."],
          icon: "h12-tabs-icon-2.png",
        },
        {
          tabTitle: "Carreer Achivements",
          title: "Carreer Achivements",
          paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione culpa fugiat excepturi odio autem aliquid velit aut id, vitae ab laboriosam aliquam nesciunt! Aperiam voluptatum commodi voluptatibus omnis illo!",
          steps: ["We enrich lives through learning.", "Maximizing potential through individual attention.", "The trusted name for specialized training.", "People teach. People learn. This is where they connect."],
          icon: "h12-tabs-icon-3.png",
        },
        {
          tabTitle: "Personal Managment",
          title: "Personal Managment",
          paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione culpa fugiat excepturi odio autem aliquid velit aut id, vitae ab laboriosam aliquam nesciunt! Aperiam voluptatum commodi voluptatibus omnis illo!",
          steps: ["We enrich lives through learning.", "Maximizing potential through individual attention.", "The trusted name for specialized training.", "People teach. People learn. This is where they connect."],
          icon: "h12-tabs-icon-4.png",
        },
        {
          tabTitle: "Steps To Success",
          title: "Steps To Success",
          paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione culpa fugiat excepturi odio autem aliquid velit aut id, vitae ab laboriosam aliquam nesciunt! Aperiam voluptatum commodi voluptatibus omnis illo!",
          steps: ["We enrich lives through learning.", "Maximizing potential through individual attention.", "The trusted name for specialized training.", "People teach. People learn. This is where they connect."],
          icon: "h12-tabs-icon-5.png",
        },
        {
          tabTitle: "Knowledge Transfer",
          title: "Knowledge Transfer",
          paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione culpa fugiat excepturi odio autem aliquid velit aut id, vitae ab laboriosam aliquam nesciunt! Aperiam voluptatum commodi voluptatibus omnis illo!",
          steps: ["We enrich lives through learning.", "Maximizing potential through individual attention.", "The trusted name for specialized training.", "People teach. People learn. This is where they connect."],
          icon: "h12-tabs-icon-6.png",
        },
      ],

      activeIndex: 0,
    };
  },

  computed: {
    activeView() {
      return this.overviews[this.activeIndex];
    },
  },

  methods: {
    setIndex(index) {
      this.activeIndex = index;
    },

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
    <div class="col col-30">
      <div v-for="(view, index) in overviews" :class="activeIndex == index ? 'active' : ''" @click="setIndex(index)">{{ view.tabTitle }}</div>
    </div>
    <div class="col col-70">
      <h2>{{ activeView.title }}</h2>
      <p>{{ activeView.paragraph }}</p>
      <div class="steps-wrapper">
        <ul>
          <li v-for="step in activeView.steps">
            {{ step }}
          </li>
        </ul>
      </div>
    </div>
    <img :src="getUrlImg(activeView.icon)" :alt="`${activeView.tabTitle} icon`" />
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/mixins" as *;
@use "../../assets/scss/partials/var" as *;

.row {
  position: relative;
  .col-30 {
    width: 30%;

    > * {
      border: 1px solid $border-bright1;
      padding: $space-m $space-l;
      cursor: pointer;

      &.active {
        color: $col-primary-light;
        box-shadow: inset 11px 0px 0 $border-primary;
      }
    }
  }
  .col-70 {
    width: 70%;

    > * {
      margin-bottom: $space-m;
    }
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
