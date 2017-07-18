// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    console.log('bind');
    el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  },
  inserted:function(){
    console.log('inserted');
  },
  update:function(){
    console.log('update');
  },
  componentUpdated:function(){
    console.log('componentUpdated');
  },
  unbind:function(){
    console.log('unbind');
  }
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
