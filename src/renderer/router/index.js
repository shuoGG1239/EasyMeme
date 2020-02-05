import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'applayout',
            component: require('@/components/layouts/AppLayout').default,
            children: [
                {
                    path: 'memecreate',
                    component: require('@/components/pages/MemeCreate').default,
                    name: 'memecreate'
                },
                {
                    path: 'greener',
                    component: require('@/components/pages/Greener').default,
                    name: 'greener'
                },
            ]
        }
    ]
})
