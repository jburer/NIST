<template>
  <div>
    <PublicationTitleCard />
    <MinimumRequirementCard
      v-for="minimumrequirement in minimumrequirement.minimumrequirements"
      :key="minimumrequirement.ControlFamilyID"
      :MinimumRequirement="minimumrequirement"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PublicationTitleCard from "@/components/PublicationTitleCard.vue";
import MinimumRequirementCard from "@/components/MinimumRequirementCard.vue";

export default {
  components: {
    PublicationTitleCard,
    MinimumRequirementCard
  },
  created() {
    console.log("\nFIPS200.created():  start");

    this.$store.dispatch("publication/getPublication", this.Publication);
    this.$store.dispatch("breadcrumb/setBreadcrumbs", [
      {
        document: this.publication.publication.Publication,
        name: this.publication.publication.id
      }
    ]);
    this.$store.dispatch("minimumrequirement/getMinimumRequirements");
  },
  computed: {
    Publication() {
      var Publication = "FIPS 200";
      return Publication;
    },
    ...mapState(["publication", "breadcrumb", "minimumrequirement"])
  }
};
</script>
