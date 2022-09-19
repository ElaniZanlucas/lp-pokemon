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

    
  </div>
</template>

<script>
  import Banner from '../../components/Banner.vue'
  export default {
    name: 'depoimentos',
    components: {
      Banner
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
</style>