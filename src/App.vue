<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth">
      <BarraLateral />
    </div>
    <div class="column is-four-fifth">
      <CadastroUsuario />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue'
import CadastroUsuario from './components/CadastroUsuario.vue'
import Login from './components/Login.vue'

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    CadastroUsuario,
    //Login
  }
});
</script>

<style>
body {
  background: #ffffff;
  font-family: Roboto, sans-serif;
}
</style>
