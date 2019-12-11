import Vue from 'vue'
import VueRouter from 'vue-router'

import Header from '../components/common/header/Header.vue'


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: [{
        path: '/',
        component: Header,

    }]
})
