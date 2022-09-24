<template>
  <div>
    <v-card class="card-about-us rounded-lg" :color="cardPar ? '#EED535' : '#FD7D24' ">
      <div class="mega-logo">
        <svg height="40" width="40">
          <circle cx="20" cy="20" r="15" :fill="cardPar ? '#FD7D24' : '#EED535' "/>
        </svg>
        <div class="mega-img">
          <v-img src="../assets/mega-logo.png"></v-img>
        </div>
      </div>

      <div class="mega-deuses">
        <v-img class="rounded-lg" src="../assets/megadeuses-s.png"></v-img>
      </div>

      <v-row no-gutters class="descricao">
        Nome: {{megaNome}}
      </v-row>

      <v-row no-gutters class="descricao">
        Descrição: {{megaDescricao}}
      </v-row>

      <v-row no-gutters class="descricao">
        Pokémons:
      </v-row>

      <v-row no-gutters class="pokebolas">
        <v-img class="pokebola" src="../assets/Pokebola.png"></v-img>
        <v-img class="pokebola" src="../assets/Pokebola.png"></v-img>
        <v-img class="pokebola" src="../assets/Pokebola.png"></v-img>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'card-about-us',
  props: {
    megaDeuses: String,
    megaDescricao: String,
    cardPar: {
      type: Boolean,
      default: true
    },
    megaNome: String,
    
  },
}
</script>

<style>
  .card-about-us {
    width: 18em;
    height: 25.4em;
    background-color: greenyellow;
  }

  .mega-logo {
    position: relative;
    display: flex;
    justify-content: flex-end;
  }

  .mega-img {
    width: 1.5em;
    position: absolute;
    top: 11px;
    right: 8px;
  }

  .mega-deuses {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14em;
    background-color: aqua;
  }

  .pokebolas {
    display: flex;
    justify-content: space-around;
  }

  .pokebola {
    max-height: 3.6em;
    max-width: 3.6em;
  }

  .descricao {
    font-family: 'PixAntiqua', sans-serif;
  }
</style>