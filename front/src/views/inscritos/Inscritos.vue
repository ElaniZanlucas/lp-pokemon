<template>
  <div class="container-inscritos">
    <audio id="walkingTheme" src="../../assets/WalkingTheme.mp3" loop></audio>

    <banner titulo="Inscritos">
    </banner>

    <div class="lista-card-inscritos">
      <div class="for-inscritos" v-for="grupo in grupos" :key="grupo.id">
        <card-inscritos :grupo="grupo" @clicked="show_grupo"> </card-inscritos>
      </div>
    </div>

    <inscritos-dialog :show.sync="show_dialog" :grupo="selected_grupo">
    </inscritos-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import Banner from '../../components/Banner.vue'
import InscritosDialog from '../../components/InscritosDialog.vue'
import CardInscritos from '../../components/CardInscritos.vue'

export default {
  name: 'inscritos',
  components: {
    Banner,
    InscritosDialog,
    CardInscritos
  },
  data() {
    return {
      grupos: [],
      show_dialog: false,
      selected_grupo: null
    }
  },
  methods: {
    buscarGrupos() {
      axios.get('http://localhost:8081/grupo').then(response => {
        this.grupos = response.data
      })
    },
    playSound() {
      var player = document.getElementById('walkingTheme')
      player.play()
      player.volume = 0.2
    },
    show_grupo(grupo) {
      this.selected_grupo = grupo
      this.show_dialog = !this.show_dialog
    }
  },
  mounted() {
    this.playSound()
    this.buscarGrupos()
  }
}
</script>

<style>
  .container-inscritos {
    background-color: #DDDDDD;
  }

  .lista-card-inscritos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

.for-inscritos {
  margin: 2em 0;
}

</style>
