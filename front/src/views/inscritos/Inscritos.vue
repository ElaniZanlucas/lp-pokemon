<template>
  <div>
    <div 
    v-for="grupo in grupos"
    :key="grupo.id"
  >
    {{grupo}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'inscritos',
  data () {
    return {
      grupos: []
    }
  },
  methods: {
    buscarGrupos() {
      axios.get('http://localhost:8081/grupo').then(response => {
        this.grupos = response.data
    })
    }
  },
  mounted() {
    this.buscarGrupos()
  },  
}
</script>

<style>

</style>