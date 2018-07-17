<template>
    <div id="app">
        <h2>Equipos</h2>
        <ul class="team-list">
            <li v-for="team in sortedTeams">
                {{team.emojiString}} {{team.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    const WORLDCUP_DATA_URL = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json';
    import axios from 'axios';

    export default {
        name: 'app',
        data: () => {
            return {
                teams: [],
            };
        },
        computed: {
            sortedTeams() {
                return _.orderBy(this.teams, 'name');
            },
        },
        mounted() {
            axios.get(WORLDCUP_DATA_URL)
                .then(response => response.data)
                .then(data => {
                    this.teams = data.teams;
                });
        },
    };
</script>

<style>
    .team-list {
        list-style: none;
        padding: 0;
    }
</style>
