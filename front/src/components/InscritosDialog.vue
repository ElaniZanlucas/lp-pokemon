<template>
  <div>
    <v-dialog v-model="show" width="600">
      <div class="div-inscritos-dialog" v-if="grupo">
        <card-inscritos-dialog
          :nome="grupo.nameA"
          :email="grupo.emailA"
          :inscritosPokemon1="grupo.pokemon1A"
          :inscritosPokemon2="grupo.pokemon2A"
          :inscritosPokemon3="grupo.pokemon3A"
        >
        </card-inscritos-dialog>
        <card-inscritos-dialog
          :nome="grupo.nameB"
          :email="grupo.emailB"
          :inscritosPokemon1="grupo.pokemon1B"
          :inscritosPokemon2="grupo.pokemon2B"
          :inscritosPokemon3="grupo.pokemon3B"
        >
        </card-inscritos-dialog> 
      </div>
    </v-dialog>
  </div>
</template>

<script>
import CardInscritosDialog from './CardInscritosDialog.vue'

export default {
  name: 'inscritos-dialog',
  components: {
    CardInscritosDialog
  },
  props: {
    show: Boolean,
    grupo: Object
  },
  watch: {
    show() {
      this.$emit('update:show', this.show)
    }
  }
}
</script>

<style>
  .div-inscritos-dialog{
    display: flex;
    justify-content: space-between;
  }
</style>
