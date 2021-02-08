<template>
  <div>
    This is a sample app.
    <p>
      <router-link :to="{ name: 'SP80037' }">SP 800-37</router-link>
    </p>
  </div>
</template>

<script>
//import { mapState } from "vuex";

export default {
  created() {
    console.log("\n... Home.created():  start");

    this.$store.dispatch("publication/getPublications");
    console.log("Home.created().Publications = " + this.Publications);

    this.$store.dispatch("businessrole/getBusinessRoles");
    console.log("Home.created().BusinessRoles = " + this.BusinessRoles);
  }
  /*
  computed: mapState({
    Publications: state => state.publication.publications,
    BusinessRoles: state => state.businessrole.businessroles
  })
  */
};
</script>

<style scoped></style>
