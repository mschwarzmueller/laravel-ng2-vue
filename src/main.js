import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import Quotes from './components/quotes.vue';
import NewQuote from './components/new-quote.vue';

Vue.use(VueRouter);

const routes = [
    {path: '', component: Quotes},
    {path: '/new-quote', component: NewQuote}
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})
