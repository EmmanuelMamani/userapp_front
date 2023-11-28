<template>
  <div class="w-5/6 mx-auto mt-3 relative" id="contenedor">
    <span class="block text-center text-slate-500 text-xl ">Mis Almacenes</span>
    <div class="mb-20" v-if="almacenes.length === 0">
      <img src="../components/icons/sin_almacen.svg" class="block mx-auto">
      <span class="block text-center text-slate-500 text-md">Sin Almacenes</span>
    </div>
    <div class="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2 justify-center">
         <AlmacenComp v-for="(almacen, index) in almacenes" :nombre="almacen.nombre" :cantidad="almacen.cantidad" :color="almacen.color"  :key="index"></AlmacenComp>
    </div>
    <div class="absolute bottom-1 right-1">
      <button class="bg-blue-600 block p-2 rounded-full">
        <img src="../components/icons/add.svg" alt="agregar">
      </button>
      <button class="bg-blue-600 block p-2 rounded-full my-3">
        <img src="../components/icons/file.svg" alt="expertar">
      </button>
    </div>
  </div>
</template>
<style scoped>
  #contenedor {
    min-height: 85vh;
  }
</style>
<script setup>
import AlmacenComp from "../components/AlmacenComp.vue";
const almacenes = [
  { nombre: "Centrar", cantidad: 2, color: "#81DCE9" },{ nombre: "Norte", cantidad: 62, color: "#8AD492" },{ nombre: "Sur", cantidad: 2000, color: "#E2CC56" }
];
</script>
