<template>
  <div class="container-home"
  >
    <banner :titulo="bannerTitulo" :subtitulo="bannerSubtitulo"/>
    
    <div class="cards-home">
      <card-home 
        titulo="Cadastre-se" 
        rota="cadastro" 
        texto="Embarque nessa jornada <br> com seus amigos <br> e descubra quem é o melhor!"
      />
      <card-home 
        titulo="Inscritos" 
        rota="inscritos" 
        texto="Veja quem possui coragem <br/> de desafiar <br> os MegaDeuses <br> e faça parte dos audaciosos!"
      />
      <card-home 
        titulo="Pokédex" 
        rota="pokedex" 
        texto="Encontre os seus pokémons <br> favoritos <br> e entre para batalhar!"
      />
    </div>
    <about-us/>
    <depoimentos/>
  </div>
</template>

<script>
  import Banner from '../../components/Banner.vue'
  import CardHome from '../../components/CardHome.vue'
  import Depoimentos from './Depoimentos.vue'
  import AboutUs from './AboutUs.vue'

  export default {
    name: 'home',
    components: {
      CardHome,
      Banner,
      Depoimentos,
      AboutUs
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

  .container-home {
    background-color: #173BBC;
    padding-bottom: 4.8em;
    /* width: 100vw; */
  }

  .cards-home {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 4em 12em;
    /* background-color: #01ff38; */
  }

  </style>
