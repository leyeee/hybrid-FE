import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import './registerServiceWorker';

console.log(11111);
const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

document.addEventListener('DOMContentLoaded', () => {
    let fontSize = window.innerWidth / 10;
    fontSize = fontSize > 50 ? 50 : fontSize;
    const html = document.querySelector('html');
    html.style.fontSize = fontSize + 'px';
});
