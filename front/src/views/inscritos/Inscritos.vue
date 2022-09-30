<template>
  <div>
    <audio id="walkingTheme" src="../../assets/WalkingTheme.mp3" loop></audio>
    <div v-for="grupo in grupos" :key="grupo.id">
      {{ grupo }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CardInscritosDialog from '../../components/CardInscritosDialog.vue'

export default {
  name: 'inscritos',
  components: {
    CardInscritosDialog
  },
  data() {
    return {
      grupos: []
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
    }
  },
  mounted() {
    this.playSound()
    this.buscarGrupos()
  }
}
</script>

<style></style>
