<template>
  <div class="navbar">
    <v-app-bar class="app-bar">
      <v-btn
        class="logo btn"
        plain
        :to="{name: 'home'}"
      >
        Equipe Megamon
      </v-btn>
      <div class="nav-items">
        <v-btn class="nav-item btn"
          plain
          
          href="#about-us"
        >
          Sobre nós
        </v-btn>

        <v-btn class="nav-item btn"
          plain
          :to="{name: 'depoimentos'}"
          href="/#depoimentos"
        >
          Depoimentos
        </v-btn>

        <v-btn class="nav-item btn"
          plain
          :to="{name: 'cadastro'}"
        >
          Cadastrar
        </v-btn>

        <v-btn class="nav-item btn"
          plain
          :to="{name: 'inscritos'}"
        >
          Inscritos
        </v-btn>

        <v-btn class="nav-item btn"
          plain
          :to="{name: 'pokedex'}"
        >
          Pokédex
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
// export default {

// }
</script>

<style>
* {
    margin: 0;
    padding: 0;
    /* font-size: calc(8px * 1.618); */
  }

  .app-bar {
    background-color: #EF4036 !important;
    height: 12vh !important;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: static;

  }

  .btn {
    color: #FFCC01 !important;
    -webkit-text-stroke-width:1.2px;
    -webkit-text-stroke-color: #202792;
    font-family: 'Pokemon Solid', sans-serif;
    text-transform: capitalize !important;   
    font-size: 1.2em !important; 
  }

  .logo {
    font-size: 2rem !important;
    margin: 1.6em;
    /* background-color: plum; */
    -webkit-text-stroke-width:2px;
    -webkit-text-stroke-color: #202792;
  }

  .nav-items {
    /* background-color: aquamarine; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 72vw;
    /* margin-left: 16em;     */
  }

  .nav-item {
    /* align-items: center; */
    /* display: flex; */
    /* justify-content: space-around !important; */
    /* background-color: purple; */
    /* font-size: 1rem !important; */
    margin: 0 1.6em;
    
  }
</style>
