<template>
  <v-app dark>
    <v-app-bar fixed app>
      <nuxt-link style="text-decoration: none" class="white--text" to="/">
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-btn @click="signout"> Signout </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer class="d-flex justify-center" app>
      <div >
        <div>
          <span class="mr-2">Created by:</span>
          <a
            class="white--text"
            target="_blank"
            href="https://github.com/Lovelex"
          >
            Lucas Humberto
          </a>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    title: "Nuxt Todo",
  }),
  methods: {
    async signout() {
      try {
        await this.$fire.auth.signOut();
        this.$router.push({ name: "login" });
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
</script>
