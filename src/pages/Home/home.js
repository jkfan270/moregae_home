import {
    createApp
} from 'vue';
import App from './Home.vue';
import router from '../../router';
//import store from '../../store';

createApp(App).use(router).mount('#app');