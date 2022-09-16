<template>
  <div class="navbar">
    <v-toolbar class="toolbar">
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
          :to="{name: 'about-us'}"
        >
          Sobre nós
        </v-btn>
        <v-btn class="nav-item btn"
          plain
          href="#depoimentos"
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
    </v-toolbar>
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

  .toolbar {
    background-color: #EF4036 !important;
    height: 12vh !important;
    display: flex;
    align-items: center;

  }

  .btn {
    color: #FFCC01 !important;
    text-shadow: -1px -1px 0 #202792, 1px -1px 0 #202792, -1px 1px 0 #202792, 1px 1px 0 #202792;
    font-family: 'Pokemon Solid', sans-serif;
    text-transform: capitalize;    
  }

  .logo {
    font-size: 1.6rem !important;
    margin: 1.6em;
    /* background-color: plum; */
  }

  .nav-items {
    /* background-color: aquamarine; */
    display: flex;
    /* justify-content: flex-end; */
    margin-left: 16em;    
    

  }

  .nav-item {
    /* align-items: center; */
    /* display: flex; */
    /* background-color: purple; */
    font-size: 1rem !important;
    
  }
</style>
