<!----------------------------------------------------------------->
<template>
    <div>
        <Title text="Vue 2 Component"></Title>
        <span>Hello {{ userName }}</span>
    </div>
</template>

<!----------------------------------------------------------------->
<script>
import Title from './ui/Title.vue';
export default {
    // DATA: propiedades del componente por defecto
    data() {
        return {
            userName: "Pepito",
        };
    },
    components: {
        Title
    }
};
</script>

<!----------------------------------------------------------------->
<style scoped>
    span {
        color: blueviolet;
        font-weight: bold;
    }
</style>