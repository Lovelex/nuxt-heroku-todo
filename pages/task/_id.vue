<template>
  <main>
    <section class="d-flex justify-center">
      <v-card width="640" class="pa-4">
        <article>
          <div>
            <span class="mr-2">Task Status:</span>
            <span>{{ task.done ? "Done" : "Not Done" }}</span>
          </div>
          <h1 class="text-h3 my-8">
            {{ task.taskName }}
          </h1>
          <p>
            {{ task.task }}
          </p>
        </article>
      </v-card>
    </section>
  </main>
</template>

<script>
export default {
  async validate({ $fire, params, store }) {
    const error = { statusCode: 404, message: "Task Not Found" };
    try {
      const refGet = await $fire.firestore
        .collection("todos")
        .doc(params.id)
        .get();
      if (refGet.exists) {
        store.commit("todos/FETCH_TODO", refGet.data());
        return true;
      } else {
        throw error;
      }
    } catch (e) {
      throw e;
    }
  },
  computed: {
    task() {
      return this.$store.getters["todos/getTodo"];
    },
  },
  head() {
    return {
      title: this.task.taskName
    }
  }
};
</script>

<style>
</style>