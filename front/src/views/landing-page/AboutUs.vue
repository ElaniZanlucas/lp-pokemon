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
      <v-row class="cards-about-us">
        <card-about-us 
            megaNome="Shino"
            megaDeuses="megadeuses-s.png"
            megaDescricao="O terror dos noobs"
            megaPokemon1="145"
            megaPokemon2="125"
            megaPokemon3="100"
            titlePokemon1="Zapdos"
            titlePokemon2="Electabuzz"
            titlePokemon3="Voltorb"
            :cardPar="true"
          />
          
          <card-about-us 
            megaNome="Yasmin"
            megaDeuses="megadeuses-y.png"
            megaDescricao="A garota em chamas"
            megaPokemon1="5"
            megaPokemon2="77"
            megaPokemon3="136"
            titlePokemon1="Charmeleon"
            titlePokemon2="Ponyta"
            titlePokemon3="Flareon"
            :cardPar="false"
          />
      </v-row>
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

  .cards-about-us {
    margin: 8em 0 0 6.4em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
</style>