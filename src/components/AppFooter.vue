<script>
// import MyComp from './components/MyComp.vue';
// import {store} from './store/index.js'

export default {
  data() {
    return {
      // store,
      // ...
      companyInfo: {
        mottos: ["Providing Life Changing", "Experince Through", "Education. Class That Fit Your", "Busy Life. Closer to Home"],

        phone: "1-677-124-44227",
        asidePhone: "+44 300 303 0266",
        openingHours: "Mon-Sat 8.00 - 18.00",

        copyright: "Copyrights 2017 ©Mikado Themes",
        social: [
          {
            name: "Twitter",
            userID: "@iaccademy",
            icon: "fa-brands fa-twitter",
            href: "#",
          },
          {
            name: "Instagram",
            userID: "@iaccademy",
            icon: "fa-brands fa-instagram",
            href: "#",
          },
          {
            name: "Facebook",
            userID: "@iaccademy",
            icon: "fa-brands fa-facebook-f",
            href: "#",
          },
        ],

        popCourses: [
          {
            name: "Business English",
            teacher: "Preston Marshall",
          },
          {
            name: "Social Computing",
            teacher: "David Sanders",
          },
          {
            name: "Learn Spanish",
            teacher: "Jennie King",
          },
        ],
      },

      supportLinks: [
        {
          text: "User Dashboard",
          href: "#",
        },
        {
          text: "Contact Us",
          href: "#",
        },
        {
          text: "FAQ",
          href: "#",
        },
        {
          text: "Course Offer",
          href: "#",
        },
        {
          text: "Events",
          href: "#",
        },
      ],
    };
  },

  props: {
    // ...
  },

  methods: {
    getUrlImg(img) {
      const imgUrl = new URL("../assets/img/" + img, import.meta.url);
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
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="title">
          <app-logo img="footer-logo-1.png" />
        </div>
        <ul>
          <li>
            <div v-for="motto in companyInfo.mottos">{{ motto }}</div>
          </li>
          <li>
            <font-awesome-icon icon="fa-solid fa-phone" />
            <span>{{ companyInfo.phone }}</span>
          </li>
          <li>
            <font-awesome-icon icon="fa-solid fa-clock" />
            <span>{{ companyInfo.openingHours }}</span>
          </li>
        </ul>
      </div>
      <div class="col">
        <div class="title">Popular Courses</div>
        <ul>
          <li v-for="course in companyInfo.popCourses">
            <div class="subtitle">{{ course.name }}</div>
            <div>{{ course.teacher }}</div>
          </li>
        </ul>
      </div>
      <div class="col">
        <div class="title">Support</div>
        <ul>
          <li v-for="link in supportLinks">
            <a :href="link.href">{{ link.text }}</a>
          </li>
        </ul>
      </div>
      <div class="col text-end">
        <div class="title">Flexible Learning</div>
        <ul>
          <li>
            <a href="#">
              <img :src="getUrlImg('footer-img-1.png')" alt="Around the world picture" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row aside">
      <div class="col">{{ companyInfo.copyright }}</div>
      <div class="col contacts text-end">
        <span>CALL {{ companyInfo.asidePhone }}</span>
        <span>FOLLOW US</span>
        <span v-for="social in companyInfo.social"
          ><a :href="social.href"><font-awesome-icon :icon="social.icon" /></a
        ></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/mixins" as *;
@use "../assets/scss/partials/var" as *;

.text-end {
  text-align: end;
  img {
    margin-left: auto;
  }
}
.col {
  width: calc(100% / 4);
}

.aside {
  .contacts {
    flex-grow: 1;
  }

  span {
    padding-left: $space-m;
  }
}
</style>
