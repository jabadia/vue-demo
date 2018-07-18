<template>
    <div id="app">
        <nav>
            <router-link :to="{name: 'home'}">Inicio</router-link>
        </nav>
        <router-view/>
    </div>
</template>

<script>

    export default {
        name: 'app',
    };
</script>

<style>
</style>
