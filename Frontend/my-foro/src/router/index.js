//import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Registro from "../components/Registro.vue";
import Publicar from "../components/Publicar.vue";
import ListaPublicacion from "../components/ListaPublicacion.vue";
import usuarioLogin from "../components/usuarioLogin.vue";
const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },

    {
        path: "/registros",
        name: "Resgistros",
        component: Registro,
    },
    {
        path: "/publicacion",
        name: "Publicacion",
        component: Publicar,
    },
    {
        path: "/lista",
        name: "Lista",
        component: ListaPublicacion,
    },
    {
        path: "/usuarioLogin/:id_usuario",
        name: "usuarioLogin",
        component: usuarioLogin,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;