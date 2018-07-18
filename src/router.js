import Vue from 'vue';
import VueRouter from 'vue-router';

import TeamsView from './views/TeamsView';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: TeamsView},
    ]
});

export default router;
