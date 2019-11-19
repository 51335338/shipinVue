import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddPlatform from '../views/content/account/AddPlatfrom.vue'
import PlatformGroup from '../views/content/account/PlatformGroup.vue'
import Message from '../views/content/account/Message.vue'
import Video from '../views/content/Video'
import Article from '../views/content/Article'
import VideoHistory from '../views/content/VideoHistory'
import TaskList from '../views/content/TaskList'
import Overview from '../views/statistics/video/Index.vue'

Vue.use(VueRouter)

const routes = [{     
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/addPlatform',
        name: 'addPlatform',
        component: AddPlatform
    },
    {
        path: '/platformGroup',
        name: 'platformGroup',
        component: PlatformGroup
    },
    {
        path: '/message',
        name: 'message',
        component: Message
    },
    {
        path: '/video',
        name: 'video',
        component: Video
    },
    {
        path: '/article',
        name: 'article',
        component: Article
    },
    {
        path: '/taskList',
        name: 'taskList',
        component: TaskList
    },
    {
        path: '/videoHistory',
        name: 'videoHistory',
        component: VideoHistory
    },
    {
        path: '/overview',
        name: '数据概况',
        component: Overview
    }
]

const router = new VueRouter({
    routes
})

export default router