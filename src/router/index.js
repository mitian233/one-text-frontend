import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    { path: '/', component: () => import('../views/homeView.vue'), meta: {title: 'One Text', htmlAttrs: {amp: true}, index: 1}},
]

const router = createRouter({history: createWebHistory(), routes})

//const DEFAULT_TITLE = 'One Text'

//router.afterEach((to) => {
//    const title = to.meta.title ? `${to.meta.title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE
//    document.title = title
//})

export default router