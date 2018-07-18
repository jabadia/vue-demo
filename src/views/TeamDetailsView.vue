<template>
    <div class="team-details">
        <div v-if="team">
            <h2>{{team.name}}</h2>
            <img class="team-details__flag" :src="team.flag" :alt="team.name">
            <div class="team-details__matches">
                <match-item v-for="match in matches" :key="match.id" :match="match"/>
            </div>
        </div>
        <div v-else>
            <h2>Equipo {{fifaCode}}</h2>
            cargando
        </div>
    </div>
</template>

<script>
    import dataApi from '../helpers/dataApi';
    import MatchItem from '../components/MatchItem';

    export default {
        props: {
            fifaCode: String,
        },
        data() {
            return {
                team: undefined,
                allMatches: undefined,
            };
        },
        computed: {
            matches() {
                return this.allMatches.filter(match =>
                    match.home_team === this.team.id ||
                    match.away_team === this.team.id,
                );
            },
        },
        mounted() {
            dataApi.getTeams().then(teams => {
                    this.team = _.find(teams, {fifaCode: this.fifaCode});
            });
            dataApi.getMatches().then(matches => {
               this.allMatches = matches;
            });
        },
        components: {
            MatchItem,
        },
    };
</script>

<style>
    .team-details .team-details__flag {
        height: 50px;
        border: 1px solid gray;
    }
</style>
