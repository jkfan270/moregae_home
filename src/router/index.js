import { createRouter, createWebHistory } from "vue-router"
import Home from "/src/pages/Home/Home.vue"
import About from "/src/pages/About/About.vue"
import Content from "/src/pages/Content/Content.vue"
import Material from "/src/pages/Materials/Material.vue";
import Comment from "/src/pages/Comment/Comment.vue"

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
        },
    {
        name:'Material',
        component: Material,
        path:'/Materials'
    },
    {
        name:'Comment',
        component: Comment,
        path:'/Comment'
    }

    ];

const router = createRouter({
    history:createWebHistory(),
    routes,
});


export default router;