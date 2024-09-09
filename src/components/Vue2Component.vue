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
            <button @click="increment">Contador {{ count }}</button>
            <p>Total: {{ total }}</p>
            <p>Última actualización: {{ lastUpdate }}</p>
        </div>
        <div>
            <button @click="sendMessageToParent">Enviar mensaje al padre</button>
        </div>
        <hr>
    </div>
</template>

<!----------------------------------------------------------------->
<script>
import Icon from './widgets/Icon.vue';
export default {
    // 1) DATA: propiedades del componente por defecto
    data() {
        return {
            name: "Pepito",
            count: 0,
            total: 0,
            lastUpdate: null,
            message: ""
        };
    },
    // 2) METODOS: funciones para usar en template o en script con this.
    methods: {
        sayHello() {
            // 'this'
            this.speak("Hola " + this.name)
        },
        speak(message) {
            alert(message + '!!!')
        },
        increment() {
            this.count++
        },
        // 7) CHILD > PARENT (comunication)
        sendMessageToParent() {
            this.message = "HOLA";
            this.$emit("message", this.message)
        }
    },
    // 3) COMPUTED: 
    computed: {
        total() {
            return this.total = this.count * 10
        }
    },
    // 4) WATCH: observador de cambio en computed
    watch: {
        total() {
            this.lastUpdate = new Date()
        }
    },
    // 5) CICLO DE VIDA
    mounted() {
        console.log('Component mounted')
    },
    // 6) PROPS
    // props: ["title"],
    // 6.1) Prop validation (optional)
    props: {
        title: String,
        age: {
            type: [String, Number],
            default: "30",
            required: true,
            validator: value => value.startsWith("_")
        }
    },  
    // 7) CHILD > PARENT (comunication)
    emits: ["message"],
    components: {
        Icon
    }
};
</script>

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