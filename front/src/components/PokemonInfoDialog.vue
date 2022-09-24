<template>
  <v-dialog v-model="show" width="800">
    <v-card v-if="selected_pokemon" class="px-4">
      <v-container>
        <v-row class="d-flex align-center">
          <v-col cols="12" md="4">
            <img
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selected_pokemon.id}.png`"
              :alt="selected_pokemon.name"
              width="80%"
            />
            <img
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${selected_pokemon.id}.png`"
              :alt="selected_pokemon.name"
              width="80%"
            />
          </v-col>
          <v-col cols="12" md="8">
            <h1>{{ get_name(selected_pokemon) }}</h1>
            <PokemonType
              v-for="type in selected_pokemon.types"
              :key="type.slot"
              :type="type.type.name"
            />
          </v-col>
        </v-row>

        <h2 class="mt-4">Status</h2>

        <Stats class="mt-2" :pokemon="selected_pokemon" />
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import Stats from "./Stats.vue";
import PokemonType from "./PokemonType.vue";
import CardPokemon from "./CardPokemon.vue";

export default {
  components: {
    Stats,
    PokemonType,
    CardPokemon
  },
  props: {
    show: Boolean,
    selected_pokemon: Object,
  },
  methods: {
    get_name(pokemon) {
      return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    },
    transform_move_name(name) {
      let response = "";
      for (let part of name.split("-")) {
        response += part.charAt(0).toUpperCase() + part.slice(1) + " ";
      }
      return response;
    },
  },
  watch: {
    show() {
      this.$emit("update:show", this.show);
    },
  },
};
</script>

<style lang="scss" scoped></style>