<template>
  <div class="container-cadastro"
  >
    <banner :titulo="bannerTitulo">
      <template v-slot:subtitulo>
        <div>
          Escolha um jogador para se cadastrar
        </div>
      </template>
    </banner>

    <v-conteiner>
      <v-row class="card-cadastro-conteiner"
      >
        <card-cadastro/>
        <card-cadastro/>
      </v-row>
    </v-conteiner>
    
  </div>
</template>

<script>
  import Banner from '../../components/Banner.vue'
  import CardCadastro from '../../components/CardCadastro.vue'

  export default {
    name: 'cadastro',
    components: {
      Banner,
      CardCadastro
    },
    data() {
      return {
        bannerTitulo: "Cadastro",
        dialog: false
      }
    }
    
  }

</script>

<style>
.container-cadastro {
  background-image: url("../../assets/grama.jpg");
  background-repeat: repeat;
  background-color: #DDDDDD;
  /*padding-bottom: 4.8em;*/
  /* width: 100vw; */
  height: 100vh; /*88 para não ter rolamento*/
}
.card-cadastro-conteiner{
  display: flex;
  justify-content: space-around;
}
</style>