<script setup>
import { RouterView } from 'vue-router'
import EncabezadoComp from './components/EncabezadoComp.vue'
</script>

<template>
  <header>
    <Encabezado-comp></Encabezado-comp>
  </header>
  <main>
    <Router-view></Router-view>
  </main>
</template>
