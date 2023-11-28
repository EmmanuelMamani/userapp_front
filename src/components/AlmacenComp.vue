<template>
  <div class="text-center rounded-xl p-3 text-white cursor-pointer" :style="{ backgroundColor: color }">
    <span class="block text-xl font-medium">{{ nombre }}</span>
    <img src="./icons/almacen.svg" alt="" class="block mx-auto">
    <span class="block">{{ props.cantidad }} Productos</span>
    <div class="grid grid-cols-2 justify-center">
      <button @click="open_edit=true" class="text-white">Editar</button>
      <button @click="open_delete=true">Eliminar</button>
    </div>
    <el-dialog v-model="open_edit" title="Editar Almacen" class="w-5/6" :show-close="false">
      <div class="grid grid-cols-2 justify-items-start gap-2">
        <label class="block mb-2">Nombre:</label>
        <el-input v-model="nombre" placeholder="nombre" class="block mb-2" />
        <label class="block mb-2">Color:</label>
        <el-color-picker v-model="color" show-alpha class="block mb-2" />
        <button @click="cancel_edit" class="text-red-500 border border-red-500 rounded-lg p-1 w-full mt-2">Cancelar</button>
        <button @click="open_edit=false" class="text-white bg-blue-600 rounded-lg p-1 w-full border border-blue-600 mt-2">Actualizar</button>
      </div>
    </el-dialog>
    <el-dialog v-model="open_delete" title="¿Seguro que quieres eliminar el almacen?" class="w-5/6" :show-close="false">
      <div class="grid grid-cols-2 justify-items-start gap-2">
        <button @click="open_delete=false" class="text-red-500 border border-red-500 rounded-lg p-1 w-full mt-2">No</button>
        <button @click="open_delete=false" class="text-white bg-blue-600 rounded-lg p-1 w-full border border-blue-600 mt-2">Si</button>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { defineProps, ref} from 'vue';

const props = defineProps({
  nombre: String,
  cantidad: Number,
  color: String,
});

const nombre = ref(props.nombre);
const color = ref(props.color);
const open_edit = ref(false);
const open_delete = ref(false);
const cancel_edit = ()=>{
  nombre.value = props.nombre
  color.value = props.color
  open_edit.value = false
}
</script>
