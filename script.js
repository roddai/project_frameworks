let data = {
  titulo: 'Principais Frameworks Front-End',
  frameworksFE: [
    { nome: "MaterializeCSS", classBtn: "btn btn-primary" },
    { nome: "Bulma", classBtn: "btn btn-secondary" },
    { nome: "Tailwind CSS", classBtn: "btn btn-success" },
    { nome: "Bootstrap", classBtn: "btn btn-danger" },
    { nome: "Angular", classBtn: "btn btn-warning" },
    { nome: "Vue.js", classBtn: "btn btn-info" },
    { nome: "Ember.js", classBtn: "btn btn-light" },
    { nome: "Svelte", classBtn: "btn btn-dark" }]
}

new Vue({
  el: "#app",
  data: data,
});