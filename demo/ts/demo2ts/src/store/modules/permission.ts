interface PermissionState {
  isAddAsyncRouter: boolean
}

export default {
  state: ():PermissionState => ({
    isAddAsyncRouter: false,
  }),
  mutations: {
    IS_ADD_ASYNC_ROUTER(state: PermissionState, bool: boolean) {
      state.isAddAsyncRouter = bool;
    },
  },
  actions: {
  },
  getters: {
    isAddAsyncRouter: (state: PermissionState):boolean => state.isAddAsyncRouter
  }
}