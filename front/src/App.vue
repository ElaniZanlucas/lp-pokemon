<template>
  <v-app>
    <navbar/>
    <router-view/>
    
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  @import url('http://fonts.cdnfonts.com/css/pokemon-solid');
  @import url('https://www.urbanfonts.com/fonts/PixAntiqua.font');
  @import url('https://www.urbanfonts.com/fonts/Antaro_Font.font');
  @import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');
</style>
                
