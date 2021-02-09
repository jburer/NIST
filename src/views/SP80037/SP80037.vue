<template>
  <div>
    <h3 align="left">
      {{ publication.publication.Title }}<br />
      {{ publication.publication.SubTitle }}<br />
      <a :href="publication.publication.Link">{{
        publication.publication.Publication
      }}</a>
    </h3>
    <h3 align="left"></h3>

    <Card v-for="step in step.steps" :key="step.id" :step="step" />
    <template v-if="page != 1">
      <router-link :to="{ name: 'read', query: { page: page - 1 } }" rel="prev"
        >Prev Page</router-link
      >
    </template>
    <template v-if="page != 1 && hasNextPage">
      |
    </template>
    <template v-if="hasNextPage">
      <router-link :to="{ name: 'read', query: { page: page + 1 } }" rel="prev">
        Next Page
      </router-link>
    </template>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapState } from "vuex";

export default {
  components: {
    Card
  },
  created() {
    console.log("\n... SP80037.created():  start");

    this.$store.dispatch("step/getSteps");

    var Publication = "SP 800-37 Rev. 2";
    console.log("SP80037.created().Publication = " + Publication);
    this.$store.dispatch("publication/getPublication", Publication);
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    hasNextPage() {
      return this.step.stepsTotal > this.page * this.perPage;
    },
    ...mapState(["step", "publication"])
  }
};
</script>
