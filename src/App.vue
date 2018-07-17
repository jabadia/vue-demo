<template>
    <div id="app">
        <h2>Equipos</h2>
        <div class="initials">
            <span class="initial"
                  :class="{'initial--selected': initial===selectedInitial}"
                  v-for="initial in initials"
                  @click="selectedInitial=initial">
                {{initial}}
            </span>
            <span class="initial"
                  :class="{'initial--selected': undefined===selectedInitial}"
                  @click="selectedInitial=undefined">
                Todos
            </span>
        </div>
        <div class="team-list">
            <div class="team-item" v-for="team in filteredTeams">
                {{team.emojiString}} {{team.name}}
            </div>
        </div>
    </div>
</template>

<script>
    const WORLDCUP_DATA_URL = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json';
    import axios from 'axios';
    import _ from 'lodash';

    export default {
        name: 'app',
        data: () => {
            return {
                teams: [],
                selectedInitial: undefined,
            };
        },
        computed: {
            sortedTeams() {
                return _.orderBy(this.teams, 'name');
            },
            filteredTeams() {
                return this.selectedInitial
                    ? this.sortedTeams.filter(team => team.name.charAt(0) === this.selectedInitial)
                    : this.sortedTeams;
            },
            initials() {
                return _.uniq(this.sortedTeams.map(team => team.name.charAt(0)));
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
    .initials {
        margin-bottom: 10px;
    }

    .initial {
        padding: 10px;
        cursor: pointer;
    }

    .initial:hover, .initial--selected {
        background: red;
        color: white;
    }

    .team-list {
        display: flex;
        flex-wrap: wrap;
    }

    .team-item {
        width: 150px;
    }
</style>
