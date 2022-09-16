<template>
  <div>
    <v-banner class="banner">
      {{titulo}}
    </v-banner>

    <div class="banner-subtitle">
      {{subtitulo}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    titulo: String,
    subtitulo: String
  }

}
</script>

<style>
  .banner {
      background-color: #2F2F4D !important;
      color: #FFCC01 !important;
      height: 3.2em;
      display: flex;
      align-items: center;
      text-shadow: -1px -1px 0 #2F2F4D, 1px -1px 0 #2F2F4D, -1px 1px 0 #2F2F4D, 1px 1px 0 #2F2F4D;
      font-family: 'PixAntiqua', sans-serif;
      margin-top: 4em;    
      text-align: center;
    }

  .banner-subtitle {
    color: #CBE4EA;
    text-shadow: -1px -1px 0 #173BBC, 1px -1px 0 #173BBC, -1px 1px 0 #173BBC, 1px 1px 0 #173BBC;
    font-family: 'PixAntiqua', sans-serif;
    margin: 2.4em 0;
    display: flex;
    text-align: center;
    justify-content: center;
  }
</style>