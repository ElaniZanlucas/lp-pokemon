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
      <v-row class="cadastro-botao-conteiner">
        <botao
          titulo="Voltar" 
          rota="home"
        ></botao>
        <botao
          titulo="Salvar" 
          rota="finalizado"
        ></botao>
      </v-row>
    </v-conteiner>
    
  </div>
</template>

<script>
  import Banner from '../../components/Banner.vue'
  import CardCadastro from '../../components/CardCadastro.vue'
  import Botao from '../../components/Botao.vue'

  export default {
    name: 'cadastro',
    components: {
    Banner,
    CardCadastro,
    Botao
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
  height: 105vh; /*88 para não ter rolamento*/
}
.card-cadastro-conteiner{
  display: flex;
  justify-content: space-around;
}

.cadastro-botao-conteiner{
  display: flex;
  justify-content:space-between;
  margin: 5em;
}

</style>