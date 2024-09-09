<template>
    <div class="view-container">
        <Title text="ESTRUCTURA 📁"/>
        
        <ul>
            <li>📁 proyecto</li>
            <ul>
                <li>📁 assets</li>
                <li>📁 components</li>
                    <ul>
                        <li>📁 widgets</li>
                        <ul>
                            <li>🗒️ Button.vue</li>
                        </ul>
                    </ul>
                <li>📁 router</li>
                    <ul>
                        <li>🗒️ index.js</li>
                    </ul>
                <li>📁 views</li>
                <li>📁 services</li>
                <li>📁 utils</li>
                <li>🗒️ App.vue</li>
            </ul>
        </ul>
    </div>
</template>

<script setup>
import Title from '../components/widgets/Title.vue';

</script>
<style>

</style>