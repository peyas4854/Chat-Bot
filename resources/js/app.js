

require('./bootstrap');

window.Vue = require('vue');



// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('chat-bot', require('./components/Chatbot.vue').default);
Vue.component('message', require('./components/Message.vue').default);



const app = new Vue({
    el: '#app',
});
