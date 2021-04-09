<template>
  <div>
    <span class="title">{{ impact.impact.Impact }}</span>
    <table>
      <tr>
        <td align="left">
          <span>Impact:</span>
        </td>
        <td align="left">
          {{ impact.impact.Impact }}
        </td>
      </tr>
      <tr>
        <td align="left">
          <span>Definition:</span>
        </td>
        <td align="left">
          {{ impact.impact.Definition }}
        </td>
      </tr>
      <tr>
        <td align="left" valign="top">
          <span>Amplification:</span>
        </td>
        <td align="left" valign="top">
          <span
            v-for="amplification in impact.impact.Amplification"
            :key="amplification[0]"
            class="li"
          >
            <span v-if="typeof amplification === 'object'">
              <ul>
                <li v-for="item in amplification.List" :key="item">
                  {{ item }}
                </li>
              </ul>
            </span>
            <span v-else>
              {{ amplification }}
            </span>
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["Impact", "PublicationID"],
  created() {
    console.log("\nImpact.created() ... start");

    //Data
    this.$store.dispatch("impact/getImpact", this.tempImpact).then(
      //Breadcrumbs
      this.$store.dispatch("breadcrumb/setBreadcrumbs", [
        {
          document: this.publication.publication.Publication,
          name: this.publication.PublicationID
        },
        { document: this.impact.impact.Impact }
      ])
    );

    console.log("\nImpact.created() ... end");
  },
  computed: {
    tempImpact() {
      if (this.Impact === undefined) {
        return this.impact.impact.Impact;
      } else {
        return this.Impact;
      }
    },
    ...mapState(["impact", "breadcrumb", "publication"])
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
