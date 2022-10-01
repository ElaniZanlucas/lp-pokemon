<template>
  <div>
    <audio id="walkingTheme" src="../../assets/WalkingTheme.mp3" loop></audio>
    <div v-for="grupo in grupos" :key="grupo.id">
      <card-inscritos :grupo="grupo" @clicked="show_grupo"> </card-inscritos>
    </div>

    <inscritos-dialog :show.sync="show_dialog" :grupo="selected_grupo">
    </inscritos-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import InscritosDialog from '../../components/InscritosDialog.vue'
import CardInscritos from '../../components/CardInscritos.vue'

export default {
  name: 'inscritos',
  components: {
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

<style></style>
