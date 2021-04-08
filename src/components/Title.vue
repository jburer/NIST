<template>
  <div class="publication" v-if="title">
    <div class="title">
      {{ title }}
    </div>
  </div>
  <div class="publication" v-else>
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
  props: ["title"],
  created() {
    console.log("\nPublicationTitleCard.created():  start");

    console.log(this.title);

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
