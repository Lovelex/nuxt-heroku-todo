<template>
  <v-card class="pa-4">
    <h3>Add Task</h3>
    <v-form>
      <v-checkbox color="white" v-model="todo.done" label="Done"></v-checkbox>
      <v-text-field v-model="todo.task" label="Task"></v-text-field>
      <div class="d-flex justify-end">
        <v-btn @click="addTodo"> ADD </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  props: {
    namespaces: Array,
  },
  data: () => ({
    todo: {
      task: "",
      done: false,
    },
  }),
  methods: {
    async addTodo() {
      const isTodoAdded = await this.$store.dispatch(
        `${this.namespaces[0]}/addTodo`,
        { ...this.todo }
      );
      if (isTodoAdded) {
        this.todo = this.$options.data().todo;
      }
    },
    
  },
};
</script>

<style>
</style>