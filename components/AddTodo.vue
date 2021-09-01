<template>
  <v-card class="pa-4">
    <h3>Add Task</h3>
    <v-form>
      <v-checkbox color="white" v-model="todo.done" label="Done"></v-checkbox>
      <v-text-field v-model="todo.taskName" label="Task Name"></v-text-field>
      <v-text-field v-model="todo.task" label="Task"></v-text-field>
      <div class="d-flex justify-end">
        <v-btn @click="addTodo"> ADD </v-btn>
      </div>
    </v-form>
    {{taskNameSlugfied}}
  </v-card>
</template>

<script>
import slugify from 'slugify'

export default {
  props: {
    namespaces: Array,
  },
  data: () => ({
    todo: {
      taskName: "",
      task: "",
      done: false,
    },
  }),
  computed: {
    taskNameSlugfied() {
      const options = {
        lower: true,
        remove: /[*+~.()'¬¹²³"!#$:@]/g,
        locale: 'pt'
      }
      return slugify(this.todo.taskName, options)
    }
  },
  methods: {
    async addTodo() {
      const isTodoAdded = await this.$store.dispatch(
        `${this.namespaces[0]}/addTodo`,
        { ...this.todo, slug: this.taskNameSlugfied }
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