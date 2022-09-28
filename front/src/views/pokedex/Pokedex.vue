<template>
  <v-app>
    <banner :titulo="bannerTitulo">
      <template v-slot:subtitulo>
        <div>
          Pesquise os Pokémons, veja suas forças e 
          <br>
          escolha-os para a MegaBatalha.
        </div>
      </template>
    </banner>
    <v-container>
      <v-container>
        <v-text-field
          v-model="search"
          label="Pesquisar"
          placeholder="Psyduck"
          solo
        >
        </v-text-field>
        
        <v-row>
          <v-col
            cols="6"
            md="2"
            v-for="pokemon in filtered_pokemons"
            :key="pokemon.name"
          >
            <PokemonCard :pokemon="pokemon" @clicked="show_pokemon" />
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <PokemonInfoDialog
      :show.sync="show_dialog"
      :selected_pokemon="selected_pokemon"
    />
  </v-app>
</template>

<script>
import axios from "axios";
import Banner from "../../components/Banner.vue"
import PokemonCard from "../../components/CardPokemon.vue";
import PokemonInfoDialog from "../../components/PokemonInfoDialog.vue";

export default {
  name: "App",

  components: {
    Banner,
    PokemonCard,
    PokemonInfoDialog,
  },

  data() {
    return {
      pokemons: [],
      search: "",
      show_dialog: false,
      selected_pokemon: null,
      bannerTitulo: "Pokédex",
    };
  },

  mounted() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        this.pokemons = response.data.results;
      });
  },
  methods: {
    show_pokemon(id) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
        this.selected_pokemon = response.data;
        this.show_dialog = !this.show_dialog;
      });
    },
    get_move_level(move) {
      for (let version of move.version_group_details) {
        if (
          version.version_group.name == "sword-shield" &&
          version.move_learn_method.name == "level-up"
        ) {
          return version.level_learned_at;
        }
      }
      return 0;
    },
  },
  computed: {
    filtered_pokemons() {
      return this.pokemons.filter((item) => {
        return item.name.includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style>
#app {
  background: #173BBC;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover !important;
  background-position: center;
  min-height: 100vh;
}
</style>