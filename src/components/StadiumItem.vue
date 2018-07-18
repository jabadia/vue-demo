<template>
    <div class="stadium-item with-shadow">
        <img class="stadium-item__picture" :src="stadium.image" alt="stadium.name">
        <div>
            {{stadium.name}}<br>
            <span class="stadium-item__city">({{stadium.city}})</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            stadium: Object,
        },
    };
</script>

<style>
    .stadium-item {
        display: inline-flex;
        align-items: center;
        padding: 10px;
        margin: 5px;
        cursor: pointer;
        width: 45%;
    }

    .stadium-item__picture {
        object-fit: cover;
        height: 50px;
        width: 100px;
        margin-right: 10px;
    }

    .stadium-item__city {
        color: gray;
        font-size: small;
    }
</style>
