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
  props: ["MinimumRequirement"],
  created() {
    console.log("\nMinimumRequirement.created():  start");

    if (this.MinimumRequirement === undefined) {
      console.log(this.$store.state.minimumrequirement.minimumrequirement);
      this.MinimumRequirement = this.$store.state.minimumrequirement.minimumrequirement;
    } else {
      this.$store.dispatch(
        "minimumrequirement/getMinimumRequirement",
        this.MinimumRequirement.ControlFamilyID
      );
    }

    this.$store.dispatch("breadcrumb/setBreadcrumbs", [
      { document: "FIPS 200", name: "FIPS200" },
      { document: this.MinimumRequirement.ControlFamily }
    ]);
  },
  computed: {
    ...mapState(["minimumrequirement"])
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
