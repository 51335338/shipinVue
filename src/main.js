import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Router from 'vue-router'

// 引入element-ui 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入替换后的elementUi 样式
import '../public/css/common.css'
Vue.use(ElementUI);

//全局变量
import global from '../public/global';

Vue.config.productionTip = false

Vue.prototype._global = global

// 解决 vRouter 3.0+ 报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')