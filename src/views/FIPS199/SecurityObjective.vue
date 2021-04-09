<template>
  <div>
    <span class="title">{{
      securityobjective.securityObjective.SecurityObjective
    }}</span>
    <table>
      <tr>
        <td align="left">
          <span>Security Objective:</span>
        </td>
        <td align="left">
          {{ securityobjective.securityObjective.SecurityObjective }}
        </td>
      </tr>
      <tr>
        <td align="left">
          <span>Definition:</span>
        </td>
        <td
          align="left"
          v-for="definition in glossary.term.Definition"
          :key="definition"
        >
          {{ definition }}
        </td>
      </tr>
      <tr>
        <td align="left">
          <span>Threat:</span>
        </td>
        <td align="left">
          {{ securityobjective.securityObjective.Threat }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["SecurityObjective", "PublicationID"],
  data: () => ({
    definition: ""
  }),
  created() {
    console.log("\nSecurityObjective.created() ...  start");

    console.log(this.SecurityObjective);

    //Data
    this.$store
      .dispatch(
        "securityobjective/getSecurityObjective",
        this.tempSecurityObjective
      )
      .then(
        //Breadcrumb
        this.$store.dispatch("breadcrumb/setBreadcrumbs", [
          {
            document: this.publication.publication.Publication,
            name: this.publication.PublicationID
          },
          {
            document: this.securityobjective.securityObjective.SecurityObjective
          }
        ])
      );

    this.getTerm;

    console.log("\nSecurityObjective.created() ...  end");
  },
  computed: {
    tempSecurityObjective() {
      if (this.SecurityObjective === undefined) {
        return this.$store.state.securityobjective.securityObjective
          .SecurityObjective;
      } else {
        return this.SecurityObjective;
      }
    },
    getTerm() {
      console.log("\nSecurityObjective.getTerm() ...  start");
      this.$store.dispatch(
        "glossary/getTerm",
        this.securityobjective.securityObjective.Definition.Glossary.Term
      );
      return this.$store.state.glossary.term.Definition[0];
    },
    ...mapState(["securityobjective", "breadcrumb", "publication", "glossary"])
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
