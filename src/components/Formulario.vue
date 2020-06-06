<template>

  <section class="src-components-formulario">
    <div class="jumbotron mt-3">
      <h2>Formulario</h2>
      <hr>

      <vue-form :state="formState" @submit.prevent="enviar()">

        <!-- ------------------------------------------------ -->
        <br>
        <validate tag ="div">
          <label for ="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre"
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.nombre"
            required  
            no-espacios
          >

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Nombre requerido</div>
            <div slot="no-espacios" class="alert alert-danger my-1">No se permiten espacios intermedios</div>
          </field-messages>
        </validate>
        <!-- ------------------------------------------------ -->
        <br>
        <validate tag ="div">
          <label for ="apellido">Apellido</label>
          <input 
            type="text" 
            id="apellido" 
            name="apellido"
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.apellido"
            required 
            no-espacios
          >

          <field-messages name="apellido" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Apellido requerido</div>
            <div slot="no-espacios" class="alert alert-danger my-1">No se permiten espacios intermedios</div>
          </field-messages>
        </validate>
        <!-- ------------------------------------------------ -->
        <br>
        
        <validate tag ="div">
          <label for ="edad">Edad</label>
          <input 
            type="number" 
            id="edad" 
            name="edad"            
            class="form-control" 
            autocomplete="off"
            v-model.number="formData.edad"      
            required
            rango
          >

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Edad requerido</div>
            <div slot="rango" class="alert alert-danger my-1">La edad debe estar entre 18 y 120 años</div>
          </field-messages>


        </validate>
        <!-- ------------------------------------------------ -->
        <br>
        <validate tag ="div">
          <label for ="direccion">Direccion</label>
          <input 
            type="text" 
            id="direccion" 
            name="direccion"
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.direccion"
            required 
          >

          <field-messages name="direccion" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Direccion requerido</div>
          </field-messages>
        </validate>
        <!-- ------------------------------------------------ -->
        <br>
        
        <validate tag ="div">
          <label for ="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            class="form-control" 
            autocomplete="off"
            v-model="formData.email"
            required     
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          >

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Email requerido</div>
            <div slot="pattern" class="alert alert-danger my-1">Email invalido</div>
          </field-messages>


        </validate>
        <!-- ------------------------------------------------ -->
        <br>
        
        <validate tag ="div">
          <label for ="telefono">Telefono</label>
          <input 
            type="number" 
            id="telefono" 
            name="telefono"
            class="form-control" 
            autocomplete="off"
            v-model="formData.telefono"
            required     
          >

          <field-messages name="telefono" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Telefono requerido</div>
          </field-messages>


        </validate>
        <!-- ------------------------------------------------ -->



        <br>

        <button class="btn btn-success my-4" :disabled="formState.$invalid" type="submit">Enviar</button>

      </vue-form>

    </div>
  </section>

</template>

<script lang="js">

  import { urlPosts } from '../urls'

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInitialData(),
      }
    },
    methods: {

      getInitialData() {
        return{
          nombre: '',
          apellido: '',
          edad: '',
          direccion: '',
          email: '',
          telefono: ''
        }
      },
      enviar(){
        this.postAxios()
        this.formData = this.getInitialData()
        this.formState._reset()
      },
      postAxios() {
        let post = {
          nombre: this.formData.nombre,
          apellido: this.formData.apellido,
          edad: this.formData.edad,
          direccion: this.formData.direccion,
          email: this.formData.email,
          telefono: this.formData.telefono
        }
        this.axios.post(urlPosts, post, {
          'content-type' : 'application/json'
        })
        .then( res => {
          console.log(res.data)
        })
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }

  .jumbotron {
    background-color: rgb(173, 54, 11);
    color: white;
  }

  hr {
    background-color: white;
  }
</style>
