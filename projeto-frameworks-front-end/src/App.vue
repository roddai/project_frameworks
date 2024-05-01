<script setup>
import HeaderComponent from "./components/header.vue";
import BlocksComponent from "./components/frameworksBlocks.vue";
import FooterComponent from "./components/footer.vue";
</script>

<template>
  <section>
    <HeaderComponent></HeaderComponent>
    <BlocksComponent></BlocksComponent>
    <FooterComponent></FooterComponent>
  </section>
</template>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>