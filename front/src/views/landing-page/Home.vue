<template>
  <div class="container"
  >
    <v-banner class="banner"
    >
      A Batalha contra os MegaDeuses se inicia agora.
    </v-banner>

    <div class="subtitle">
      Você está pronto para entrar no ginásio e mostrar do que é capaz?
      <br>
      Então seja bem-vindo à Mega Batalha Pokémon!
    </div>
    
    <div class="cards">
      <v-btn class="btn-card card" :to="{name: 'cadastro'}">
        <div class="card">
          <v-card-title class="card-title">Cadastre-se</v-card-title>
          <v-card-text class="card-text">
            Embarque nessa jornada <br>
            com seus amigos <br>
            e descubra quem é o melhor!
          </v-card-text>
        </div>
      </v-btn>
      <v-btn class="btn-card card" :to="{name: 'inscritos'}">
        <div class="card">
          <v-card-title class="card-title">Inscritos</v-card-title>
          <v-card-text class="card-text">
            Veja quem possui coragem <br>
            de desafiar <br>
            os MegaDeuses <br>
            e faça parte dos audaciosos!
          </v-card-text>
        </div>
      </v-btn>
      <v-btn class="btn-card card" :to="{name: 'pokedex'}">
        <div class="card">
          <v-card-title class="card-title">Pokédex</v-card-title>
          <v-card-text class="card-text">
            Encontre os seus pokémons <br>
            favoritos <br>
            e entre para batalhar!
          </v-card-text>
        </div>
      </v-btn>
    </div>
  </div>
</template>

<script>
  name: 'home'
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    /* width: 100vw; */
  }

  .container {
    background-color: #173BBC;
    height: 100vh;
    /* width: 100vw; */
  }

  .banner {
    background-color: #2F2F4D !important;
    color: #FFCC01 !important;
    height: 3.2em;
    display: flex;
    align-items: center;
    text-shadow: -1px -1px 0 #2F2F4D, 1px -1px 0 #2F2F4D, -1px 1px 0 #2F2F4D, 1px 1px 0 #2F2F4D;
    font-family: 'PixAntiqua', sans-serif;
    margin-top: 4em;    
    text-align: center;
  }

  .subtitle {
    color: #CBE4EA;
    text-shadow: -1px -1px 0 #173BBC, 1px -1px 0 #173BBC, -1px 1px 0 #173BBC, 1px 1px 0 #173BBC;
    font-family: 'PixAntiqua', sans-serif;
    margin: 2.4em 0;
    display: flex;
    text-align: center;
    justify-content: center;
  }

  .cards {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 4em 12em;
    /* background-color: #01ff38; */
  }

  .btn-card {
    text-transform: none;
  }

  .card {
    height: 22em;
    width: 16em;
    display: flex;
    background-color: #CBE4EA;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 8em 0;
    
  }


  .card-title {
    color: #F9F2E7;
    font-family: 'PixAntiqua', sans-serif;
    text-shadow: -1px -1px 0 #FE0000, 1px -1px 0 #FE0000, -1px 1px 0 #FE0000, 1px 1px 0 #FE0000;
  }

  .card-text {
    display: flex;
    justify-content: center;
    text-align: center;
    color: #792C28;
    font-family: 'Antaro', sans-serif;
    font-weight: bold;
    /* background-color: greenyellow; */
  }
</style>
