<template>
    <div class="rows" role="form" aria-label="Formulário de cadastro de usuário">
        <div class="row">
            <h2>Cadastrar Usuário</h2>
        </div>
        <div class="row">
            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome" class="input" placeholder="Nome">
        </div>
        <div class="row">
            <label for="perfil">Perfil</label>
            <input type="text" id="perfil" name="perfil" class="input" placeholder="Perfil">
        </div>
        <div class="row">
            <label for="login">Login</label>
            <input type="text" id="login" name="login" class="input" placeholder="Login">
        </div>
        <div class="row">
            <label for="email">E-mail</label>
            <input type="text" id="email" name="email" class="input" placeholder="E-mail">
        </div>
        <div class="row">
            <button>
                Cadastrar Usuário
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
    name: 'CadastroUsuario'
})
</script>

<style scoped>
div.rows {
    padding: 2rem;
    color: #222e50;
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
    font: 0.875rem;
    border-radius: 0.25rem;
    width: 10rem;
    height: 2.5rem;
}

button:hover {
    font-weight: 600;
    box-shadow: 0px 0px 5px black;
}
</style>