<script>
import axios from "axios";

export default {
  data() {
    return {
      planDetails: {},

      error: {
        state: false,
        text: "",
      },
      isLoading: false,

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

    fetchPlanDetails() {
      axios
        .get("http://localhost:3000/planDetails")
        .then((res) => {
          this.planDetails = res.data;
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
    this.fetchPlanDetails();
  },
};
</script>

<template>
  <div class="wrapper">
    <h2 class="text-center">Pricing Plans</h2>
    <p class="main-p text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, itaque.</p>
    <div class="error" v-if="error.state">{{ error.text }}</div>
    <table v-if="!isLoading && !error.state" class="wrapper">
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
            <app-btn class="btn" :class="isCurrentIndex(index) ? 'active' : ''" text="GET IT NOW" />
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
  border: 1px solid $border-bright2;
  background-color: $bg-light;
  color: $col-dark-bright10;
  font-weight: bold;

  &.active {
    background-color: $bg-primary;
    border: none;
    color: $col-light;
  }
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

      &:not(:first-child) {
        background-color: $bg-light-info;
      }

      &:first-child {
        border-left: none;
        border-bottom: none;
      }
    }
  }
}
</style>
