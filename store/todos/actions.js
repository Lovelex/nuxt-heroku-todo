export default {
  async fetchTodos({ commit }) {
    const ref = this.$fire.firestore.collection("todos");
    const refGet = await ref.get();
    const docs = [];
    refGet.forEach((doc) => {
      console.log(doc.id)
      const newDoc = {
        ...doc.data(), 
        id: doc.id,
      }
      docs.push(newDoc);
    });
    commit('FETCH_TODOS', docs)
  },
  async addTodo({ commit }, payload) {
    const ref = this.$fire.firestore.collection("todos").doc()
    const newTodo = {
      ...payload,
      id: ref.id,
    }
    try {
      await ref.set(newTodo)
      commit('ADD_TODO', newTodo)
      return true
    } catch (e) {
      console.log(e)
      return false
    }
  },
  async delTodo({ commit }, payload) {
    const ref = this.$fire.firestore.collection("todos").doc(payload.id)
    try {
      await ref.delete()
      commit('DEL_TODO', payload)
    } catch (e) {
      console.log(e)
    }
  },
  async updateTodo({ commit }, payload) {
    const updatedTodo = {
      ...payload,
      done: !payload.done
    }
    const ref = this.$fire.firestore.collection("todos").doc(payload.id)
    try {
      await ref.update(updatedTodo)
      commit('UPDATE_TODO', updatedTodo)
    } catch (e) {
      console.log(e)
    }

  }
}