<script setup>
import { store } from '../../stores/store';
defineProps({title: String})
</script>

<template>
    <div class="counter">
        <h3 class="title--3">{{ title }}</h3>
        <br />
        <p><b>LIKES</b> (store): {{ store.likes }}</p>
        <br />
        <!-- <button @click="store.likes++" class="btn">Like +1 👍🏻</button> -->
        <button @click="store.increment()" class="btn">Like +1 👍🏻</button>
    </div>
</template>

<style>
    .counter {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        padding: 20px 10px;
        border-radius: 4px;
        margin-bottom: 20px;
    }
</style>