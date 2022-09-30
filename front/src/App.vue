<template>
  <v-app>
    <navbar />
    <router-view class="pages" />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar },
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/pokemon-solid');
@import url('http://fonts.cdnfonts.com/css/pixantiqua');
@import url('http://fonts.cdnfonts.com/css/antaro');
@import url('http://fonts.cdnfonts.com/css/play');

* {
  margin: 0;
  padding: 0;
}

.pages {
  padding-top: 6.4em;
}
</style>
