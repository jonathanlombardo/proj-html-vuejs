<script>
export default {};
</script>

<template>
  <div class="wrapper">
    <h2>
      The Trusted Name <br />
      for In-Home Tutoring
    </h2>
    <p class="main-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus veniam, excepturi quod atque, necessitatibus optio quia itaque illum quidem nam ea ullam harum magnam unde dolorem quas, maxime aut iusto?</p>
    <a href="#">Learn more</a>
    <img src="../../assets/img/h5-img-1.jpg" alt="Students look up" />
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/mixins" as *;
@use "../../assets/scss/partials/var" as *;
.wrapper {
  > * {
    margin-top: $space-l;
  }

  img {
    width: 100%;
  }

  a {
    display: block;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: bold;
    color: $col-primary;
    width: fit-content;

    &:hover {
      color: $col-primary-dark;
    }

    &:active {
      color: $col-primary-light;
    }
  }
}
</style>
