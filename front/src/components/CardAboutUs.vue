<template>
  <div>
    <v-card
      class="card-about-us rounded-lg"
      :color="cardPar ? '#EED535' : '#FD7D24'"
    >
      <div class="mega-logo">
        <svg height="40" width="40">
          <circle
            cx="20"
            cy="20"
            r="15"
            :fill="cardPar ? '#FD7D24' : '#EED535'"
          />
        </svg>

        <div class="mega-img">
          <a href="https://www.megajunior.com.br/" target="_blank">
            <v-img src="../assets/mega-logo.png"></v-img>
          </a>
        </div>
      </div>

      <div class="mega-deuses">
        <v-img
          class="rounded-lg"
          :src="require(`../assets/${megaDeuses}`)"
        ></v-img>
      </div>

      <v-row no-gutters class="descricao"> Nome: {{ megaNome }} </v-row>

      <v-row no-gutters class="descricao">
        Descrição: {{ megaDescricao }}
      </v-row>

      <v-row no-gutters class="descricao"> Pokémons: </v-row>

      <v-row no-gutters class="ab-pokebolas">
        <v-img
          class="ab-pokebola"
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${megaPokemon1}.png`"
          :title="`${titlePokemon1}`"
        ></v-img>
        <v-img
          class="ab-pokebola"
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${megaPokemon2}.png`"
          :title="`${titlePokemon2}`"
        ></v-img>
        <v-img
          class="ab-pokebola"
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${megaPokemon3}.png`"
          :title="`${titlePokemon3}`"
        ></v-img>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'card-about-us',
  props: {
    megaNome: String,
    megaDeuses: String,
    megaDescricao: String,
    megaPokemon1: String,
    megaPokemon2: String,
    megaPokemon3: String,
    titlePokemon1: String,
    titlePokemon2: String,
    titlePokemon3: String,
    cardPar: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
.card-about-us {
  width: 18em;
  height: 25.4em;
  margin-right: 4em;
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
  transition: transform 0.5s;
}

.mega-img:hover {
  transform: rotate(720deg);
}

.mega-deuses {
  margin: 0 1em;
  width: 16em;
}

.descricao {
  font-family: 'PixAntiqua', sans-serif;
  color: #2f2f4d;
  -webkit-text-stroke: 0.1px #f9f2e7;
  padding: 0.4em 1em;
}

.ab-pokebolas {
  display: flex;
  justify-content: space-around;
}

.ab-pokebola {
  max-height: 3.6em;
  max-width: 3.6em;
  transition: transform 0.5s;
}

.ab-pokebola:hover {
  transform: rotate(720deg);
  background-image: url('../assets/Pokebola.png');
  background-position: center;
  background-size: cover;
}
</style>
