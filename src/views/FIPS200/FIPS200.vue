<template>
  <div>
    <Title />
    <MinimumRequirementCard
      v-for="minimumrequirement in minimumrequirement.minimumrequirements"
      :key="minimumrequirement.ControlFamilyID"
      :MinimumRequirement="minimumrequirement"
      :PublicationID="PublicationID"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Title from "@/components/Title.vue";
import MinimumRequirementCard from "@/components/MinimumRequirementCard.vue";

export default {
  components: {
    Title,
    MinimumRequirementCard
  },
  created() {
    console.log("\nFIPS200.created() ... start");

    //Publication
    this.$store.dispatch("publication/getPublication", {
      Publication: this.Publication,
      PublicationID: this.PublicationID
    });

    //Breadcrumb
    this.$store.dispatch("breadcrumb/setBreadcrumbs", [
      {
        document: this.publication.publication.Publication,
        name: this.publication.PublicationID
      }
    ]);

    //Data
    this.$store.dispatch("minimumrequirement/getMinimumRequirements");

    console.log("\nFIPS200.created() ... start");
  },
  computed: {
    Publication() {
      return "FIPS 200";
    },
    PublicationID() {
      return "FIPS200";
    },
    ...mapState(["publication", "breadcrumb", "minimumrequirement"])
  }
};
</script>
