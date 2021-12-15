import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';

import LogIn from './components/LogIn.vue'
import Reserva from './components/Reserva.vue'
import Home from './components/Home.vue'
import Mascotas from './components/Mascotas.vue'


const routes = [{
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/user/logIn',
        name: "logIn",
        component: LogIn
    },
    {
        path: '/user/Reserva',
        name: "Reserva",
        component: Reserva
    },
    {
        path: '/user/home',
        name: "home",
        component: Home
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;