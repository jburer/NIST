<template>
  <div>
    <span class="title">{{
      securitycategorization.securityCategorization.AppliedTo
    }}</span>
    <table>
      <tr>
        <td align="left">
          <span>Security Categorization Applied To:</span>
        </td>
        <td align="left">
          {{ securitycategorization.securityCategorization.AppliedTo }}
        </td>
      </tr>
      <tr>
        <td align="left">
          <span>Method Of Assignment:</span>
        </td>
        <td align="left">
          {{ securitycategorization.securityCategorization.Method }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["AppliedTo", "PublicationID"],
  created() {
    console.log("\nSecurityCategorization.created() ... start");

    //Data
    this.$store
      .dispatch(
        "securitycategorization/getSecurityCategorization",
        this.tempAppliedTo
      )
      .then(
        //Breadcrumb
        this.$store.dispatch("breadcrumb/setBreadcrumbs", [
          {
            document: this.publication.publication.Publication,
            name: this.publication.PublicationID
          },
          {
            document: this.securitycategorization.securityCategorization
              .AppliedTo
          }
        ])
      );

    console.log("\nSecurityCategorization.created() ... end");
  },
  computed: {
    tempAppliedTo() {
      if (this.AppliedTo === undefined) {
        return this.$store.state.securitycategorization.securitycategorization
          .AppliedTo;
      } else {
        return this.AppliedTo;
      }
    },
    ...mapState(["securitycategorization", "breadcrumb", "publication"])
  }
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: large;
  text-align: center;
}
.li {
  padding: 5px;
}
</style>
