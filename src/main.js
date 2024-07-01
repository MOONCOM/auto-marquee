import { createApp } from 'vue'
import Demo from './Demo.vue'
import AutoMarquee from "../dist/auto-marquee.js";

const app = createApp(Demo);
app.component('auto-marquee', AutoMarquee);
app.mount('#app');
