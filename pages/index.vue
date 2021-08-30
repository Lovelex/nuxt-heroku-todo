<template>
  <main class="mt-16">
    <v-row>
      <v-col order="1"  order-md="0" cols="12" md="8">
        <v-card class="pa-4">
          <v-row>
            <v-col v-for="(todo, i) in todos" :key="i" cols="12" sm="6" md="4">
              <Todo :namespaces="namespaces" :todo="{...todo, i}"></Todo>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col order="0"  order-md="1"  cols="12" md="4">
        <AddTodo :namespaces="namespaces"></AddTodo>
      </v-col>
    </v-row>
  </main>
</template>

<script>
const namespaces = ["todos"];
export default {
  data: () => ({
    namespaces : [...namespaces]
  }),
  computed: {
    todos() {
      return [...this.$store.getters[`${namespaces[0]}/getTodos`]];
    },
  },

  async asyncData({ store }) {
    return await store.dispatch(`${namespaces[0]}/fetchTodos`);
  },
};
</script>
