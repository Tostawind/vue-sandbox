<template>
    <header class="header">
        <RouterLink to="/">
            <h1 style="color: white">VUEJS</h1>
        </RouterLink>
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