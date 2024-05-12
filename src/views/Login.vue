<template>
    <div class="rows" role="form" aria-label="Formulário de login">
        <div class="row">
            <h2>Login</h2>
        </div>
        <div class="row">
            <label for="usuario">Usuário</label>
            <input type="text" id="usuario" name="usuario" class="input" placeholder="Usuario">
        </div>
        <div class="row">
            <label for="perfil">Senha</label>
            <input type="text" id="senha" name="senha" class="input" placeholder="Senha">
        </div>
        <div class="row">
            <button>
                Login
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

/* eslint-disable vue/multi-word-component-names */

export default defineComponent({
    name: 'Login'
});
</script>

<style scoped>
div.rows {
    padding: 2rem;
    font-size: 1rem;
    font-weight: 600;
}

div.row {
    padding: 0 0 2rem 0;
}

h2 {
    font-size: 2rem;
    font-weight: bold;
}

input {
    margin-top: 0.5rem;
    background-color: rgba(181, 202, 141, 0.3);
    border: none;
    color: #b5ca8d;
}

input::placeholder {
    color: #b5ca8d;
    font-style: italic;
}

button {
    background-color: #426b69;
    color: white;
    border-radius: 0.25rem;
    width: 10rem;
    height: 2.5rem;
}

button:hover {
    font-weight: 600;
    box-shadow: 0px 0px 5px black;
}
</style>