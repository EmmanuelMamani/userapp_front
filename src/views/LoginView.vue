<template>
    <div class="mt-6 shadow rounded-xl mx-auto p-3 relative">
        <img src="../components/icons/caja.svg" class="absolute transform top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 class="text-center text-blue-600 text-xl mt-2">Iniciar Sesion</h3>
        <el-input v-model="email" placeholder="Email" class="mt-5 mx-auto block" />
        <el-input v-model="password" type="password" placeholder="Password" show-password class="my-5" />
        <span class="text-blue-600 block text-center">¿Olvidaste tu Contraseña?</span>
        <button class="block p-2 my-3 bg-blue-600 text-white w-4/5 mx-auto font-medium text-center rounded-3xl">Acceder</button>
        <el-divider>O</el-divider>
        <button class="p-2 my-3  text-blue-600 w-4/5 mx-auto font-medium text-center rounded-3xl border border-blue-600 flex justify-center"><img src="../components/icons/google_icon.svg" alt="google" class="mr-1"><span>Iniciar con Google</span></button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
const password = ref('')
</script>
