<script>
import axios from "axios";

export default {
  data() {
    return {
      companyInfo: {},

      supportLinks: [],

      error: {
        companyInfo: {
          state: false,
          text: "",
        },
        supportLinks: {
          state: false,
          text: "",
        },
      },
      isLoading: {
        companyInfo: false,
        supportLinks: false,
      },
    };
  },

  methods: {
    getUrlImg(img) {
      const imgUrl = new URL("../assets/img/" + img, import.meta.url);
      return imgUrl.href;
    },

    fetchCompanyInfo() {
      axios
        .get("http://localhost:3000/companyInfo")
        .then((res) => {
          this.companyInfo = res.data;
        })
        .catch((error) => {
          this.error.companyInfo.state = true;
          this.error.companyInfo.text = error;
        })
        .finally(() => {
          this.isLoading.companyInfo = false;
        });
    },

    fetchSupportLinks() {
      axios
        .get("http://localhost:3000/supportLinks")
        .then((res) => {
          this.supportLinks = res.data;
        })
        .catch((error) => {
          this.error.supportLinks.state = true;
          this.error.supportLinks.text = error;
        })
        .finally(() => {
          this.isLoading.supportLinks = false;
        });
    },
  },

  components: {},

  created() {
    this.isLoading.companyInfo = true;
    this.isLoading.supportLinks = true;
    this.fetchCompanyInfo();
    this.fetchSupportLinks();
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col error" v-if="error.companyInfo.state">{{ error.companyInfo.text }}</div>
      <div class="col" v-if="!isLoading.companyInfo && !error.companyInfo.state">
        <div class="title">
          <app-logo img="footer-logo-1.png" />
        </div>
        <ul>
          <li>
            <div v-for="motto in companyInfo.mottos">{{ motto }}</div>
          </li>
          <li>
            <font-awesome-icon class="info-icon" icon="fa-solid fa-phone" />
            <span>{{ companyInfo.phone }}</span>
          </li>
          <li>
            <font-awesome-icon class="info-icon" icon="fa-solid fa-clock" />
            <span>{{ companyInfo.openingHours }}</span>
          </li>
        </ul>
      </div>
      <div class="col error" v-if="error.companyInfo.state">{{ error.companyInfo.text }}</div>
      <div class="col" v-if="!isLoading.companyInfo && !error.companyInfo.state">
        <div class="title">Popular Courses</div>
        <ul>
          <li v-for="course in companyInfo.popCourses">
            <div class="subtitle">{{ course.name }}</div>
            <div>{{ course.teacher }}</div>
          </li>
        </ul>
      </div>
      <div class="col error" v-if="error.supportLinks.state">{{ error.supportLinks.text }}</div>
      <div class="col" v-if="!isLoading.supportLinks && !error.supportLinks.state">
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
    <div class="error" v-if="error.companyInfo.state">{{ error.companyInfo.text }}</div>
    <div class="row aside" v-if="!isLoading.companyInfo && !error.companyInfo.state">
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

a:hover {
  color: $col-primary-dark;
}
.col {
  width: calc(100% / 4);
}

.row {
  padding-top: $space-xl;
  padding-bottom: $space-xl;

  font-size: 1.2rem;
  color: $col-dark-bright11;

  .title {
    height: 40px;
    line-height: 40px;
    font-size: 1.7rem;
    color: $col-light;
  }

  .subtitle {
    color: $col-dark-bright15;
    font-size: 1.1em;
  }

  li {
    margin-top: $space-m;
    margin-bottom: $space-m;

    .info-icon {
      margin-right: $space-m;
    }
  }
  &.aside {
    padding-top: $space-l;
    padding-bottom: $space-l;
    border-top: 1px solid $border-bright1;
    white-space: nowrap;
    .contacts {
      flex-grow: 1;
    }

    span {
      padding-left: $space-m;
    }
  }
}
</style>
