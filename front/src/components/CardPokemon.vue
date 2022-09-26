<template>
  <v-card class="rounded-lg" @click="show_pokemon(get_id(pokemon))" :flat="flat">
    <v-container>
      <v-row class="mx-0 d-flex justify-center">
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${get_id(
            pokemon
          )}.png`"
          :alt="pokemon.name"
          width="80%"
        />
        <!-- <v-col cols="12" md="8">
            <h1>{{ get_name(selected_pokemon) }}</h1>
            <PokemonType
              v-for="type in selected_pokemon.types"
              :key="type.slot"
              :type="type.type.name"
            />
        </v-col> -->
      </v-row>
      <h2 class="text-center">{{ get_name(pokemon) }}</h2>
    </v-container>
  </v-card>
</template>

<script>
import PokemonType from "./PokemonType.vue"
// import Stats from "./Stats.vue"

export default {
  components: {
    PokemonType,
  },
  props: {
    pokemon: Object,
    flat: {
      type: Boolean,
      default: false,
    },
    // selected_pokemon: Object,
  },
  methods: {
    get_id(pokemon) {
      return Number(pokemon.url.split("/")[6]);
    },
    get_name(pokemon) {
      return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    },
    show_pokemon(id) {
      this.$emit("clicked", id);
    },
  },
};
</script>

<style lang="scss" scoped></style>