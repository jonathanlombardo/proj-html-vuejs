<script>
// import MyComp from './components/MyComp.vue';
// import {store} from './store/index.js'

export default {
  data() {
    return {
      // store,
      // ...
      courses: [
        {
          name: "Android Developer",
          teacher: "David Sanders",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique aliquam molestiae enim quod adipisci fugiat ut incidunt consequuntur tenetur!",
          nTeachers: 1,
          tag: "Programming",
          price: "free",
          img: "course-1-f-img.jpg",
        },
        {
          name: "Web Designing",
          teacher: "David Sanders",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique aliquam molestiae enim quod adipisci fugiat ut incidunt consequuntur tenetur!",
          nTeachers: 1,
          tag: "Programming",
          price: "free",
          img: "course-2-f-img.jpg",
        },
        {
          name: "Financial Modeling",
          teacher: "David Sanders",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique aliquam molestiae enim quod adipisci fugiat ut incidunt consequuntur tenetur!",
          nTeachers: 1,
          tag: "Business",
          price: "$20",
          img: "course-3-f-img.jpg",
        },
        {
          name: "Financial Modeling",
          teacher: "David Sanders",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique aliquam molestiae enim quod adipisci fugiat ut incidunt consequuntur tenetur!",
          nTeachers: 1,
          tag: "Programming",
          price: "free",
          img: "course-4-f-img.jpg",
        },
        {
          name: "Android Developer",
          teacher: "David Sanders",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique aliquam molestiae enim quod adipisci fugiat ut incidunt consequuntur tenetur!",
          nTeachers: 1,
          tag: "Programming",
          price: "free",
          img: "course-5-f-img.jpg",
        },
        {
          name: "Web Designing",
          teacher: "David Sanders",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique aliquam molestiae enim quod adipisci fugiat ut incidunt consequuntur tenetur!",
          nTeachers: 1,
          tag: "Programming",
          price: "free",
          img: "course-6-f-img.jpg",
        },
        {
          name: "Android Developer",
          teacher: "David Sanders",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique aliquam molestiae enim quod adipisci fugiat ut incidunt consequuntur tenetur!",
          nTeachers: 1,
          tag: "Programming",
          price: "free",
          img: "course-7-f-img.jpg",
        },
        {
          name: "Android Developer",
          teacher: "David Sanders",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique aliquam molestiae enim quod adipisci fugiat ut incidunt consequuntur tenetur!",
          nTeachers: 1,
          tag: "Programming",
          price: "free",
          img: "course-8-f-img.jpg",
        },
        {
          name: "Android Developer",
          teacher: "David Sanders",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique aliquam molestiae enim quod adipisci fugiat ut incidunt consequuntur tenetur!",
          nTeachers: 1,
          tag: "Programming",
          price: "free",
          img: "course-9-f-img.jpg",
        },
      ],

      activeIndex: 0,
      cardPerSlide: 3,
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

    getCourse(index) {
      console.log(index);
      return this.courses[this.activeIndex + index - 1];
    },

    isOffRange(index) {
      return this.activeIndex + index - 1 >= this.courses.length;
    },
  },

  components: {},

  created() {
    // ...
  },
};
</script>

<template>
  <div class="title-wrapper">
    <h2>Popular Online Courses</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt labore inventore, sed ut aspernatur!</p>
  </div>
  <div class="row">
    <div v-for="index in cardPerSlide" class="col" :style="`width: calc(100% / ${cardPerSlide});`">
      <div v-if="!isOffRange(index)" class="card">
        <img :src="getUrlImg(getCourse(index).img)" :alt="`${getCourse(index).name} image`" />
        <div class="info-wrapper">
          <h3>
            {{ getCourse(index).name }} <span>{{ getCourse(index).price }}</span>
          </h3>
          <div>{{ getCourse(index).teacher }}</div>
          <p>{{ getCourse(index).desc }}</p>
        </div>
        <span>X</span>
        <span>{{ getCourse(index).nTeachers }}</span>
        <span>X</span>
        <span>{{ getCourse(index).tag }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-wrapper {
  text-align: center;
}

h3 {
  display: flex;
  justify-content: space-between;
}
</style>
