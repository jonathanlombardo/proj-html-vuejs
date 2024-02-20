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
  <div class="wrapper">
    <h2>Pricing Plans</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, itaque.</p>
    <table>
      <thead>
        <tr>
          <th>Save up to 40% by paying weekly</th>
          <th v-for="plan in planDetails.plans">
            <img :src="getUrlImg(plan.icon)" :alt="`${plan.name} icon`" />
            <h3>{{ plan.name }}</h3>
            <strong>${{ plan.price }}</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Courses</td>
          <td v-for="plan in planDetails.plans">{{ plan.nCourses }}</td>
        </tr>
        <tr>
          <td>Time</td>
          <td v-for="plan in planDetails.plans">{{ plan.time }}</td>
        </tr>
        <tr v-for="notion in planDetails.notions">
          <td>{{ notion.name }}</td>
          <td v-for="plan in planDetails.plans">{{ plan[notion.key] }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td v-for="plan in planDetails.plans">GET</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style lang="scss" scoped></style>
