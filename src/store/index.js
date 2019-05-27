import Vue from 'vue'
import Vuex from 'vuex'
import global from '@/pages/global/vuex'
import home from '@/pages/home/vuex'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    global:global,
    home:home,
  },
  getters
})

export default store
