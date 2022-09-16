<template>
  <div>
    <v-card class="card-home" :to="{name: rota}">
      <v-card-title class="card-home-title">{{titulo}}</v-card-title>
      <div class="pokebola">
        <v-img src="../assets/Pokebola.png"></v-img>
      </div>
      <v-card-text class="card-home-text">
        {{texto}}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'card-home',
  props: {
    titulo: String,
    rota: String,
    texto: String
  }
}
</script>

<style>
  .card-home {
    height: 22em;
    width: 16em;
    display: flex;
    background-color: #CBE4EA !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 0;
    text-transform: none;
    
  }

  .card-home-title {
    color: #F9F2E7;
    font-family: 'PixAntiqua', sans-serif;
    text-shadow: -1px -1px 0 #FE0000, 1px -1px 0 #FE0000, -1px 1px 0 #FE0000, 1px 1px 0 #FE0000;
    font-size: 1.6em;
  }

  .pokebola {
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6.4em;
    width: 6.4em;
  }

  .card-home-text {
    display: flex;
    justify-content: center;
    text-align: center;
    color: #792C28 !important;
    font-family: 'Antaro', sans-serif;
    font-weight: bold;
    /* background-color: greenyellow; */
  }
</style>