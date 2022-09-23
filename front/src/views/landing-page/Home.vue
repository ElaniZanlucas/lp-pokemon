<template>
  <div class="container-home"
  >
    <banner :titulo="bannerTitulo">
      <template v-slot:subtitulo>
        <div>
          Você está pronto para entrar no ginásio e mostrar do que é capaz?
          <br>
          Então seja bem-vindo à Mega Batalha Pokémon!
        </div>
      </template>
    </banner>
     
    <div class="cards-home">
      <card-home 
        titulo="Cadastre-se" 
        rota="cadastro">
        <template v-slot:subtitulo>
          <div>
            Embarque nessa jornada 
            <br> 
            com seus amigos 
            <br>
            e descubra quem é o melhor!
          </div>
        </template> 
      </card-home>
      <card-home 
        titulo="Inscritos" 
        rota="inscritos"
        >
        <template v-slot:subtitulo>
          <div>
            Veja quem possui coragem 
            <br/>
            de desafiar
            <br>
            os MegaDeuses
            <br>
            e faça parte dos audaciosos!
          </div>
        </template>
      </card-home>
      <card-home 
        titulo="Pokédex" 
        rota="pokedex" 
      >
        <template v-slot:subtitulo>
          <div>
            Encontre os seus pokémons 
            <br> 
            favoritos 
            <br> 
            e entre para batalhar!
          </div>
        </template>
      </card-home>
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
        bannerTitulo: "A Batalha contra os MegaDeuses se inicia agora."
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
