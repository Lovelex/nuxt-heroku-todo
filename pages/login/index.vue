<template>
  <main >
    <section class="d-flex justify-center align-center" style="height: 100vh">
      <v-card class="py-8 px-4" width="600">
        <h1 class="text-center mb-4">Welcome!</h1>
        <v-tabs>
          <v-tab>Sign-In</v-tab>
          <v-tab>Sign-Up</v-tab>
          <v-tab-item>
            <Signin></Signin>
          </v-tab-item>
          <v-tab-item>
            <Signup></Signup>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </section>
  </main>
</template>

<script>
export default {
  layout: "login",
  middleware: 'authenticated',
};
</script>

<style>
</style>