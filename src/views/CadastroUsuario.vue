<template>
    <CadastroUsuario />
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import CadastroUsuario from "../components/CadastroUsuario.vue";

/* eslint-disable vue/multi-word-component-names */

export default defineComponent({
    name: 'App',
    components: {
        CadastroUsuario
    }
});
</script>