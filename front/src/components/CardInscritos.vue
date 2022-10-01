<template>
  <v-card
    class="card-inscritos rounded-lg"
    @click="show_grupo(grupo)"
    :flat="flat"
  >
    <v-container class="container-card-inscritos">
      <v-row class="row-time">
        <h1 class="time-inscritos">Time {{grupo.id}}</h1>
      </v-row>
      <v-row justify="center">
        <div class="img-inscritos">
        <v-img class="pokebola-inscritos" src="../assets/Pokebola.png"></v-img>
        </div>
      </v-row>
      <v-row class="row-time">
        <h1 class="time-inscritos">Time {{grupo.id}}</h1>
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

<style>
.container-card-inscritos {
  justify-content: center;
  align-items: center;
  padding: 4em 0;
}

.card-inscritos {
  width: 18em;
  height: 25.4em;
  margin-right: 4em;
  background-color: #202792 !important;
  align-content: center;
}

.time-inscritos {
  color: #FFCC01;
  -webkit-text-stroke: 0.2px #2F2F4D;
  font-family: 'Pokemon Solid', sans-serif;
  
}

.row-time {
  display: flex;
  justify-content: center;
}

.pokebola-inscritos {
  transition: transform 0.5s;
}

.pokebola-inscritos:hover {
  transform: rotate(720deg);
}

.img-inscritos {
  width: 12em;
  height: 12em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
