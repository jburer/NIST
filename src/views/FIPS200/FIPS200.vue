<template>
  <div>
    <PublicationTitleCard :publication="publication" />
    <MinimumRequirementCard
      v-for="minimumrequirement in minimumrequirement.minimumrequirements"
      :key="minimumrequirement.ControlFamilyID"
      :minimumrequirement="minimumrequirement"
    />
    <!--
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
    -->
  </div>
</template>

<script>
import PublicationTitleCard from "@/components/PublicationTitleCard.vue";
import MinimumRequirementCard from "@/components/MinimumRequirementCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    PublicationTitleCard,
    MinimumRequirementCard
  },
  created() {
    console.log("\n... FIPS200.created():  start");

    this.$store.dispatch("minimumrequirement/getMinimumRequirements");

    var Publication = "FIPS 200";
    console.log("FIPS200.created().Publication = " + Publication);
    this.$store.dispatch("publication/getPublication", Publication);
  },
  computed: {
    /*
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    hasNextPage() {
      return (
        this.minimumrequirement.minimumrequirementsTotal >
        this.page * this.perPage
      );
    },
    */
    ...mapState(["minimumrequirement", "publication"])
  }
};
</script>
