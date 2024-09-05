<template>
    <header class="header">
        <h1>VUEJS</h1>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style>
    .header {
        display: flex;
        align-items: center;
        padding: 0 40px;
        height: var(--header-height);
        background-color: var(--ACCENT);
        color: white;
    }
</style>