<template>
  <div class="publication">
    <div class="title">
      {{ publication.publication.Title }}
    </div>
    <div v-if="publication.publication.SubTitle" class="subtitle">
      {{ publication.publication.SubTitle }}
    </div>
    <div class="link">
      <a :href="publication.publication.Link" target="_blank">{{
        publication.publication.Publication
      }}</a>
    </div>
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

    this.$store.dispatch("publication/getPublication", this.Publication);
  },
  computed: {
    ...mapState(["publication"])
  }
};
</script>

<style scoped>
.publication {
  padding: 15px;
  text-align: left;
}
.title {
  font-weight: bold;
  font-size: large;
}
.subtitle {
  font-weight: normal;
  font-size: large;
}
.link {
  font-weight: normal;
  font-size: large;
}
</style>
