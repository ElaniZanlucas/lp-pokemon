<template>
  <div id="depoimentos" class="container-depoimentos">
    <banner :titulo="bannerTitulo">
      <template v-slot:subtitulo>
        <div>
          Quer saber como é ser nosso adversário?
          <br>
          Veja alguns relatos!
        </div>
      </template>
    </banner>

    <v-row class="row-depoimentos">
      <div class="cards-depoimentos">
        <v-col cols="12" md="4">
          <card-depoimentos 
            nome="Ash Ketchum"
          >
            <template v-slot:descricao>
              <div>
                Saí chorando. Estou fazendo terapia até hoje...
              </div>
            </template> 
          </card-depoimentos>

          <card-depoimentos 
            nome="Tiago Lacerda"
          >
            <template v-slot:descricao>
              <div>
                Só tenho Pokémon bosta, menos o kabuto. 
                <br>
                O kabuto é legal.
              </div>
            </template> 
          </card-depoimentos>

          <card-depoimentos 
            nome="Menino Ney"
          >
            <template v-slot:descricao>
              <div>
                Tropecei na pokebola e caí. 
              </div>
            </template> 
          </card-depoimentos>
        </v-col>

        <v-col cols="12" md="4">
          <card-depoimentos 
            nome="Pitaya"
          >
            <template v-slot:descricao>
              <div>
                Carregaram o time só com o Pikachu.
                <br>
                Fiquei em choque!
              </div>
            </template> 
          </card-depoimentos>
          
          <card-depoimentos 
            nome="Guy Sensei"
          >
            <template v-slot:descricao>
              <div>
                Fugiram da revanche.
              </div>
            </template> 
          </card-depoimentos>

          <card-depoimentos 
            nome="Inosuke Hashibira"
          >
            <template v-slot:descricao>
              <div>
                A Batalha mostrou que eles ganharam, 
                <br>
                mas eu diria que foi um empate.
              </div>
            </template> 
          </card-depoimentos>
        </v-col>

        <v-col cols="12" md="4">
          <card-depoimentos 
            nome="Satoshi Tajiri"
          >
            <template v-slot:descricao>
              <div>
                Shino tava ligado no 220V, Yasmin tava com fogo
                <br>
                nos olhos e eu tava com medo...
              </div>
            </template> 
          </card-depoimentos>

          <card-depoimentos 
            nome="Doom Guy"
          >
            <template v-slot:descricao>
              <div>
                The only thing I fear is Shino.
              </div>
            </template> 
          </card-depoimentos>

          <card-depoimentos 
            nome="Vergil"
          >
            <template v-slot:descricao>
              <div>
                Shino is the storm that it's approaching...
              </div>
            </template> 
          </card-depoimentos>
        </v-col>
      </div>
    </v-row>
  </div>
</template>

<script>
  import Banner from "../../components/Banner.vue"
  import CardDepoimentos from "../../components/CardDepoimentos.vue"

  export default {
    name: 'depoimentos',
    components: {
      Banner,
      CardDepoimentos
    },
    data() {
      return {
        bannerTitulo: "Depoimentos"
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
   
  }

  .container-depoimentos {
    background-color: #173BBC;
    padding-bottom: 4.8em;
   
  }

  .row-depoimentos {
    display: flex;
    justify-content: center;
  }

  .cards-depoimentos {
    display: flex;
    /* background-color: blueviolet; */
  }

</style>