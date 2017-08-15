import VueRouter from 'vue-router';


let routes = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/dashboard',
        component: require('./views/Dashboard.vue')
    },
    {
        path: '/profile',
        component: require('./views/Profile.vue')
    },
    {
        path: '/findSupervisor',
        component: require('./views/FindSupervisor.vue')
    },    
    {
        path: '/registerSupervision',
        component: require('./views/RegisterSupervision.vue')
    },
    {
        path: '/oversigtSupervision',
        component: require('./views/OversigtSupervision.vue')
    },
    {
        path: '/registreringer',
        component: require('./views/RegistreringerSupervision.vue')
    },

];


export default new VueRouter({
    routes
});