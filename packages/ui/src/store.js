import Vuex from 'vuex'

const INCREMENT = 'increment'
const DECREMENT = 'decrement'

const actions = {
   [INCREMENT]({ commit }) {
       commit(INCREMENT)
   },

   [DECREMENT]({ commit }) {
       commit(DECREMENT)
   } 
}

const mutations = {
   [INCREMENT](state) {
       state.count += 1 
   },

   [DECREMENT](state) {
       state.count -= 1
   } 
}

const state = {
    count: 0
}

export default {
    namespaced: true,
    actions,
    mutations,
    state
}
