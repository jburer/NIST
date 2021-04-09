<template>
  <div>
    <p v-for="document in documents" :key="document.link">
      <router-link v-if="document.live" :to="{ name: document.link }">{{
        document.title
      }}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    documents: [
      {
        link: "FIPS199",
        title: "FIPS 199",
        live: true
      },
      {
        link: "FIPS200",
        title: "FIPS 200",
        live: true
      },
      {
        link: "SP80037R2",
        title: "SP 800-37 Rev. 2",
        live: false
      },
      {
        link: "glossary",
        title: "Glossary",
        live: true
      }
    ]
  }),
  created() {
    console.log("\nHome.created() ... start");

    this.$store.dispatch("breadcrumb/setBreadcrumbs", []);

    console.log("\nHome.created() ... end");
  }
};
</script>

<style scoped></style>
