<template>
  <v-app>
    
    <!-- <router-view/> -->
    <!-- so vai conseguir usar o router se vc botar que tal elemento tem rota kkkkkkk-->
    <LandingPage></LandingPage>    
  </v-app>
</template>

<script>
import LandingPage from './views/landing-page/index.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { LandingPage }
};
</script>
