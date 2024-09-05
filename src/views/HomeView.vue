<template>
    <div class="view-container">
        <Title text="HOME 🏠" />

        <nav class="menu">
            <RouterLink to="/">HOME</RouterLink>
            <RouterLink to="/router">ROUTER</RouterLink>
        </nav>
    </div>
</template>

<script setup>
import Title from '../components/ui/Title.vue';
</script>

<style>

.menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;
}

.menu a {
    color: var(--BLACK);
}
</style>