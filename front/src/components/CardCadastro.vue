<template>
  <v-form
    ref="form"
    v-model="valid"
    class="formularios"
    @submit.prevent="submit"
  >
    <Botao titulo="Voltar" rota="home"> </Botao>
    <v-container class="container1">
      <v-row>
        <v-col cols="12">
          <v-text-field
            height="18"
            v-model="nameA"
            :rules="nameRules"
            :counter="120"
            label="Nome"
            required
            color="#CBE4EA"
            dark
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            height="18"
            v-model="emailA"
            :rules="emailRules"
            label="E-mail"
            required
            color="#CBE4EA"
            dark
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center" aligh-content="center">
        <v-col cols="12" align-self="center">
          <v-select
            v-model="pokemon1A"
            :items="pokemons"
            dark
            prepend-icon="$vuetify.icons.pokebola"
            label="Pokémon 1"
            :rules="pokeRules"
            required
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" align-self="center">
          <v-select
            v-model="pokemon2A"
            :items="pokemons"
            dark
            prepend-icon="$vuetify.icons.pokebola"
            label="Pokémon 2"
            :rules="pokeRules"
            required
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" align-self="center">
          <v-select
            v-model="pokemon3A"
            :items="pokemons"
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
        <v-col cols="12">
          <v-text-field
            height="18"
            v-model="nameB"
            :rules="nameRules"
            :counter="120"
            label="Nome"
            required
            color="#CBE4EA"
            dark
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            height="18"
            v-model="emailB"
            :rules="emailRules"
            label="E-mail"
            required
            color="#CBE4EA"
            dark
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center" aligh-content="center">
        <v-col cols="12" align-self="center">
          <v-select
            v-model="pokemon1B"
            :items="pokemons"
            dark
            prepend-icon="$vuetify.icons.pokebola"
            label="Pokémon 1"
            :rules="pokeRules"
            required
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" align-self="center">
          <v-select
            v-model="pokemon2B"
            :items="pokemons"
            dark
            prepend-icon="$vuetify.icons.pokebola"
            label="Pokémon 2"
            :rules="pokeRules"
            required
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" align-self="center">
          <v-select
            v-model="pokemon3B"
            :items="pokemons"
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
import axios from 'axios'
import Botao from './Botao.vue'

export default {
  name: 'card-cadastro',
  components: {
    Botao
  },
  data() {
    return {
      pokemons: [],
      valid: true,
      nameA: '',
      nameB: '',
      nameRules: [
        v => !!v || 'Nome é necessário',
        v => v.length <= 120 || 'Nome deve ter menos que 120 caracteres'
      ],
      emailA: '',
      emailB: '',
      emailRules: [
        v => !!v || 'E-mail é necessário',
        v => /.+@.+/.test(v) || 'E-mail deve ser válido'
      ],
      pokemon1A: '',
      pokemon2A: '',
      pokemon3A: '',
      pokemon1B: '',
      pokemon2B: '',
      pokemon3B: '',
      pokeRules: [v => !!v || 'Selecione um Pokémon']
    }
  },
  mounted() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => {
      let pokemonsList = response.data.results
      for (var id = 0; id < 151; id++) {
        this.pokemons.push(pokemonsList[id].name)
      }
    })
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    submit() {
      const grupo = {
        nameA: this.nameA,
        emailA: this.emailA,
        pokemon1A: this.pokemon1A,
        pokemon2A: this.pokemon2A,
        pokemon3A: this.pokemon3A,
        nameB: this.nameB,
        emailB: this.emailB,
        pokemon1B: this.pokemon1B,
        pokemon2B: this.pokemon2B,
        pokemon3B: this.pokemon3B
      }
      console.log('PASSEI AQUI')
      try {
        axios.post('http://localhost:8081/grupo', grupo)
        this.$router.push({ name: 'finalizado' })
      } catch (error) {
        console.log('Erro ao ser um Treinador Pokémon')
      }
    }
  }
}
</script>

<style>
/* .pokebola {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.2em;
      width: 3.2em;
    } */

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
  background-color: #cbe4ea !important;
  /*flex-direction: column;*/
  justify-content: center;
  align-items: center;
  /*border-radius: 100px;*/
  margin: 0;
  text-transform: none;
}

.botao-cadastro-title {
  color: #f9f2e7;
  font-family: 'PixAntiqua', sans-serif;
  text-shadow: -1px -1px 0 #fe0000, 1px -1px 0 #fe0000, -1px 1px 0 #fe0000,
    1px 1px 0 #fe0000;
  font-size: 1em;
}

.formularios {
  display: flex;
  justify-content: space-between;
}
.container1 {
  background-color: #173bbc !important;
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
