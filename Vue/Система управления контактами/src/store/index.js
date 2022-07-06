import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clientData: [],

    loaderShow: false,

    filterClient: null,

    formError: null,
    clientAdd: {},
    clientChange: {},
    clientDelete: {},
    closeWindowAdd: false,
    closeWindowChange: false,
    closeWindowDelete: false
  },

  mutations: {
    loadClientData(state, item) {
      state.clientData = item
      state.clientData.reverse()
    },

    addClientData(state, item) {
      state.clientData.unshift(item)
      if(state.filterClient) return state.filterClient.unshift(item)
    },

    updateClientData(state, item) {
      state.clientData = state.clientData.map(el => {
        if(el.id !== item.id) return el
        return el = item
      })
      if(state.filterClient){
        state.filterClient = state.filterClient.map(el => {
          if(el.id !== item.id) return el
          return el = item
        })
      }

    },

    deleteClientData(state){
      const indexRemoveClientData = state.clientData.indexOf(state.clientDelete);
      state.clientData.splice(indexRemoveClientData, 1)

      if(state.filterClient){
        const indexRemoveFilterData = state.filterClient.indexOf(state.clientDelete);
        state.filterClient.splice(indexRemoveFilterData, 1)
      }
    },

    filterClientData(state, item) {
      state.filterClient = item
    },

    updateClientAdd (state, items) {
      state.clientAdd = items
    },
    updateClientChange (state, items) {
      return new Promise(res => {
        state.clientChange = items
        if(state.clientAdd) res();
      })

    },
    updateClientDelete (state, items) {

      state.clientDelete = items
    },

    updateCloseWindoweAdd(state, items){
      state.closeWindowAdd = items
    },

    updateCloseWindoweChange(state, items){
      state.closeWindowChange = items
    },

    updateCloseWindoweDelete(state, items){
      state.closeWindowDelete = items
    },

    formErrorAdd(state, item) {
      let id = 0
      state.formError = item.errors.map(el => {
        return {
          id: ++id,
          message: el.message
        }
      })
    }
  },

  actions: {
    async loadClient(context) {
      context.state.loaderShow = false
      return await fetch('http://localhost:3000/api/clients')
        .then(resolve => resolve.json())
        .then(res => {
          context.commit('loadClientData', res)
          context.state.loaderShow = true
        })
    },

    async addClient(context) {
      return await fetch('http://localhost:3000/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(context.state.clientAdd)
      })

      .then(resolve => resolve.ok ? resolve.json() : Promise.reject(resolve))
      .then(resolve => {
        context.commit('updateCloseWindoweAdd', false)
        context.commit('addClientData', resolve)
        context.state.formError = null
        context.state.clientAdd = {}
      })
      .catch( err => err.json().then(resErr => context.commit('formErrorAdd', resErr)))


    },

    async changeClient(context) {
      context.commit('updateCloseWindoweChange', false)
      return await fetch(`http://localhost:3000/api/clients/${context.state.clientChange.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(context.state.clientChange)
      })
        .then((res) => res.json())
        .then(res => context.commit('updateClientData', res))

    },

    async deleteClient(context) {
      context.commit('updateCloseWindoweDelete', false)
      return await fetch(`http://localhost:3000/api/clients/${context.state.clientDelete.id}`, {
        method: 'DELETE'
      })
        .then(() => context.commit('deleteClientData'))
    },


  },
});
