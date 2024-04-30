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


// Definição de componentes
let frameworksBlocks = Vue.extend({
  data: function () {
    return data;
  },
  template: '<section>' +
    '<div class="framework" v-for="framework in frameworksFE">' +
    '<h4 class="display-6">{{framework.nome}}</h4>' +
    '<button :class="framework.classBtn">Saiba mais</button>' +
    '</div>' +
    '</section>'
});

//  Registro de componentes
Vue.component('blocks', frameworksBlocks);

new Vue({
  el: "#app",
  data: data,
});