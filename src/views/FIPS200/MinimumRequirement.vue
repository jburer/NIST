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
  props: ["ControlFamilyID"],
  created() {
    console.log("\nMinimumRequirement.created():  start");
    console.log(
      " ... MinimumRequirement.created():  ControlFamilyID = " + this.temp
    );
    this.$store.dispatch("minimumrequirement/getMinimumRequirement", this.temp);

    this.$store.dispatch("breadcrumb/setBreadcrumbs", [
      {
        document: this.$store.state.publication.publication.Publication,
        name: this.$store.state.publication.publication.id
      },
      { document: this.minimumrequirement.minimumrequirement.ControlFamily }
    ]);
  },
  computed: {
    temp() {
      if (this.ControlFamilyID === undefined) {
        return this.$store.state.minimumrequirement.minimumrequirement
          .ControlFamilyID;
      } else {
        return this.ControlFamilyID;
      }
    },
    ...mapState(["minimumrequirement", "breadcrumb"])
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
