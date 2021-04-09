<template>
  <div>
    <Title />
    <table>
      <tr>
        <td align="left">Security Objectives:</td>
      </tr>
      <tr>
        <td>
          <SecurityObjectiveCard
            v-for="securityObjective in securityobjective.securityObjectives"
            :key="securityObjective.securityObjective"
            :SecurityObjective="securityObjective"
            :PublicationID="PublicationID"
          />
        </td>
      </tr>
      <tr>
        <td align="left">Impacts:</td>
      </tr>
      <tr>
        <td>
          <ImpactCard
            v-for="potentialimpact in impact.impacts"
            :key="potentialimpact.Impact"
            :Impact="potentialimpact"
            :PublicationID="PublicationID"
          />
        </td>
      </tr>
      <tr>
        <td align="left">Security Categorizations:</td>
      </tr>
      <tr>
        <td>
          <SecurityCategorizationCard
            v-for="securityCategorization in securitycategorization.securityCategorizations"
            :key="securityCategorization.AppliedTo"
            :SecurityCategorization="securityCategorization"
            :PublicationID="PublicationID"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Title from "@/components/Title.vue";
import SecurityObjectiveCard from "@/components/SecurityObjectiveCard.vue";
import ImpactCard from "@/components/ImpactCard.vue";
import SecurityCategorizationCard from "@/components/SecurityCategorizationCard.vue";

export default {
  components: {
    Title,
    SecurityObjectiveCard,
    ImpactCard,
    SecurityCategorizationCard
  },
  created() {
    console.log("\nFIPS199.created() ... start");

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
    this.$store.dispatch("securityobjective/getSecurityObjectives");
    this.$store.dispatch("impact/getImpacts");
    this.$store.dispatch("securitycategorization/getSecurityCategorizations");

    console.log("\nFIPS199.created() ... end");
  },
  computed: {
    Publication() {
      return "FIPS 199";
    },
    PublicationID() {
      return "FIPS199";
    },
    ...mapState([
      "publication",
      "breadcrumb",
      "securityobjective",
      "impact",
      "securitycategorization"
    ])
  }
};
</script>
