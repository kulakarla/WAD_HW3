import { createRouter, createWebHashHistory } from 'vue-router'
import Signup from "@/Views/Signup";
import Home from "@/Views/Home";

const routes = [{
    path: '/',
    name: 'home',
    component: Home
},
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router