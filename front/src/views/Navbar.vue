<template>
  <div>
    <v-toolbar class="toolbar">
      <v-btn
        class="btn"
        plain
        :to="{name: 'home'}"
      >
        Equipe Megamon
      </v-btn>
      <div class="nav-items">
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
  }

  .toolbar {
    background-color: #EF4036 !important;
  }

  .btn {
    color: #FFCC01 !important;
    text-shadow: -1px -1px 0 #202792, 1px -1px 0 #202792, -1px 1px 0 #202792, 1px 1px 0 #202792;
    font-family: 'Pokemon Solid', sans-serif;
    text-transform: capitalize;
  }

  /* .nav-items {

  }

  .nav-item {

  } */
</style>
