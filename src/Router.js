import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import CochesComponent from './components/CochesComponent.vue'
import EmpleadosComponent from './components/EmpleadosComponent.vue'
import EmpleadosOficios from './components/EmpleadosOficios.vue'
import CustomersComponent from './components/CustomersComponent.vue'

const myRoutes = [
    {path: '/home', component: HomeComponent},
    {path: '/coches', component: CochesComponent},
    {path: '/empleados', component: EmpleadosComponent},
    {path: '/customers', component: CustomersComponent},
    {path: '/empleados/:oficio', component: EmpleadosOficios}
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;