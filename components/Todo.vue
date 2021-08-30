<template>
  <v-card :color="todo.done ? 'green darken-4' : 'red darken-4'" class="pa-2">
    <div class="d-flex justify-end">
      <v-icon @click="delTodo(todo, todo.i)">mdi-close</v-icon>
    </div>
    <div
      style="cursor: pointer"
      class="d-inline-flex mb-4"
      @click="updateTodo(todo, todo.i)"
    >
      <v-simple-checkbox @click="updateTodo(todo, todo.i)" :value="todo.done">
      </v-simple-checkbox>
      <span class="text-caption">Done?</span>
    </div>
    <span class="d-block">
      {{ todo.task }}
    </span>
  </v-card>
</template>

<script>
export default {
  props: {
    todo: Object,
    namespaces: Array,
  },
  methods: {
    async delTodo(todo, i) {
      this.$store.dispatch(`${this.namespaces[0]}/delTodo`, { ...todo, i });
    },
    async updateTodo(todo, i) {
      this.$store.dispatch(`${this.namespaces[0]}/updateTodo`, { ...todo, i });
    },
  },
};
</script>

<style>
</style>