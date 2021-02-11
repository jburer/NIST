<template>
  <div>
    <p v-if="documents.live">
      <router-link :to="{ name: documents.name }">{{
        documents.document
      }}</router-link>
    </p>
    <p>
      <router-link :to="{ name: 'FIPS200' }">FIPS 200</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documents: [
        {
          name: "SP80037",
          document: "SP 800-37",
          live: false
        },
        {
          name: "FIPS200",
          document: "FIPS 200",
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
