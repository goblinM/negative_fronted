// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import store from './vuex'
// Vue.use(store);
//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

//引入jquery
// import jquery from 'jquery'
// Vue.prototype.$jquery = jquery;

//引入axios
import axios from 'axios'
Vue.prototype.$http = axios;

//引入echarts
import echarts from 'echarts'
Vue.use(echarts);
Vue.prototype.$echarts = echarts;

//引入echarts-wordcloud 词云
import wordcloud from 'echarts-wordcloud'
Vue.use(wordcloud);
Vue.prototype.$wordcloud = wordcloud;

//引入qs
// import Qs from 'qs'
// Vue.use(Qs);
// Vue.prototype.$Qs = Qs;

import { Loading,Message } from 'element-ui'
import filter from './filter/filter'
// Vue.use(store);
// Vue.prototype.$store = store;

/* eslint-disable no-new */
Vue.config.productionTip = false;

//获取cookie
Vue.prototype.getCookie = function (name) {
  name = name + "=";
  var start = document.cookie.indexOf(name),
    value = null;
  //如果cookies存在
  if (start > -1){
    var end = document.cookie.indexOf(";",name);
    if(end === -1){
      end = document.cookie.length;
    }
    value = document.cookie.substring(start+name.length,end);
  }
  return value;
};

new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
});
