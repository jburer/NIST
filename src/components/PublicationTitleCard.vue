<template>
  <div>
    <h3 align="left">
      {{ publication.publication.Title }}<br />
      <span v-if="publication.publication.SubTitle">{{
        publication.publication.SubTitle
      }}</span>
      <a :href="publication.publication.Link">{{
        publication.publication.Publication
      }}</a>
    </h3>
    <h3 align="left"></h3>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["Publication"],
  created() {
    console.log("\nPublicationTitleCard.created():  start");
    console.log(
      " ... PublicationTitleCard.created().Publication = " + this.Publication
    );

    this.$store
      .dispatch("publication/getPublications")
      .then(
        this.$store.dispatch("publication/getPublication", this.Publication)
      );
  },
  computed: {
    ...mapState(["publication"])
  }
};
</script>

<style scoped></style>
