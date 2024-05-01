<script setup>
import MainTitleComponent from "./mainTitle.vue";
let data = {
  titulo: "Principais Frameworks Front-End",
  frameworksFE: [
    { nome: "MaterializeCSS", classBtn: "btn btn-primary" },
    { nome: "Bulma", classBtn: "btn btn-secondary" },
    { nome: "Tailwind CSS", classBtn: "btn btn-success" },
    { nome: "Bootstrap", classBtn: "btn btn-danger" },
    { nome: "Angular", classBtn: "btn btn-warning" },
    { nome: "Vue.js", classBtn: "btn btn-info" },
    { nome: "Ember.js", classBtn: "btn btn-light" },
    { nome: "Svelte", classBtn: "btn btn-dark" },
  ],
};
</script>

<template>
  <main id="app">
    <MainTitleComponent></MainTitleComponent>
    <section>
      <div
        class="framework"
        v-for="framework in data.frameworksFE"
        v-bind:key="framework"
      >
        <h4 class="display-6">{{ framework.nome }}</h4>
        <button :class="framework.classBtn">Saiba mais</button>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  background-color: blanchedalmond;
  height: 100vh;
}

main section {
  padding: 30px 30px 15px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.framework {
  width: 300px;
  margin: 10px;
  background-color: rgb(121, 63, 126);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

h4 {
  color: white;
  align-self: center;
  padding: 20px 0px 50px;
}

button {
  max-width: 150px;
  align-self: center;
  margin-bottom: 20px;
}

.display-6 {
  font-family: Tahoma, sans-serif;
}
</style>