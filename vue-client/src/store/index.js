import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: []
  },
  mutations: {
    GET_TRANSACTIONS(state, transactions) {
      state.transactions = transactions
    },
    ADD_TRANSACTION(state, transaction) {
      state.transactions.push(transaction)
    },
    DELETE_TRANSACTION(state, id) {
      state.transactions = state.transactions.filter(t => t._id !== id)
    }
  },
  actions: {
    async loadTransactions({commit}) {
      const res = await axios.get('https://expense24manager.herokuapp.com/transactions')
      commit('GET_TRANSACTIONS', res.data.transactions)
    },
    async addTransaction({commit}, transaction) {
      const res = await axios.post('https://expense24manager.herokuapp.com/transactions', transaction)
      commit('ADD_TRANSACTION', res.data.transaction)
    },
    async deleteTransaction({commit}, id) {
      await axios.delete('https://expense24manager.herokuapp.com/transactions/'+id)
      commit('DELETE_TRANSACTION', id)
    }
  },
  getters: {
    transactions(state) { return state.transactions }
  }
})
