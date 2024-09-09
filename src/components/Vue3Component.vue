<script setup>
import Icon from './widgets/Icon.vue';
const name = "Pepito"
</script>

<!----------------------------------------------------------------->
<template>
    <div class="component">
        <h3 class="title--2">Vue 3 Component</h3>
        <span>Hello {{ name }}</span>
        <br>
        <Icon />
        <hr>
    </div>
</template>

<!----------------------------------------------------------------->


<!----------------------------------------------------------------->
<style scoped>
    .component {
        text-align: center;
        margin-bottom: 20px;
    }

    span {
        color: blueviolet;
        font-weight: bold;
    }
</style>