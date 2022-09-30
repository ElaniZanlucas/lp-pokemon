<template>
  <div>
    <v-banner class="banner">
      {{ titulo }}
    </v-banner>

    <div class="banner-subtitle">
      <slot name="subtitulo"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    titulo: String
  }
}
</script>

<style>
.banner {
  background-color: #2f2f4d !important;
  color: #ffcc01 !important;
  height: 3.2em;
  display: flex;
  align-items: center;
  -webkit-text-stroke: 0.2px #2f2f4d;
  font-family: 'PixAntiqua', sans-serif;
  margin-top: 4em;
  text-align: center;
}

.banner-subtitle {
  color: #cbe4ea;
  -webkit-text-stroke: 0.2px #173bbc;
  font-family: 'PixAntiqua', sans-serif;
  margin: 2.4em 0;
  display: flex;
  text-align: center;
  justify-content: center;
}
</style>
