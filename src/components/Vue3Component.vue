<script setup>
import Icon from './widgets/Icon.vue';
import { ref } from 'vue';

// 1) DATA
const name = ref("");
// 1.1) Para modificar o acceder a valor ref (value):
name.value = "Pepito";

const message = ref("");

// 2) METODOS
const sayHello = () => {
    alert("Hola " + name.value);
} 

const sendMessageToParent = () => {
    emit("message", "ADIOS!")
}

// 6) PROPS
defineProps({
    title: String,
})
// const props = defineProps({title: String})

// 7) CHILD > PARENT (comunication)
const emit = defineEmits(["message"])

</script>

<!----------------------------------------------------------------->
<template>
    <div class="component">
        <h3 class="title--2">{{ title }}</h3>
        <span>Hello {{ name }}</span>
        <br>
        <div class="btn-container">
            <Icon />
            <button @click="sayHello">Saludar 👋🏻</button>
        </div>
        <div>
            <button @click="sendMessageToParent">Enviar mensaje al padre</button>
        </div>
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

    .btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin: 10px 0;
    }
</style>