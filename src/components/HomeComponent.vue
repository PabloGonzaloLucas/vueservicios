<template>
 <div>
    <h1>Servicios Api Vue</h1>
    <h2 style="color:blue">{{mensaje}}</h2>
 </div>
</template>

<script>
import ServiceEjemplo from '../services/ServiceEjemplo'
//para utilizar el servicio necesitamos una instancia (variable) de la clase servicio
const service = new ServiceEjemplo();
export default {
  name: "HomeComponent",
  data(){
    return{
      mensaje : ""
    }
  },
  mounted(){
    this.mensaje = service.getSaludo("Pablo")
  }
}
</script>

<style>

</style>