<template>
    <router-link
        tag="div"
        :to="{name: 'team-details', params: {fifaCode: team.fifaCode}}"
        class="team-item with-shadow">
        <img class="team-item__flag" :src="team.flag" :alt="team.name">
        {{team.name}}
    </router-link>
</template>

<script>
    export default {
        props: {
            team: Object,
        },
    };
</script>

<style>
    .team-item {
        display: flex;
        align-items: center;
        width: 150px;
        padding: 10px;
        cursor: pointer;
        margin: 5px;
    }

    .team-item__flag {
        width: 35px;
        height: 35px;
        object-fit: cover;
        border: 1px solid gray;
        border-radius: 25px;
        margin-right: 10px;
    }

    .with-shadow {
        position: relative;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .with-shadow::after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        opacity: 0;
    }

    .with-shadow:hover::after {
        opacity: 1;
    }
</style>
