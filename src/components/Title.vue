<template>
  <div class="publication" v-if="Title">
    <div class="title">
      {{ Title }}
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
  props: ["Title"],
  created() {
    console.log("\nTitle.created() ... start");

    this.$store.dispatch("publication/getPublication", {
      Publication: this.publication.publication.Publication,
      PublicationID: this.publication.PublicationID
    });

    console.log("\nTitle.created() ... end");
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
