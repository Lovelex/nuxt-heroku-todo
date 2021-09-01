<template>
  <v-form>
    <div class="py-8">
      <v-text-field
        v-model="user.email"
        outlined
        prepend-inner-icon="mdi-email"
        label="Email"
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        outlined
        prepend-inner-icon="mdi-key"
        type="password"
        label="Password"
      ></v-text-field>
    </div>
    <div class="d-flex justify-end">
      <v-btn @click="signup"> Register </v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    user: {
      email: "",
      password: "",
    },
  }),
  methods: {
    async signup() {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.user.email,
          this.user.password
        );
        this.$router.push({ name: "index" });
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
</script>

<style>
</style>