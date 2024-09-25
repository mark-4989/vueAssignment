import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import homeComp from './components/homeComp.vue';
import aboutComp from './components/aboutComp.vue';
import contactCompo from './components/contactCompo.vue';
import serviceCompo from './components/serviceCompo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/',component:homeComp},
        {path:'/about',component:aboutComp},
        {path:'/service',component:serviceCompo},
        {path:'/contact',component:contactCompo}
    ]
})

const app = createApp(App)
app.use(router)

app.mount('#app')
