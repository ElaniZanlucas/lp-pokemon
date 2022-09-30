<template>
  <v-card
    class="rounded-lg"
    @click="show_pokemon(get_id(pokemon))"
    :flat="flat"
  >
    <v-container>
      <v-row class="mx-0 d-flex justify-center">
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${get_id(
            pokemon
          )}.png`"
          :alt="pokemon.name"
          width="80%"
        />
      </v-row>
      <h2 class="text-center">{{ get_name(pokemon) }}</h2>
    </v-container>
  </v-card>
</template>

<script>
import PokemonType from './PokemonType.vue'

export default {
  name: 'card-pokemon',
  components: {
    PokemonType
  },
  props: {
    pokemon: Object,
    flat: {
      type: Boolean,
      default: false
    }
    // selected_pokemon: Object,
  },
  methods: {
    get_id(pokemon) {
      return Number(pokemon.url.split('/')[6])
    },
    get_name(pokemon) {
      return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    },
    show_pokemon(id) {
      this.$emit('clicked', id)
    }
  }
}
</script>

<style lang="scss" scoped></style>
