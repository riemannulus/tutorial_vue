import Vue from 'vue'
import T from './components/Tutorial'
//import Todo from './components/TodoList'

Vue.config.productionTip = false;

new Vue({
    render: h => h(T)
}).$mount('#app') ;

