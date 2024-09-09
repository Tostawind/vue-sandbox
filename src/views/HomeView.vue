<template>
    <div class="view-container">
        <Title text="HOME 🏠" />

        <h3 class="title--2">Basics</h3>
        <hr>
        <ul class="list">
            <li><RouterLink to="/structure">Estructura 📁</RouterLink></li>
            <li><RouterLink to="/components">Componentes ⚛️</RouterLink></li>
            <li><RouterLink to="/router">Router 🔀</RouterLink></li>
            <li><RouterLink to="/directives">Directivas 🪄</RouterLink></li>
            <li><RouterLink to="/fetching">Fetching 🛄</RouterLink></li>
            <li><RouterLink to="/tests">Tests 🧪</RouterLink></li>
        </ul>

        <h3 class="title--2">Otros</h3>
        <hr>
        <ul class="list">
            <li><RouterLink to="/libraries">Librerias 📚</RouterLink></li>
        </ul>
    </div>
</template>

<script setup>
import Title from '../components/widgets/Title.vue';
</script>

<style>

.menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;
}
</style>