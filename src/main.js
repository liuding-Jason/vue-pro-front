import Vue from 'vue';
import iView from 'iview';
import Vuex from 'vuex' ;
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routers from './router';
import Store from './store/index' ;
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter) ;
Vue.use(iView) ;
Vue.use(Vuex) ;
Vue.use(VueResource) ;

// 路由配置
const RouterConfig = {
    mode: 'hash',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

// vuex状态管理机制
const store = new Vuex.Store(Store);

new Vue({
    el: '#app',
    router: router,
    store : store ,
    render: h => h(App)
}) ;
