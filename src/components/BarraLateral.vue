<template>
    <header>
        <div class="rows">
            <div class="row">
                <h1>
                    <img src="../assets/logo.png" alt="Logo do projeto VigiaMente">
                    <br>
                    VigiaMente
                </h1>
            </div>
            <div class="row">
                <button @click="alterarTema">
                    {{ textoBotao }}
                </button>
            </div>
            <nav>
                <div class="row">
                    <router-link to="/">
                        <button>
                                Login
                        </button>
                    </router-link>
                </div>
                <div class="row">
                    <button>
                            Dashboard
                    </button>
                </div>
                <div class="row">
                    <button>
                            Cadastrar Twitter
                    </button>
                </div>
                <div class="row">
                    <router-link to="/cadastro">
                        <button>
                                Cadastrar Usuário
                        </button>
                    </router-link>
                </div>
                <div class="row">
                    <button>
                            Sair
                    </button>
                </div>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
    name: 'BarraLateral',
    emits: ['aoTemaAlterado'],
    data () {
        return {
            modoEscuroAtivo: false
        }
    },
    computed: {
        textoBotao () {
            if (this.modoEscuroAtivo) {
                return 'Modo Claro'
            }
            return 'Modo Escuro'
        }
    },
    methods: {
        alterarTema () {
            this.modoEscuroAtivo = !this.modoEscuroAtivo
            this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
        }
    }
})
</script>

<style scoped>
    header {
        padding: 1rem;
        background: #222e50;
        width: 100%;
        height: 100vh;
        text-align: center;
    }

    @media only screen and (max-width: 768px) {
        header {
            padding: 2.5rem;
            height: auto;
        }
    }

    h1 > img {
        width: 12rem;
    }

    h1 {
        font-size: 1.5rem;
        color: white;
        font-weight: 800;
        padding-bottom: 2rem;
    }
    
    div.rows {
        padding: 2rem;
        color: #222e50;
        font-size: 1rem;
        font-weight: 600;
    }

    div.row {
        padding: 0 0 1rem 0;
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