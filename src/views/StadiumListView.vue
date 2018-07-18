<template>
    <div>
        <div v-if="stadiums">
            <stadium-item v-for="stadium in stadiums" :stadium="stadium" />
        </div>
        <div v-else>cargando</div>
    </div>
</template>

<script>
    import dataApi from '../helpers/dataApi';
    import StadiumItem from '../components/StadiumItem';

    export default {
        data() {
            return {
                stadiums: undefined,
            };
        },
        mounted() {
            dataApi.getStadiums().then(stadiums => {
                this.stadiums = stadiums;
            });
        },
        components: {
            StadiumItem,
        },
    };
</script>

<style>
</style>
