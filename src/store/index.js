import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dizhi : '北京',
    falg : true,
    falgs : false,
    name : "Hi"

  },
  mutations: {
    sun(state,res){
        state.dizhi = res
    },
    jia(state){
      state.falg = false
      state.falgs = true
    },
    hui(state , res){
state.name = res
    }
  },
  actions: {
  },
  modules: {
  }
})
