import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        datos: -1,

    },
    actions : {
        cargarDatos({commit}, datos){
            commit('cargarDatos', datos)
        }

    },
    mutations : {
        cargarDatos(state, datos){
            state.datos = datos
        }
    }
})
