// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// eslint-disable-next-line
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.config.productionTip = false;

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    products: [
      { name: "鼠标", price: 20 },
      { name: "键盘", price: 40 },
      { name: "耳机", price: 60 },
      { name: "显示屏", price: 80 }
    ]
  },
  getters:{
    saleProducts:(state)=>{
      let saleProducts = state.products.map(product =>{
        return {
          name:product.name,
          price:product.price / 2
        }
      })
      return saleProducts
    }
  },
  mutations:{
    minusPrice:(state,payload)=>{
      state.products.forEach(product =>{
        product.price -= payload
      })
    }
  },
  actions:{
    minusPriceAsync:(context,payload)=>{
      setTimeout(()=>{
        context.commit('minusPrice',payload)
      },2000)
    }
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
});
