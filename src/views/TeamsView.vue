<template>
    <div>
        <h2>Equipos</h2>
        <div class="initials">
            <span class="initial"
                  :class="{'initial--selected': initial===selectedInitial}"
                  v-for="initial in initials"
                  @click="selectInitial(initial)">
                {{initial}}
            </span>
            <span class="initial"
                  :class="{'initial--selected': undefined===selectedInitial}"
                  @click="selectInitial(undefined)">
                Todos
            </span>
        </div>
        <div class="team-list">
            <team-item v-for="team in filteredTeams" :team="team" :key="team.id"/>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    import dataApi from '../helpers/dataApi';
    import TeamItem from '../components/TeamItem';

    export default {
        data() {
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
        methods: {
            selectInitial(initial) {
                this.selectedInitial = initial;
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
</style>
