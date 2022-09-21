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
                                height="20"
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
                                height="20"
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                                color="#CBE4EA"
                                dark
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-dialog
                    v-model="dialog"
                    width="500"
                    >
                        <template v-slot:activator="{ on, attrs }">

                                <v-btn
                                color="#CBE4EA"
                                small
                                dark
                                v-bind="attrs"
                                v-on="on"
                                >
                                Tipos
                                </v-btn>
                            
                        </template>

                        <v-card>
                            <v-card-title class="text-h5 grey lighten-2">
                            Tipos
                            </v-card-title>

                            <v-card-text>
                            aqui vão os tipos(botoes)
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                text
                                @click="dialog = false"
                            >
                                I accept
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>


                    <v-row
                    justify="center"
                    aligh-content="center"
                    >
                        <v-col
                        cols="12"
                        align-self="center"
                        >
                        <v-text-field
                            label="pokemon 1"
                            prepend-icon="$vuetify.icons.pokebola"
                            dark
                            large
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row
                    justify="center"
                    >
                        <v-col
                        cols="12"
                        align-self="center"
                        >
                        <v-text-field
                            label="pokemon 1"
                            prepend-icon="$vuetify.icons.pokebola"
                            dark
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row
                    justify="center"
                    >
                        <v-col
                        cols="12"
                        align-self="center"
                        >
                        <v-text-field
                            label="pokemon 1"
                            prepend-icon="$vuetify.icons.pokebola"
                            dark
                        ></v-text-field>
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
  export default {
    name: "card-cadastro",
    props: {
        rota: String
    },
    data() {
        return {
            dialog: false,
            valid: false,
            name: "",
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
    components: { Pokebola }
}
  </script>
  
  <style>
    .card-cadastro {
      height: 26em;
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

    .rounded-lg{
       margin: 10px;
    }
  /* 
    .fix-css {
      white-space: pre-wrap !important;
      background-color: green;
    } */
  </style>