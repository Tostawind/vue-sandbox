<template>
    <div class="view-container">
        <Title text="ROUTER 🔀" />
        <div>
            <h3 class="title--2">1. Instalar</h3>
            <code>
                npm i vue-router@latest
            </code>
        </div>

        <hr>

        <div>
            <h3 class="title--2">2. Agregar rotas al main.js</h3>
            <code>
                import { createApp } from 'vue'
                import router from './router'
                import App from './app.vue'

                createApp(App)
                .use(router)
                .mount('#app')
            </code>
        </div>

        <div>
            <h3 class="title--2">3. Añadir LINKS y VIEW</h3>
            <code>

            </code>
        </div>


        <hr>
        <p>
            PENDIENTE: $router $routes
        </p>
    </div>
</template>

<script setup>
import Title from '../components/widgets/Title.vue';
</script>

<style>

</style>