<template>
  <div>
    <h3 align="left">
      {{ publication.publication.Title }}<br /><a
        :href="publication.publication.Link"
        >{{ publication.publication.Publication }}</a
      >
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
    console.log("SP80037.created ... start");
    var id = "SP80039R2";
    console.log("SP80037.created.id = " + id);
    this.perPage = 3;
    this.$store.dispatch("step/getSteps", {
      perPage: this.perPage,
      page: this.page
    });
    this.$store.dispatch("publication/getPublications", {
      perPage: this.perPage,
      page: this.page
    });
    this.$store.dispatch("publication/getPublication", id);
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
