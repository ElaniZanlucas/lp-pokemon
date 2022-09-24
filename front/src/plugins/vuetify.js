import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Pokebola from '../components/Pokebola'

Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        values:{
            pokebola:{
                component:Pokebola,
            }
        }
    }
});
