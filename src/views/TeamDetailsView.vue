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
    import axios from 'axios';
    import MatchItem from '../components/MatchItem';

    const WORLDCUP_DATA_URL = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json';

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
            axios.get(WORLDCUP_DATA_URL)
                .then(response => response.data)
                .then(data => {
                    this.team = _.find(data.teams, {fifaCode: this.fifaCode});
                    this.allMatches = _.orderBy(_.flatten(_.concat(
                        _.map(data.groups, 'matches'),
                        _.map(data.knockout, 'matches'),
                    )), 'date');
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
