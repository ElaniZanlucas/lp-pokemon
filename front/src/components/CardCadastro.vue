<template>
 <v-form 
    ref="form" 
    v-model="valid"
    class="formularios" 
    @submit.prevent="submit">
    <Botao
      titulo="Voltar" 
      rota="home">
    </Botao>
    <v-container class="container1">
        <v-row>
            <v-col
            cols="12"
            >
                <v-text-field
                    id="nome1"
                    height="18"
                    v-model="name"
                    :rules="nameRules"
                    :counter="120"
                    label="Nome"
                    required
                    color="#CBE4EA"
                    dark
                    ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            >
                <v-text-field
                id="email1"
                    height="18"
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    color="#CBE4EA"
                    dark
                ></v-text-field>
            </v-col>
        </v-row>


        <v-row
        justify="center"
        aligh-content="center"
        >
                
            <v-col
            cols="12"
            align-self="center"
            >
            <v-select
            id="pokemon11"
            :items="pokemons2"
            dark
            prepend-icon="$vuetify.icons.pokebola"
            label="Pokémon 1"
            :rules="pokeRules"
            required
            >
            </v-select>
            </v-col>
        </v-row>
        <v-row
        justify="center"
        >
            <v-col
            cols="12"
            align-self="center"
            >
            <v-select
            id="pokemon12"
            :items="pokemons2"
            dark
            prepend-icon="$vuetify.icons.pokebola"
            label="Pokémon 2"
            :rules="pokeRules"
            required
            >
            </v-select>
            </v-col>
        </v-row>
        <v-row
        justify="center"
        >
            <v-col
            cols="12"
            align-self="center"
            >
            <v-select
            id="pokemon13"
            :items="pokemons2"
            dark
            prepend-icon="$vuetify.icons.pokebola"
            label="Pokémon 3"
            :rules="pokeRules"
            required
            >
            </v-select>
            </v-col>
        </v-row>
    </v-container>

    <v-container class="container1">
        <v-row>
            <v-col
            cols="12"
            >
                <v-text-field
                    id="nome2"
                    height="18"
                    v-model="name1"
                    :rules="nameRules"
                    :counter="120"
                    label="Nome"
                    required
                    color="#CBE4EA"
                    dark
                    ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            >
                <v-text-field
                    id="email2"
                    height="18"
                    v-model="email1"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    color="#CBE4EA"
                    dark
                ></v-text-field>
            </v-col>
        </v-row>


        <v-row
        justify="center"
        aligh-content="center"
        >
                
            <v-col
            cols="12"
            align-self="center"
            >
            <v-select
            id="pokemon21"
            :items="pokemons2"
            dark
            prepend-icon="$vuetify.icons.pokebola"
            label="Pokémon 1"
            :rules="pokeRules"
            required
            >
            </v-select>
            </v-col>
        </v-row>
        <v-row
        justify="center"
        >
            <v-col
            cols="12"
            align-self="center"
            >
            <v-select
            id="pokemon22"
            :items="pokemons2"
            dark
            prepend-icon="$vuetify.icons.pokebola"
            label="Pokémon 2"
            :rules="pokeRules"
            required
            >
            </v-select>
            </v-col>
        </v-row>
        <v-row
        justify="center"
        >
            <v-col
            cols="12"
            align-self="center"
            >
            <v-select
            id="pokemon23"
            :items="pokemons2"
            dark
            prepend-icon="$vuetify.icons.pokebola"
            label="Pokémon 3"
            :rules="pokeRules"
            required
            >
            </v-select>
            </v-col>
        </v-row>
    </v-container>

    <v-btn
    class="botao-cadastro"
    :disabled="!valid"
    @click="validate"
    type="submit"
    >
    <v-btn-title class="botao-cadastro-title">Salvar</v-btn-title>
    </v-btn>
</v-form> 
</template>
  
<script>
import axios from "axios";
import Botao from "./Botao.vue";

  export default {
    name: "card-cadastro",
    components: {
    Botao,
},
    data() {
        return {
            pokemons: [],
            pokemons2: [],
            valid: true,    
            name: "",
            name1: "",
            nameRules: [
                v => !!v || "Nome é necessário",
                v => v.length <= 120 || "Nome deve ter menos que 120 caracteres",
            ],
            email: "",
            email1: "",
            emailRules: [
                v => !!v || "E-mail é necessário",
                v => /.+@.+/.test(v) || "E-mail deve ser válido",
            ],
            pokeRules: [
                v => !!v || "Selecione um Pokémon",
            ],
        };
    },
   mounted() {
   axios
     .get("https://pokeapi.co/api/v2/pokemon?limit=151")
     .then((response) => {
       this.pokemons = response.data.results;
       for (var id=0;id<151;id++){
           this.pokemons2.push( this.pokemons[id].name );
     }
     });
 },
   methods: {
      validate () {
        this.$refs.form.validate()
      },
      submit(){
        console.log(
            "Submeteu pinto porra"
        )
       },
    }
}
  </script>
  
  <style>
  
    .pokebola {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.2em;
      width: 3.2em;
    }
  
    /* .card-cadastro-text {
      display: flex;
      justify-content: center;
      text-align: center;
      color: #792C28 !important;
      font-family: 'Antaro', sans-serif;
      font-weight: bold;
      font-size: 1em;
    } */
    .botao-cadastro {
      height: 6em;
      width: 2em;
      /*display: flex;*/
      background-color: #CBE4EA !important;
      /*flex-direction: column;*/
      justify-content: center;
      align-items: center;
      /*border-radius: 100px;*/
      margin: 0;
      text-transform: none;
    }

    .botao-cadastro-title {
      color: #F9F2E7;
      font-family: 'PixAntiqua', sans-serif;
      text-shadow: -1px -1px 0 #FE0000, 1px -1px 0 #FE0000, -1px 1px 0 #FE0000, 1px 1px 0 #FE0000;
      font-size: 1em;
    }

    .formularios{
        display: flex;
        justify-content:space-between;
    }
    .container1{
        background-color: #173BBC !important;
        margin: 0 60px;
        height: 27em;
      width: 20em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 33px;
      text-transform: none;
        
    } 
  /* 
    .fix-css {
      white-space: pre-wrap !important;
      background-color: green;
    } */
  </style>