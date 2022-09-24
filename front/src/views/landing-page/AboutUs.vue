<template>
  <div id="about-us" class="container-about-us">
    <banner :titulo="bannerTitulo">
      <template v-slot:subtitulo>
        <div>
          Procuramos os mestres pokémons mais ousados para serem nossos oponentes
          <br>
          e batalharem contra nós. Se você acha que pode nos derrotar, então inscreva-se 
          <br>
          e que vença o melhor! Só não saia chorando depois....
        </div>
      </template>
    </banner>

    <v-img src="../../assets/wtpokemon.png">
      <div class="cards-about-us">
        <card-about-us 
          megaDeuses="../assets/megadeuses-s.png"
          descricao="bla"
          :cardPar="true"
        />
      </div>
    </v-img>
    
  </div>
</template>

<script>
  import Banner from '../../components/Banner.vue'
  import CardAboutUs from '../../components/CardAboutUs.vue'
export default {
  name: 'about-us',
  components: {
      Banner,
      CardAboutUs
    },
    data() {
      return {
        bannerTitulo: "Quem são os MegaDeuses \?"
      }
    }
}
</script>
  
<style>
  .container-about-us {
    background-color: #173BBC;
    padding-bottom: 4.8em;
  }
</style>