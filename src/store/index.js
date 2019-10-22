import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bienA: 'bienA'
  },
  mutations: {
    thongBaoA(state, value) {
      this.state.bienA = value
    }
  },
  actions: {
  },
  modules: {
  }
})
