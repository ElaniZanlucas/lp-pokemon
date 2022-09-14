<template>
  <div class="container"
  >
    <v-banner class="home"
    >
      A Batalha contra os MegaDeuses se inicia agora.
    </v-banner>

    <div>
      Você está pronto para entrar no ginásio e mostrar do que é capaz?
      <br>
      Então seja bem-vindo à Mega Batalha Pokémon!
    </div>
    
    <div>
      <v-card class="card">
        <v-card-title class="card-title">Cadastre-se</v-card-title>
        <v-card-text class="card-text">Embarque nessa jornada com seus amigos e descubra quem é o melhor!</v-card-text>
      </v-card>
      <v-card class="card">
        <v-card-title class="card-title">Inscritos</v-card-title>
        <v-card-text class="card-text">Veja quem possui coragem de desafiar os MegaDeuses e faça parte dos audaciosos!</v-card-text>
      </v-card>
      <v-card class="card">
        <v-card-title class="card-title">Pokédex</v-card-title>
        <v-card-text class="card-text">Encontre os seus pokémons favoritos e entre para batalhar!</v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {};// name: 'home'
</script>

<!-- tudo isso aqui de css junto com o html é ciminoso ein levando em consideração como esta o codigo -->

<style>
  .container {
    background-color: #173BBC;
    height: 100vh;
  }

  .home {
    background-color: #2F2F4D !important;
    color: #FFCC01 !important;
    text-shadow: -1px -1px 0 #2F2F4D, 1px -1px 0 #2F2F4D, -1px 1px 0 #2F2F4D, 1px 1px 0 #2F2F4D;
    font-family: 'PixAntiqua', sans-serif;
    margin-top: 4em;    
  }

  .card {
    background-color: #CBE4EA !important;
  }

  .card-title {
    color: #F9F2E7;
    font-family: 'PixAntiqua', sans-serif;
    text-shadow: -1px -1px 0 #FE0000, 1px -1px 0 #FE0000, -1px 1px 0 #FE0000, 1px 1px 0 #FE0000;
  }

  /* .card-text {
    
  } */
</style>
