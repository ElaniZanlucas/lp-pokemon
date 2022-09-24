<template>
    <div class="container-finalizado"
    >
      <banner :titulo="bannerTitulo">
        <template v-slot:subtitulo>
          <div>
            Agradecemos pela sua inscrição!
          </div>
        </template>
      </banner>
  
      <v-conteiner>
        <v-row class="finalizado-conteiner"
        >
            <botao
            titulo="Início" 
            rota="home"
            ></botao>
        </v-row>
      </v-conteiner>
      
    </div>
  </template>
  
  <script>
    import Banner from '../../components/Banner.vue'
    import Botao from '../../components/Botao.vue'
  
    export default {
      name: 'finalizado',
      components: {
      Banner,
      Botao
  },
      data() {
        return {
          bannerTitulo: "Cadastro realizado!",
          dialog: false
        }
      }
      
    }
  
  </script>
  
  <style>
  .container-finalizado {
    background-image: url("../../assets/pokereganto.jpg");
    /*background-repeat: repeat;*/
    background-color: #DDDDDD;
    background-size: 88em;
    height: 100vh; /*88 para não ter rolamento*/
  }
  .finalizado-conteiner{
    display: flex;
    justify-content: space-around;
  }
  
  </style>