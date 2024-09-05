<script setup>
import Title from './Title.vue';
const userName = "Pepito"

</script>

<!----------------------------------------------------------------->
<template>
    <div>
        <Title text="Vue 3 Component"></Title>
        <span>Hello {{ userName }}</span>
    </div>
</template>

<!----------------------------------------------------------------->


<!----------------------------------------------------------------->
<style scoped>
    span {
        color: blueviolet;
        font-weight: bold;
    }
</style>