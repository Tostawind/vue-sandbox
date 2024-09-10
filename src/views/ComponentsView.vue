<script setup>
import Vue3Component from '../components/Vue3Component.vue';
import Vue2Component from '../components/Vue2Component.vue';
import Title from '../components/widgets/Title.vue';
import { ref } from 'vue';

const vue2Title = "Vue 2 Component";

const childMessage = ref("");

const onNewMessage = (event) => {
    childMessage.value = event;
}
</script>
<template>
    <div>
        <Title text="Componentes ⚛️"></Title>
        <Vue2Component :title="vue2Title" age="30" @message="onNewMessage($event)"/>
        <Vue3Component title="Vue 3 Component" @message="onNewMessage($event)"/>

        <hr/>
        <p>Mensaje del hijo: {{ childMessage }}</p>
    </div>
</template>