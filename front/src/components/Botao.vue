<template>
    <div>
      <v-btn class="botao rounded-lg" :to="{name: rota}"
      elevation="2"
      rounded
      dark
      >
        <v-btn-title class="botao-title">{{titulo}}</v-btn-title>
      </v-btn>
    </div>
  </template>
  
  <script>
  export default {
    name: 'botao',
    props: {
      titulo: String,
      rota: String
    }
  }
  </script>
  
  <style>
    .botao {
      height: 6em;
      width: 2em;
      /*display: flex;*/
      background-color: #CBE4EA !important;
      /*flex-direction: column;*/
      justify-content: center;
      align-items: center;
      /*border-radius: 100px;*/
      margin: 0;
      text-transform: none;
      
    }
  
    .botao-title {
      color: #F9F2E7;
      font-family: 'PixAntiqua', sans-serif;
      text-shadow: -1px -1px 0 #FE0000, 1px -1px 0 #FE0000, -1px 1px 0 #FE0000, 1px 1px 0 #FE0000;
      font-size: 1em;
    }
  
    .botao-text {
      display: flex;
      justify-content: center;
      text-align: center;
      color: #792C28 !important;
      font-family: 'Antaro', sans-serif;
      font-weight: bold;
      font-size: 1em;
      /* background-color: greenyellow; */
    }
  /* 
    .fix-css {
      white-space: pre-wrap !important;
      background-color: green;
    } */
  </style>