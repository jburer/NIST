<template>
  <div>
    <PublicationTitleCard :Publication="this.Publication" />
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

    this.Publication = "FIPS 200";
    console.log(
      " ... FIPS200.created().this.Publication = " + this.Publication
    );

    this.$store.dispatch("breadcrumb/setBreadcrumbs", [
      { document: "FIPS 200", name: "FIPS200" }
    ]);

    this.$store.dispatch("minimumrequirement/getMinimumRequirements");
  },
  computed: {
    ...mapState(["minimumrequirement", "breadcrumb"])
  }
};
</script>
