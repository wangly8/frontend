import Vue from 'vue'
import Router from 'vue-router'
import collection from '../views/collect-monitor-index'
import preprocess from '../views/preprocess-index'
import mainindex from '../views/main-index'
import mainframe from '../views/main-frame'
import iView from 'iview';
import locale from 'iview/dist/locale/en-US';

Vue.use(iView, { locale });
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainindex',
      component: mainindex
    },
    {
      path: '/collection',
      name: 'collection',
      component: collection
    },
    {
      path: '/preprocess',
      name: 'preprocess',
      component: preprocess
    },
    {
      path: '/mainframe',
      name: 'mainframe',
      component: mainframe
    }
  ]
})
