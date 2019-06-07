<template>
  <!-- <div class="home"> -->
    <!-- <img src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- </div> -->
  <section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Players
      </h1>
      <h2 class="subtitle">
        Can you believe it
      </h2>
      <a href="/#/login" class="button is-large is-fullwidth">Login</a>
      <a class="button is-large is-fullwidth">Register</a>
    </div>
  </div>
</section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  // components: {
  //   HelloWorld
  // }
};
</script>

<style lang="scss" scoped>
  .container {
    // padding: 25px;
    font-size: 10px;
  }
</style>
