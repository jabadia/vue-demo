import Vue from 'vue';
import VueRouter from 'vue-router';

import TeamsView from './views/TeamsView';
import TeamDetailsView from './views/TeamDetailsView';
import StadiumListView from './views/StadiumListView';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {name: 'home',         path: '/', component: TeamsView},
        {name: 'team-details', path: '/team/:fifaCode', component: TeamDetailsView, props: true},
        {name: 'stadium-list', path: '/stadium-list/', component: StadiumListView},
    ]
});

export default router;
