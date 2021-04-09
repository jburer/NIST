<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <NavBar />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mx-12">
            <router-view :key="$route.fullPath" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  },
  created() {
    console.log("\nApp.created() ... start");

    this.$store.dispatch("businessrole/getBusinessRoles");
    this.$store.dispatch("publication/getPublications");

    console.log("\nApp.created() ... end");
  }
};
</script>
