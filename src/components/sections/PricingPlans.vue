<script>
// import MyComp from './components/MyComp.vue';
// import {store} from './store/index.js'

export default {
  data() {
    return {
      // store,
      // ...

      planDetails: {
        notions: [
          {
            type: "design",
            key: "wDesign",
            name: "Web Designing",
          },
          {
            type: "design",
            key: "hcDesign",
            name: "Human-Centered Design",
          },
          {
            type: "business",
            key: "baseMarketing",
            name: "Basic Marketing",
          },
          {
            type: "programming",
            key: "python",
            name: "Python fo Evrybody",
          },
          {
            type: "programming",
            key: "android",
            name: "Android Developer",
          },
          {
            type: "business",
            key: "bEnglish",
            name: "Busines English",
          },
        ],
        plans: [
          {
            icon: "h5-custom-icon-7.png",
            name: "standard",
            price: 12,
            nCourses: 2,
            time: "15 Days",
            wDesign: true,
            hcDesign: true,
          },
          {
            icon: "h5-custom-icon-8.png",
            name: "professional",
            price: 59,
            nCourses: 4,
            time: "30 Days",
            wDesign: true,
            hcDesign: true,
            baseMarketing: true,
            python: true,
          },
          {
            icon: "h5-custom-icon-9.png",
            name: "advanced",
            price: 59,
            nCourses: 4,
            time: "30 Days",
            wDesign: true,
            hcDesign: true,
            baseMarketing: true,
            python: true,
            android: true,
            bEnglish: true,
          },
        ],
      },

      activeIndex: 0,
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

    isCurrentIndex(index) {
      return this.activeIndex == index;
    },

    goToIndex(index) {
      this.activeIndex = index;
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
    <h2 class="text-center">Pricing Plans</h2>
    <p class="main-p text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, itaque.</p>
    <table>
      <thead>
        <tr>
          <th>Save up to 40% by paying weekly</th>
          <th v-for="(plan, index) in planDetails.plans" :class="isCurrentIndex(index) ? 'active' : ''" @click="goToIndex(index)">
            <img :src="getUrlImg(plan.icon)" :alt="`${plan.name} icon`" />
            <h3>{{ plan.name }}</h3>
            <strong>${{ plan.price }}</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Courses</td>
          <td v-for="(plan, index) in planDetails.plans" @click="goToIndex(index)">{{ plan.nCourses }}</td>
        </tr>
        <tr>
          <td>Time</td>
          <td v-for="(plan, index) in planDetails.plans" @click="goToIndex(index)">{{ plan.time }}</td>
        </tr>
        <tr v-for="notion in planDetails.notions">
          <td>{{ notion.name }}</td>
          <td v-for="(plan, index) in planDetails.plans" @click="goToIndex(index)" class="icons">
            <font-awesome-icon v-if="plan[notion.key] === true" icon="fa-solid fa-check" class="value active" />
            <span v-else-if="plan[notion.key]" class="value active">{{ plan[notion.key] }}</span>
            <font-awesome-icon v-else icon="fa-solid fa-xmark" class="value" />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td v-for="(plan, index) in planDetails.plans" @click="goToIndex(index)">
            <app-btn class="btn" text="GET IT NOW" />
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/mixins" as *;
@use "../../assets/scss/partials/var" as *;
.text-center {
  text-align: center;
}

.btn {
  border: none;
  background-color: $bg-primary;
  color: $col-light;
  font-weight: bold;
}

table {
  width: 100%;
  margin-top: $space-xl;
  border-spacing: 0;

  img {
    margin: auto;
    margin-bottom: $space-m;
  }

  tr {
    td,
    th {
      border-top: 1px solid $border-bright2;
      border-right: 1px solid $border-bright2;

      padding: $space-m;
      text-align: center;

      background-color: $bg-light;

      &:first-child {
        border-left: 1px solid $border-bright2;
        // ----------------
        // writing-mode: vertical-lr;
        // transform: rotate(180deg);
        // ----------------
      }

      &:not(:first-child) {
        cursor: pointer;
      }
    }

    th {
      font-size: 1.6rem;
      color: $col-dark-bright4;
      width: calc(100% / 4);
      // ----------------
      // width: auto;
      // ----------------

      border-top: 5px solid $border-primary-light;

      // ----------------
      // &:first-child {
      //   border-top: 1px solid $border-bright2;
      //   border-bottom: 5px solid $border-primary-light;
      // }
      // ----------------

      &:not(:first-child) {
        background-color: $bg-light-info;
        text-transform: capitalize;

        &.active {
          border-top: 5px solid $border-primary;
        }
      }
    }

    td {
      font-size: 1.3rem;
      color: $col-dark-bright6;

      &.icons {
        .value {
          font-size: 1.3em;
          color: $col-dark-bright8;
          &.active {
            color: $col-primary;
          }
        }
      }
    }
  }
  tfoot {
    td {
      border-bottom: 1px solid $border-bright2;

      &:first-child {
        border-left: none;
        border-bottom: none;
      }
    }
  }
}
</style>
