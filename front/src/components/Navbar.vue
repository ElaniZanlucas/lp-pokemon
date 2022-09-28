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
          href="/#about-us"
        >
          Sobre nós
        </v-btn>

        <v-btn class="nav-item btn"
          plain
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
export default {
  name: 'navbar'
}
</script>

<style>
  .navbar {
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 999;
  }

  .app-bar {
    background-color: #EF4036 !important;
    height: 10vh !important;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .btn {
    color: #FFCC01 !important;
    -webkit-text-stroke: 1.2px  #202792;    
    font-family: 'Pokemon Solid', sans-serif;
    text-transform: capitalize !important;   
    font-size: 1.2em !important; 
  }

  .logo {
    font-size: 2rem !important;
    -webkit-text-stroke: 2px  #202792;    
  }

  .nav-items {
    display: flex;
    margin-left: 8em;
  }

  .nav-item {
    margin: 0 0.8em;
  }
</style>
