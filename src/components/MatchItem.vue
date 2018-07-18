<template>
    <div class="match-item">
        {{match.date|formatDate}}<br>
        <div class="match-item__row" v-if="homeTeam && awayTeam">
            <team-item :team="homeTeam"/>
            <div class="match-item__result">
                {{match.home_result}}
            </div>
            -
            <div class="match-item__result">
                {{match.away_result}}
            </div>
            <team-item :team="awayTeam"/>
        </div>
        <div v-else>cargando</div>
    </div>
</template>

<script>
    import moment from 'moment';
    import dataApi from '../helpers/dataApi';
    import TeamItem from '../components/TeamItem';

    export default {
        props: {
            match: Object,
        },
        data() {
            return {
                teams: undefined,
            };
        },
        computed: {
            homeTeam() {
                return _.find(this.teams, {id: this.match.home_team});
            },
            awayTeam() {
                return _.find(this.teams, {id: this.match.away_team});
            },
        },
        mounted() {
            dataApi.getTeams().then(teams => {
                this.teams = teams;
            });
        },
        components: {
            TeamItem,
        },
        filters: {
            formatDate(d) {
                return moment(d).calendar();
            },
        },
    };
</script>

<style>
    .match-item {
        text-align: center;
    }
    .match-item__row {
        display: inline-flex;
        align-items: center;
    }
    .match-item__result {
        background: red;
        color: white;
        padding: 10px 20px;
        margin: 5px;
        border-radius: 10px;
        text-align: center;
    }
</style>
