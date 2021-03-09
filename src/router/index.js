import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import NotFound from "../views/NotFound.vue";
import ProductDetails from "../views/ProductDetails.vue";

const routes = [
    {
       path: "/", // chemin de url de ma route
       name: "Home", // nom facultatif lorsque nous etablisson un lien avec cette route
       component : Home,// composant qui sera chargé quand cette route et appeller

    },
    {
        path: "/contact-nous", // chemin de url de ma route
        name: "Contact", // nom facultatif lorsque nous etablisson un lien avec cette route
        component: Contact,
        alias: "/contact"
     },
     {
        path: "/product/:name", // chemin de url de ma route
        name: "product-details", // nom facultatif lorsque nous etablisson un lien avec cette route
        component : ProductDetails,// composant qui sera chargé quand cette route et appeller
        props: true
 
     },
     /*{
        path: "/contact", // chemin de url de ma route
        redirect: {name: "Contact"}, 
 
     },*/
     {
         path: '/:catchAll(.*)',// :catchAll :symbole dynamique, et ".*" une expression reguliére
         component: NotFound
     }
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router ;