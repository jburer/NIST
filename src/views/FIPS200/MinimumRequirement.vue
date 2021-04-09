<template>
  <div>
    <span class="title">{{
      minimumrequirement.minimumrequirement.ControlFamily
    }}</span>
    <table>
      <tr>
        <td align="left">
          <span
            v-if="
              minimumrequirement.minimumrequirement.MinimumRequirement.length >
                1
            "
          >
            Minimum Requirements:
          </span>
          <span v-else>Minimum Requirement:</span>
        </td>
      </tr>
      <tr>
        <td align="left">
          <ul>
            <li
              v-for="requirement in minimumrequirement.minimumrequirement
                .MinimumRequirement"
              :key="requirement"
              class="li"
            >
              {{ requirement }}
            </li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["ControlFamilyID", "PublicationID"],
  created() {
    console.log("\nMinimumRequirement.created() ... start");

    //Data
    this.$store
      .dispatch(
        "minimumrequirement/getMinimumRequirement",
        this.tempControlFamilyID
      )
      .then(
        //Breadcrumb
        this.$store.dispatch("breadcrumb/setBreadcrumbs", [
          {
            document: this.publication.publication.Publication,
            name: this.publication.PublicationID
          },
          { document: this.minimumrequirement.minimumrequirement.ControlFamily }
        ])
      );

    console.log("\nMinimumRequirement.created() ... end");
  },
  computed: {
    tempControlFamilyID() {
      if (this.ControlFamilyID === undefined) {
        return this.minimumrequirement.minimumrequirement.ControlFamilyID;
      } else {
        return this.ControlFamilyID;
      }
    },
    ...mapState(["minimumrequirement", "breadcrumb", "publication"])
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
