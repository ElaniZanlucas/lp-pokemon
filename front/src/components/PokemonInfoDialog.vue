<template>
  <v-dialog v-model="show" width="440">
    <v-card v-if="selected_pokemon" class="rounded-xl" height="480">
      <v-container class="dialog-container">
        <div class="dialog-pokemon">
          <v-row class="name-id">
            <h1>{{ get_name(selected_pokemon) }}</h1>
            <h2>#{{ get_id(selected_pokemon) }}</h2>
          </v-row>
          <v-row class="sprites">
            <v-col>
              <PokemonType
                v-for="type in selected_pokemon.types"
                :key="type.slot"
                :type="type.type.name"
              />
            </v-col>
            <img
                class="sprite-front"
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selected_pokemon.id}.png`"
                :alt="selected_pokemon.name"
              />
              <img
                class="sprite-back"
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${selected_pokemon.id}.png`"
                :alt="selected_pokemon.name"
                width="80%"
              />
          </v-row>
        </div>

        <v-card class="stats dialog-pokemon rounded-xl">
          <Stats :pokemon="selected_pokemon" />
        </v-card>
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
    get_id(pokemon) {
      return pokemon.id;
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

<style lang="scss" scoped>
  .dialog-container {
    padding: 0;
    background-color: green;
  }

  .dialog-pokemon {
    padding: 2em;
  }

  .name-id {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Play', sans-serif;
    color: #F5F5F6;
  }

  .sprites {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .sprite-front {
    width: 10em;
    height: 10em;
  }

  .sprite-back {
    width: 6.4em;
    height: 6.4em;
  }

  .stats {
    font-family: 'Play', sans-serif;
  }
</style>