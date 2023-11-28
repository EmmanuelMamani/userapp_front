<template>
  <div class="w-5/6 mx-auto mt-3 flex justify-end">
    <el-button type="primary" @click="dialogCrear = true"  plain>Crear</el-button>
  </div>

    <el-dialog v-model="dialogCrear" title="Registrar Usuario">
    <el-form :model="form">
      <el-form-item label="User Name" :label-width="100">
        <el-input v-model="form.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Password" :label-width="100">
        <el-input v-model="form.password" autocomplete="off" type="password" show-password />
      </el-form-item>
      <el-form-item label="Email" :label-width="100">
        <el-input v-model="form.email" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Nombre" :label-width="100">
        <el-input v-model="form.first_name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Apellido" :label-width="100">
        <el-input v-model="form.last_name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Edad" :label-width="100">
        <el-input-number v-model="form.age" autocomplete="off" :min="1" :max="100" />
      </el-form-item>
      <el-form-item label="F. Nacimiento" :label-width="100">
        <el-date-picker
        v-model="form.birth_day"
        type="date"
        placeholder="Escoger fecha"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        :size="size"
      />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogCrear = false">Cancel</el-button>
        <el-button type="primary" @click="registrarUsuario" plain>
          Registrar
        </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model="dialogEditar" title="Editar Usuario">
    <el-form :model="formEditar">
      <el-form-item label="User Name" :label-width="100">
        <el-input v-model="formEditar.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Password" :label-width="100">
        <el-input v-model="formEditar.password" autocomplete="off" type="password" show-password />
      </el-form-item>
      <el-form-item label="Email" :label-width="100">
        <el-input v-model="formEditar.email" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Nombre" :label-width="100">
        <el-input v-model="formEditar.first_name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Apellido" :label-width="100">
        <el-input v-model="formEditar.last_name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Edad" :label-width="100">
        <el-input-number v-model="formEditar.age" autocomplete="off" :min="1" :max="100" />
      </el-form-item>
      <el-form-item label="F. Nacimiento" :label-width="100">
        <el-date-picker
        v-model="formEditar.birth_day"
        type="date"
        placeholder="Escoger fecha"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        :size="size"
      />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cerrarDialogoEditar">Cancel</el-button>
        <el-button type="primary" @click="actualizarUsuario" plain>
          Actualizar
        </el-button>
      </span>
    </template>
  </el-dialog>

  <el-table :data="users" border class="w-5/6 mx-auto mt-3">
    <el-table-column prop="username" label="Username"/>
    <el-table-column prop="email" label="Email" />
    <el-table-column prop="first_name" label="Nombre" />
    <el-table-column prop="last_name" label="Apellido" />
    <el-table-column prop="age" label="Edad" />
    <el-table-column prop="birth_day" label="Nacimiento" />
    <el-table-column label="Acciones">
      <template #default="{ row }">
        <div class="flex">
          <el-button type="danger" @click="deleteUser(row.user_id)" plain>Eliminar</el-button>
          <el-button type="warning" plain @click="editarUsuario(row)">Editar</el-button>
        </div>
      </template>
    </el-table-column>

  </el-table>
</template>

<script setup>
import axios from 'axios';
import {reactive, ref, onMounted } from 'vue';

const users = ref([]);
const dialogCrear = ref(false)
const dialogEditar = ref(false)
const form = reactive({
  username: '',
  password: '',
  email: '',
  first_name: '',
  last_name: '',
  age: '',
  birth_day: ''
})
const formEditar = reactive({
  user_id:'',
  username: '',
  password: '',
  email: '',
  first_name: '',
  last_name: '',
  age: '',
  birth_day: ''
})
const editarUsuario = (row) => {
  // Copiar los valores de la fila al formulario de edición
  Object.assign(formEditar, row);
  // Abrir el diálogo de edición
  dialogEditar.value = true;
};
// Función para cerrar el diálogo de edición
const cerrarDialogoEditar = () => {
  // Limpiar el formulario de edición
  limpiarFormularioEditar();
  // Cerrar el diálogo de edición
  dialogEditar.value = false;
};

// Función para limpiar el formulario de edición
const limpiarFormularioEditar = () => {
  // Reiniciar los valores del formulario de edición
  Object.keys(formEditar).forEach(key => {
    formEditar[key] = '';
  });
};
const registrarUsuario = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/v1/users', form);
    console.log('Usuario creado:', response.data);
    // Cerrar el diálogo después de registrar el usuario
    dialogCrear.value = false;
    // Actualizar la lista de usuarios después de crear uno nuevo
    await fetchUsers();
    // Limpiar el formulario después de registrar el usuario
    limpiarFormulario();
  } catch (error) {
    console.error('Error al registrar usuario:', error);
  }
};
const actualizarUsuario = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/v1/users', formEditar);
    console.log('Usuario creado:', response.data);
    // Cerrar el diálogo después de registrar el usuario
    dialogEditar.value = false;
    // Actualizar la lista de usuarios después de crear uno nuevo
    await fetchUsers();
    // Limpiar el formulario después de registrar el usuario
    limpiarFormularioEditar();
  } catch (error) {
    console.error('Error al registrar usuario:', error);
  }
};
const limpiarFormulario = () => {
  // Reiniciar los valores del formulario
  Object.keys(form).forEach(key => {
    form[key] = '';
  });
};
const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/users');
    users.value = response.data; // Suponiendo que la respuesta es un array de usuarios
  } catch (error) {
    console.error('Error al recuperar usuarios:', error);
  }
};
const deleteUser = async (userId) => {
  try {
    await axios.delete(`http://localhost:8080/api/v1/users/${userId}`);
    // Actualizar la lista de usuarios después de eliminar uno
    await fetchUsers();
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
  }
};
onMounted(fetchUsers);

// Puedes imprimir información aquí, pero asegúrate de hacerlo dentro del setup
console.log(users);
</script>

<style scoped>
/* Estilos CSS */
</style>
