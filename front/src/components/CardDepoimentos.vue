<template>
  <div>
    <v-card class="card-depoimentos rounded-xl">
      <v-row no-gutters>
        <!-- <v-col> -->
          <div class="dep-init">
            <div class="dep-img">
              <v-img src="../assets/Pokebola.png"></v-img>
            </div>
            <v-card-title class="dep-nome">
              {{nome}}
            </v-card-title>
          </div>
        <!-- </v-col> -->
        <!-- <v-col> -->
          <v-card-text class="dep-descricao">
            Descrição:
          </v-card-text>
          <v-card-text class="dep-descricao">
            <slot name="descricao">
              {{descricao}}
            </slot>
          </v-card-text>
        <!-- </v-col> -->
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'card-depoimentos',
  props: {
    nome: String,
    descricao: String,
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

  .card-depoimentos {
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    background: #CBE4EA !important;
    width: 24em;
    height: 13.62em;
    /* margin: 4em; */
    padding: 1.6em;
    padding-left: 2.4em;
    margin-bottom: 2.4em;
  }

  .dep-init {
    display: flex;
    width: 14em;
    justify-content: space-between;
    align-items: center;
    /* background-color: red; */
    /* margin: 0.8em; */
  }

  .dep-img {
    width: 4em;
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2F2F4D;
    border-radius: 32px;
    /* border-width: 10em !important; */
  }

  .dep-nome {
    color: #58585A;
    font-family: 'PixAntiqua', sans-serif;
    font-size: 0.8em;
  }

  .dep-descricao {
    color: #58585A;
    font-family: 'PixAntiqua', sans-serif;
    font-size: 0.8em;
    display: flex;
    padding: 0;
    justify-content: flex-start;
    /* background-color: red; */
    align-items: center;
  }
</style>