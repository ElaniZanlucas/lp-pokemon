<template>
  <div>
    <v-dialog v-model="show" width="440">
      <v-card class="card-about-us rounded-lg">
        <div class="insc-img">
          <v-img src="../assets/wtpokemon.png"></v-img>
        </div>

        <v-row no-gutters class="insc-name"> Nome: {{ nome }} </v-row>

        <v-row no-gutters class="insc-email"> Email: {{ email }} </v-row>

        <v-col no-gutters class="insc-pokemons">
          <v-row class="insc-pokemon">
            <v-img class="insc-pokebola" src="../assets/Pokebola.png"></v-img>
            <p class="p-pokemon">{{ inscritosPokemon1 }}</p>
          </v-row>

          <v-row class="insc-pokemon">
            <v-img class="insc-pokebola" src="../assets/Pokebola.png"></v-img>
            <p class="p-pokemon">{{ inscritosPokemon2 }}</p>
          </v-row>

          <v-row class="insc-pokemon">
            <v-img class="insc-pokebola" src="../assets/Pokebola.png"></v-img>
            <p class="p-pokemon">{{ inscritosPokemon3 }}</p>
          </v-row>
        </v-col>
      </v-card>
    </v-dialog>
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
    inscritosPokemon3: String,
    show: Boolean
  },
  watch: {
    show() {
      this.$emit('update:show', this.show)
    }
  }
}
</script>

<style>
.card-inscritos {
  width: 18em;
  height: 25.4em;
  margin-right: 4em;
  background-color: #202792;
}

.insc-img {
  margin: 0 1em;
  width: 4em;
  background-color: #cbe4ea;
}

.insc-name {
}

.insc-email {
}

.insc-pokemons {
  display: flex;
  justify-content: space-around;
}

.insc-pokemon {
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
