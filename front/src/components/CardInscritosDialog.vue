<template>
  <div>
    <v-card class="card-inscritos-dialog rounded-lg">
      <div class="insc-img">
        <v-img class="rounded-lg" src="../assets/wtpokemon.png"></v-img>
      </div>

      <v-row no-gutters class="insc-desc"> Nome: {{ nome }} </v-row>

      <v-row no-gutters class="insc-desc"> Email: {{ email }} </v-row>

      <v-col no-gutters class="card-insc-pokemons">
        <v-row no-gutters class="card-insc-pokemon">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-img
                v-on="on"
                class="insc-pokebola"
                src="../assets/Pokebola.png"
              ></v-img>
            </template>
            <span class="p-pokemon">{{ inscritosPokemon1 }}</span>
          </v-tooltip>
        </v-row>

        <v-row no-gutters class="card-insc-pokemon">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-img
                v-on="on"
                class="insc-pokebola"
                src="../assets/Pokebola.png"
              ></v-img>
            </template>
            <span class="p-pokemon">{{ inscritosPokemon2}}</span>
          </v-tooltip>
        </v-row>

        <v-row no-gutters class="card-insc-pokemon">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-img
                v-on="on"
                class="insc-pokebola"
                src="../assets/Pokebola.png"
              ></v-img>
            </template>
            <span class="p-pokemon">{{ inscritosPokemon3 }}</span>
          </v-tooltip>
        </v-row>

        
      </v-col>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'card-inscritos-dialog',
  props: {
    nome: String,
    email: String,
    inscritosPokemon1: String,
    inscritosPokemon2: String,
    inscritosPokemon3: String
  }
}
</script>

<style>
.card-inscritos-dialog {
  background-color: #202792 !important;
  width: 18em;
  height: 25.4em;
}

.insc-img {
  padding: 2em 2em 0 2em;
  width: 100%;
  /* background-color: #cbe4ea; */
}

.insc-desc {
  color: #f9f2e7;
  padding: 1em 2em 0 2em;
}

.card-insc-pokemons {
  margin-top: 2em;
  display: flex;
  justify-content: space-around;
}

.card-insc-pokemon {
  justify-content: center;
  align-items: center;
}

.insc-pokebola {
  max-height: 3.6em;
  max-width: 3.6em;
  transition: transform 0.5s;
}

.insc-pokebola:hover {
  transform: rotate(720deg);
  background-image: url('../assets/Pokebola.png');
  background-position: center;
  background-size: cover;
}

.p-pokemon {
}
</style>
