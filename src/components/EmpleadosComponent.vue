<template>
  <div class="hypnosis-container">
    <!-- Espiral de hipnosis de fondo -->
    <div class="hypnosis-spiral"></div>
    
    <div class="content-wrapper">
    <!-- <table class="table table-bordered table-hover table-info ta">
        <thead>
            <tr>
                <th>Apellido</th>
                <th>Oficio</th>
                <th>Salario</th>
                <th>Departamento</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="empleado in empleados" :key="empleado">
                <td>{{empleado.apellido}}</td>
                <td>{{empleado.oficio}}</td>
                <td>{{empleado.salario}}</td>
                <td>{{empleado.departamento}}</td>
            </tr>
        </tbody>
    </table> -->
    <form>
        <label>Seleccione un empleado</label>
        <select class="form control" v-model="idEmpleado">
            <option v-for="empleado in empleados" :key="empleado" :value="empleado.idEmpleado">
                {{empleado.apellido}}
            </option>
        </select>
        <button v-on:click.prevent="findEmpleado()">
            Detalles
        </button>
    </form>

    <ul class="list-group" v-if="empleado">
        <li class="list-group-item">
            {{empleado.apellido}}
        </li>
    
        <li class="list-group-item">
            {{empleado.oficio}}
        </li>
   
   
        <li class="list-group-item">
            {{empleado.salario}}
        </li>
   
        <li class="list-group-item">
            {{empleado.departamento}}
        </li>
    </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Global from '../Global'
let url = Global.urlEmpleados
export default {
    name:"EmpleadosComponent",
    data(){
        return{
            empleados: [],
            idEmpleado: 0,
            empleado: null
        }
    },
    methods: {
        findEmpleado(){
            let request = "api/empleados/" + this.idEmpleado;
            let urla = url + request;
            axios.get(urla).then(response => {
                console.log("Buscando empleado")
                this.empleado = response.data;
            })
        }
    },
    mounted(){
        let request = 'api/Empleados';
        axios.get(url+request).then(res=>{
            this.empleados=res.data
        })
    }
}
</script>

<style scoped>
.hypnosis-container {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

/* Espiral de hipnosis */
.hypnosis-spiral {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150vmax;
  height: 150vmax;
  background: repeating-conic-gradient(
    from 0deg,
    #000 0deg 10deg,
    #fff 10deg 20deg,
    #000 20deg 30deg,
    #fff 30deg 40deg
  );
  border-radius: 50%;
  animation: hypnoticSpin 8s linear infinite;
  opacity: 0.8;
  z-index: 1;
}

/* Efecto adicional de círculos concéntricos */
.hypnosis-spiral::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  background: repeating-radial-gradient(
    circle at center,
    transparent 0px,
    transparent 40px,
    rgba(255, 255, 255, 0.3) 40px,
    rgba(255, 255, 255, 0.3) 45px
  );
  border-radius: 50%;
  animation: hypnoticPulse 3s ease-in-out infinite;
}

/* Centro brillante */
.hypnosis-spiral::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, 
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.8) 30%,
    rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.8);
  animation: centerGlow 2s ease-in-out infinite alternate;
}

@keyframes hypnoticSpin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) scale(1);
  }
}

@keyframes hypnoticPulse {
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

@keyframes centerGlow {
  0% {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
  }
  100% {
    box-shadow: 0 0 80px rgba(255, 255, 255, 1);
  }
}

/* Contenedor del contenido */
.content-wrapper {
  position: relative;
  z-index: 10;
  max-width: 800px;
  width: 100%;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 0 60px rgba(255, 255, 255, 0.3),
    inset 0 0 30px rgba(255, 255, 255, 0.1);
}

/* Estilos del formulario */
form {
  margin-bottom: 30px;
}

label {
  display: block;
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 15px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

select {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  color: #fff;
  font-size: 1.1rem;
  outline: none;
  transition: all 0.3s ease;
}

select:focus {
  border-color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

select option {
  background: #000;
  color: #fff;
}

button {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.5s, height 0.5s;
}

button:hover::before {
  width: 300px;
  height: 300px;
}

button:hover {
  border-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}

/* Estilos de la lista */
.list-group {
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
}

.list-group-item {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 15px 20px;
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
  animation: fadeInUp 0.5s ease-out backwards;
}

.list-group-item:nth-child(1) { animation-delay: 0.1s; }
.list-group-item:nth-child(2) { animation-delay: 0.2s; }
.list-group-item:nth-child(3) { animation-delay: 0.3s; }
.list-group-item:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.list-group-item:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateX(5px);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

/* Responsive */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 25px;
  }
  
  label {
    font-size: 1rem;
  }
  
  select, button {
    font-size: 1rem;
  }
}
</style>