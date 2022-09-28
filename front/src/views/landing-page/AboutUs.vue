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
        <v-col>
            <card-about-us 
              megaNome="Shino"
              megaDescricao="O terror dos noobs"
              :cardPar="true"
            >
            <v-img class="rounded-lg mega-deuses" src="../../assets/megadeuses-s.png">
          </v-img>         
          </card-about-us>
          
        </v-col>
        <v-col>
          <v-img class="rounded-lg mega-deuses" src="../../assets/megadeuses-y.png"></v-img>
            <card-about-us 
              class="about-us-card"
              megaNome="Yasmin"
              megaDescricao="A garota em chamas"
              :cardPar="false"
            >
          </card-about-us>
        </v-col>
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

  .mega-deuses {
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: flex-end; */
    /* position: relative;
    top: 0;
    left: 0; */
    overflow: visible;
    margin: 0 1em;
    width: 16em;
    background-color: aqua;
  }

</style>