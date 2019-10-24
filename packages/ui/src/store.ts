const INCREMENT = 'increment'
const DECREMENT = 'decrement'

const actions = {
   [INCREMENT]({ commit }: any) {
       commit(INCREMENT)
   },

   [DECREMENT]({ commit }: any) {
       commit(DECREMENT)
   } 
}

const mutations = {
   [INCREMENT](state: any) {
       state.count += 1 
   },

   [DECREMENT](state: any) {
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
