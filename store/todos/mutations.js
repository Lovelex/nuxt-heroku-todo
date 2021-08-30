export default {
  FETCH_TODOS(state, payload) {
    state.todos = payload
  },
  ADD_TODO(state, payload) {

    state.todos = [...state.todos, payload]
  },
  DEL_TODO(state, payload) {
    // state.todos.splice(payload.i, 1)
    const newTodos = state.todos.filter(todo => todo.id !== payload.id)
    state.todos = newTodos
  },
  UPDATE_TODO(state, payload) {
    
    // state.todos.splice(payload.i, 1, payload)
    const newTodos = state.todos.map(todo => {
      if (todo.id === payload.id) {
        return {
          ...payload
        }
      }
      return { ...todo }
    })
    state.todos = newTodos
  }
}