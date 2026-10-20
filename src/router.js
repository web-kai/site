import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Products from '@/views/Products.vue'
import Solutions from '@/views/Solutions.vue'
import News from '@/views/News.vue'
import Contact from '@/views/Contact.vue'

const routes = [
    { path: '/', component: Home, name: 'home', meta: { title: '首页' } },
    { path: '/about', component: About, name: 'about', meta: { title: '关于我们' } },
    { path: '/products', component: Products, name: 'products', meta: { title: '产品中心' } },
    { path: '/solutions', component: Solutions, name: 'solutions', meta: { title: '解决方案' } },
    { path: '/news', component: News, name: 'news', meta: { title: '新闻资讯' } },
    { path: '/contact', component: Contact, name: 'contact', meta: { title: '联系我们' } }
]

export function createSSRRouter() {
    return createRouter({
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes
    })
}