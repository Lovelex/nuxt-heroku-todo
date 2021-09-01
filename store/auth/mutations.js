export default {
  ON_AUTH_STATE_CHANGED: (state, payload) => {
    state.user = payload ? { email: payload.email, uid: payload.uid } : null    
    // const { uid, email, emailVerified } = authUser
    // state.user = { uid, email, emailVerified }
  }
}