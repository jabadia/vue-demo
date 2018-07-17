<template>
    <div class="team-item">
        {{team.emojiString}} {{team.name}}
    </div>
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
        width: 150px;
    }
</style>
