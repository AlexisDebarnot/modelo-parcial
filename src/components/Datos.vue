<template>

  <section class="src-components-http">
    <div class="jumbotron mt-3">
      <h2>Lista de usuarios</h2>
      <hr>

      <button class="btn btn-success mx-3" @click="getAxios()">ACTUALIZAR</button>

      <br>
      <br>

      <div v-if="this.$store.state.datos.length"> 
          <table class="table">
              <tr class="bg-success text-white">
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Edad</th>
                  <th>Direccion</th>
                  <th>Email</th>
                  <th>Telefono</th>
              </tr>
              <tr class="bg-info text-white" v-for="(dato,index) in this.$store.state.datos" :key="index">
                  <td> {{dato.id}} </td>
                  <td> {{dato.nombre | primerLetraMayus}} </td>
                  <td> {{dato.apellido | primerLetraMayus}} </td>
                  <td> {{dato.edad}} </td>
                  <td> {{dato.direccion}} </td>
                  <td> {{dato.email}}</td>
                  <td> {{dato.telefono}} </td>
              </tr>
          </table>         
      </div>
      <div class="alert alert-danger" v-else-if="!this.$store.state.datos.length && this.$store.state.datos!=-1" >
            No hay usuarios disponibles
      </div>

    </div>
  </section>

</template>

<script lang="js">

  import { urlPosts } from '../urls'

  export default  {
    name: 'src-components-http',
    props: [],
    mounted () {
      this.getAxios()
    },
    data () {
      return {
        clicked: false,
      }
    },
    methods: {
      getAxios() {
        this.axios.get(urlPosts)
        .then( res => {
          this.$store.dispatch('cargarDatos', res.data)
          })
      },
      
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-http {

  }

  .jumbotron {
    background-color: rgb(2, 32, 26);
    color: white;
  }

  hr {
    background-color: white;
  }
</style>




// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA