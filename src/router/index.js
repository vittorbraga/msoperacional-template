import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
// const Login = { template: '<div>Login</div>' }
// const Home = { template: '<div>Login</div>' }

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta: {allowedProfiles: ['admin', 'user']},
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {allowedProfiles: ['admin', 'user']},
    }
]

const router = new VueRouter({
    routes: routes
})

// router.beforeEach(async (to, from, next) => {
//     console.log(to.name)
//     next()
// })

export default router