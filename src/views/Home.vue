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
  data() {
    return {
      documents: [
        {
          link: "SP80037",
          title: "SP 800-37",
          live: false
        },
        {
          link: "FIPS200",
          title: "FIPS 200",
          live: true
        }
      ]
    };
  },
  created() {
    console.log("\nHome.created():  start");
    this.$store.dispatch("businessrole/getBusinessRoles");
    this.$store.dispatch("breadcrumb/setBreadcrumbs", []);
  }
};
</script>

<style scoped></style>
