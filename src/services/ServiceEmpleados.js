import Global from "../Global";
import axios from "axios";
export default class ServiceEmpleados{
    getEmpleados(){
        return new Promise(function(resolve){
            var empleados = []
            let url = Global.urlEmpleados + "api/Empleados"
            axios.get(url).then(res=>{
                empleados = res.data    
                resolve(empleados)
            })

        })
    }
    findEmpleado(id){
        return new Promise(function(resolve){
            var empleado = []
            let request = "api/empleados/" + id;
            let url = Global.urlEmpleados + request;
            axios.get(url).then(response => {
                console.log("Buscando empleado")
                this.empleado = response.data;
            })
            resolve(empleado)
        })
    }
    getOficios(){
        return new Promise(function(resolve){
            let oficios = []
            let request = "api/Empleados/oficios"
            let url = Global.urlEmpleados+request;
            axios.get(url).then(response => {
                console.log("leyendo oficios");
                oficios = response.data
                resolve(oficios)
            }) 

        })
    }
    getEmpleadosOficio(oficio){
        return new Promise(function(resolve){
            let url = Global.urlEmpleados + "api/empleados/empleadosOficio/"+oficio
            let empleados = []
            axios.get(url).then(res => {
            console.log(res.data);
                empleados = res.data
                resolve(empleados)
            })
        })
        
       
    }
}