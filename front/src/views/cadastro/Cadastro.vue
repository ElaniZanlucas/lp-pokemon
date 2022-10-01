<template>
  <div class="container-cadastro">
    <audio id="battleTheme" src="../../assets/BattleTheme.mp3" loop></audio>
    <banner :titulo="bannerTitulo">
      <template v-slot:subtitulo>
        <div>Preencha os dados dos jogadores para se cadastrar</div>
      </template>
    </banner>

    <v-conteiner>
      <v-row class="card-cadastro-conteiner">
        <card-cadastro />
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
      bannerTitulo: 'Cadastro',
      dialog: false
    }
  },
  mounted() {
    this.playSound()
  },
  methods: {
    playSound() {
      var player = document.getElementById('battleTheme')
      player.play()
      player.volume = 0.1
    },
    submitItem() {
      bus.$emit('submit-item')
    }
  }
}
</script>

<style>
.container-cadastro {
  background-image: url('../../assets/grama.jpg');
  background-repeat: repeat;
  background-color: #dddddd;
  /*padding-bottom: 4.8em;*/
  /* width: 100vw; */
  height: 100%; /*88 para não ter rolamento*/
}
.card-cadastro-conteiner {
  display: flex;
  justify-content: center;
}
</style>
