<script setup>
    defineProps({
        text: String
    })
</script>
<template>
    <h2 class="title--1">{{ text }}</h2>
</template>

<style>
.title--1 {
    border-bottom: 1px solid #22222240;
}
</style>