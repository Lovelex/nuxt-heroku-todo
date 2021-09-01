export default {
  onAuthStateChanged: ({ commit }, { authUser }) => {
    commit('ON_AUTH_STATE_CHANGED', authUser)
  }
}