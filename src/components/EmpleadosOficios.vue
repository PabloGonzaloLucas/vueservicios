<template>
  <div>
    <h1>{{oficio}}</h1>
    <table class="table table-bordered table-hover table-dark table-striped table">
        <thead>
            <tr>
                <th>Apellido</th>
                <th>Departamento</th>
                <th>Oficio</th>
                <th>Salario</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="empleado in empleados" :key="empleado">
                <td>{{empleado.apellido}}</td>
                <td>{{empleado.departamento}}</td>
                <td>{{empleado.oficio}}</td>
                <td>{{empleado.salario}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>

import ServiceEmpleados from '../services/ServiceEmpleados'
const service = new ServiceEmpleados();
export default {
    name:"EmpleadosOficios",
    data(){
        return{
            oficio: this.$route.params.oficio,
            empleados: []
        }
    },
    methods:{
        loadEmpleados() {
            service.getEmpleadosOficio(this.oficio).then(res => {
                console.log(res)
                this.empleados = res
            })
        }
    },
    mounted(){
        this.loadEmpleados()
    },
    watch:{
        '$route.params.oficio'(newValue, oldValue){
            if(oldValue != newValue){
                this.oficio = newValue
                this.loadEmpleados()
            }
        }
    }
}
</script>

<style>

</style>