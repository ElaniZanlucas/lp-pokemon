<template>
  <v-card
    class="rounded-lg"
    @click="show_grupo(grupo)"
    :flat="flat"
  >
    <v-container>
      <v-row>
        <h1>Time {{grupo.id}}</h1>
      </v-row>
      <v-row>
        <v-img src="../assets/Pokebola.png"></v-img>
      </v-row>
      <v-row>
        <h1>Time {{grupo.id}}</h1>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

export default {
  name: 'card-inscritos',
  props: {
    grupo: Object,
    flat: {
      type: Boolean,
      default: false
    }
    // selected_pokemon: Object,
  },
  methods: {
    show_grupo(grupo) {
      this.$emit('clicked', grupo)
    }
  }
}
</script>

<style lang="scss" scoped></style>
