<template>
  <div>
    <v-card class="card-about-us rounded-lg" >
      <div class="mega-logo">
        <v-img src="../assets/mega-logo.png"></v-img>
      </div>
      <div class="mega-deuses">
        <v-card :src="{megaDeuses}"></v-card>
      </div>
      <v-card-text class="descricao">{{descricao}}</v-card-text>
      <div class="pokebolas">
        <v-img src="../assets/Pokebola.png"></v-img>
        <v-img src="../assets/Pokebola.png"></v-img>
        <v-img src="../assets/Pokebola.png"></v-img>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'card-about-us',
  props: {
    megaDeuses: String,
    descricao: String
  },
}
</script>

<style>
  .card-about-us {
    width: 24em;
    background-color: greenyellow !important;
  }

  .mega-logo {
    width: 2em;
  }

  .mega-deuses {
    width: 8em;
  }

  /* .descricao {

  } */

  .pokebolas {
    width: 8em;
  }
</style>