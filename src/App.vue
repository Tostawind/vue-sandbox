<script setup>
import Vue2Component from './components/Vue2Component.vue'
import Vue3Component from './components/Vue3Component.vue'
import Header from './components/ui/Header.vue'
</script>

<template>
  <Header></Header>
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
  .main {
    height: calc(100vh - var(--header-height));
    padding: 40px;
  }
</style>
