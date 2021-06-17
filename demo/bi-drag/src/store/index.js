import { createStore } from 'vuex'

export default createStore({
  state: {
    componentData: []
  },
  mutations: {
    setComponentData(state, componentData = []) {
      Vue.set(state, 'componentData', componentData)
    },
    addComponent(state, { component, index }) {
      if (index !== undefined) {
        state.componentData.splice(index, 0, component)
      } else {
        state.componentData.push(component)
      }
    },

    deleteComponent(state, index) {
      /* if (index === undefined) {
        index = state.curComponentIndex
      }
      
      if (index == state.curComponentIndex) {
        state.curComponentIndex = null
        state.curComponent = null
      } */
      
      state.componentData.splice(index, 1)
    },
  },
  actions: {
  },
  modules: {
  }
})
