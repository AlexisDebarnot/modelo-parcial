import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from "./components/Formulario.vue";
import Datos from "./components/Datos.vue";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
      {path: '/', redirect: '/datos'},
      {path: '/formulario', component: Formulario},
      {path: '/datos', component: Datos}
    ]
  })