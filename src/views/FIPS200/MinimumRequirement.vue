<template>
  <div>
    <span class="title">{{ minimumrequirement.ControlFamily }}</span>
    <table>
      <tr>
        <td align="left">
          <span v-if="minimumrequirement.MinimumRequirement.length > 1">
            Minimum Requirements:
          </span>
          <span v-else>Minimum Requirement:</span>
        </td>
      </tr>
      <tr>
        <td align="left">
          <ul>
            <li
              v-for="requirement in minimumrequirement.MinimumRequirement"
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
export default {
  props: {
    minimumrequirement: Object
  },
  created() {
    console.log("\nMinimumRequirement.created():  start");

    this.$store.dispatch("breadcrumb/setBreadcrumbs", [
      { document: "FIPS 200", name: "FIPS200" },
      { document: this.minimumrequirement.ControlFamily }
    ]);

    this.$store.dispatch("minimumrequirement/getMinimumRequirements");
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
