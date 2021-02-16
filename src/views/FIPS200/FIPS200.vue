<template>
  <div>
    <PublicationTitleCard />
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
import PublicationTitleCard from "@/components/PublicationTitleCard.vue";
import MinimumRequirementCard from "@/components/MinimumRequirementCard.vue";

export default {
  components: {
    PublicationTitleCard,
    MinimumRequirementCard
  },
  created() {
    console.log("\nFIPS200.created():  start");

    console.log(
      " ... FIPS200.created(): this.Publication = " + this.Publication
    );
    console.log(
      " ... FIPS200.created(): this.PublicationID = " + this.PublicationID
    );
    this.$store.dispatch("publication/getPublication", {
      Publication: this.Publication,
      PublicationID: this.PublicationID
    });
    this.$store.dispatch("breadcrumb/setBreadcrumbs", [
      {
        document: this.publication.publication.Publication,
        name: this.publication.PublicationID
      }
    ]);
    this.$store.dispatch("minimumrequirement/getMinimumRequirements");
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
