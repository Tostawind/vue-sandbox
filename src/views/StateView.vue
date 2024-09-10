<template>
    <div class="view-container">
        <Title text="ESTADO GLOBAL 💱" />
        <Counter title="CONTADOR 1"/>
        <Counter title="CONTADOR 2"/>
    </div>
</template>
<script>
import Counter from '../components/widgets/Counter.vue';
import Title from '../components/widgets/Title.vue';
export default {
    components: {
        Title,
        Counter
    }
}
</script>