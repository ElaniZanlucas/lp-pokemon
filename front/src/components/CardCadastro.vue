<template>
    <div>
      <v-card class="card-cadastro rounded-lg">
        <v-card-text class="card-cadastro-text fix-css">
            <v-form v-model="valid">
                <v-container>
                    <v-row>
                        <v-col
                        cols="12"
                        >
                            <v-text-field
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
                        :items="pokemons2"
                        dark
                        prepend-icon="$vuetify.icons.pokebola"
                        label="Pokémon 1"
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
                        :items="pokemons2"
                        dark
                        prepend-icon="$vuetify.icons.pokebola"
                        label="Pokémon 2"
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
                        :items="pokemons2"
                        dark
                        prepend-icon="$vuetify.icons.pokebola"
                        label="Pokémon 3"
                        >
                        </v-select>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  <script>
import Pokebola from "./Pokebola.vue";
import Pokedex from "../views/pokedex/Pokedex.vue";
import axios from "axios";

  export default {
    name: "card-cadastro",
    props: {
        rota: String,
    },
    components: { Pokebola, Pokedex},
    data() {
        return {
            pokemons: [],
            pokemons2: [],
            dialog: false,
            valid: false,
            name1: "",
            nameRules: [
                v => !!v || "Name is required",
                v => v.length <= 120 || "Name must be less than 10 characters",
            ],
            email: "",
            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+/.test(v) || "E-mail must be valid",
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
}
  </script>
  
  <style>
    .card-cadastro {
      height: 27em;
      width: 20em;
      display: flex;
      background-color: #173BBC !important;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      margin: 0;
      text-transform: none;
      
    }
  
    .pokebola {
      /* background-color: aqua; */
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.2em;
      width: 3.2em;
    }
  
    .card-cadastro-text {
      display: flex;
      justify-content: center;
      /*text-align: center;*/
      color: #792C28 !important;
      font-family: 'Antaro', sans-serif;
      font-weight: bold;
      font-size: 1em;
      /* background-color: greenyellow; */
    }

    .tipos{
        text-transform: capitalize !important;
    }
  /* 
    .fix-css {
      white-space: pre-wrap !important;
      background-color: green;
    } */
  </style>