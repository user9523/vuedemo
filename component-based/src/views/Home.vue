<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <FormSample></FormSample> -->
    <Tree></Tree>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import FormSample from "@/components/form/index.vue";
import Tree from "@/components/tree/index.vue";

export default {
  name: "home",
  components: {
    // FormSample,
    Tree
  }
};
</script>
