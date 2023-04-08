import { createRouter, createWebHistory } from "vue-router"
import Home from "/src/pages/Home/Home.vue"
import About from "/src/pages/About/About.vue"
import Content from "/src/pages/Content/Content.vue"

const routes=[
        {
            name:'Home',
            component: Home,
            path:'/'
        },
        {
            name:'Content',
            component: Content,
            path:'/content'
        },
        {
            name:'About',
            component: About,
            path:'/about'
        }
    ];

const router = createRouter({
    history:createWebHistory(),
    routes,
});


export default router;