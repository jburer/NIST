<template>
  <div class="publication">
    <div class="title">
      {{ publication.publication.Title }}
    </div>
    <div v-if="publication.publication.SubTitle" class="subtitle">
      {{ publication.publication.SubTitle }}
    </div>
    <div class="link">
      <router-link
        class="step-link"
        :to="{
          name: 'publication'
        }"
        >{{ publication.publication.Publication }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    console.log("\nPublicationTitleCard.created():  start");

    this.$store.dispatch("publication/getPublication", {
      Publication: this.publication.publication.Publication,
      PublicationID: this.publication.PublicationID
    });
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
