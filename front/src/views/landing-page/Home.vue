<template>
  <div class="container"
  >
    <banner :titulo="bannerTitulo" :subtitulo="bannerSubtitulo"/>
    
    <div class="cards">
      <card-home 
        titulo="Cadastre-se" 
        rota="cadastro" 
        texto="Embarque nessa jornada <br> com seus amigos <br> e descubra quem é o melhor!"
      />
      <card-home 
        titulo="Inscritos" 
        rota="inscritos" 
        texto="Veja quem possui coragem <br> de desafiar <br> os MegaDeuses <br> e faça parte dos audaciosos!"
      />
      <card-home 
        titulo="Pokédex" 
        rota="pokedex" 
        texto="Encontre os seus pokémons <br> favoritos <br> e entre para batalhar!"
      />
    </div>
    <depoimentos/>
  </div>
</template>

<script>
  import CardHome from '../../components/CardHome.vue'
  import Banner from '../../components/Banner.vue'
  import Depoimentos from './Depoimentos.vue'

  export default {
    name: 'home',
    components: {
      CardHome,
      Banner,
      Depoimentos
    },
    data() {
      return {
        bannerTitulo: "A Batalha contra os MegaDeuses se inicia agora.",
        bannerSubtitulo: "Você está pronto para entrar no ginásio e mostrar do que é capaz\? <br> Então seja bem-vindo à Mega Batalha Pokémon!"
      }
    }
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    /* width: 100vw; */
  }

  .container {
    background-color: #173BBC;
    padding-bottom: 4.8em;
    /* width: 100vw; */
  }

  .cards {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 4em 12em;
    /* background-color: #01ff38; */
  }

  </style>
