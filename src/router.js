import Vue from 'vue';
import VueRouter from 'vue-router';

import TeamsView from './views/TeamsView';
import TeamDetailsView from './views/TeamDetailsView';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: TeamsView},
        {path: '/team/:fifaCode', component: TeamDetailsView, props: true},
    ]
});

export default router;
