<template>
    <Login />
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import Login from "../components/Login.vue";

/* eslint-disable vue/multi-word-component-names */

export default defineComponent({
    name: 'App',
    components: {
        Login
    }
});
</script>