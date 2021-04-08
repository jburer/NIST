<template>
  <div>
    <br />
    <table>
      <tr>
        <td class="title" colspan="2">
          <span>{{ Term.Term }}</span>
        </td>
      </tr>
      <tr>
        <td align="left" valign="top">Definition:</td>
        <td align="left">
          <span
            v-for="definition in Term.Definition"
            :key="definition[0]"
            class="li"
          >
            <span v-if="typeof definition === 'object'">
              <ul>
                <li v-for="item in definition.List" :key="item">
                  {{ item }}
                </li>
              </ul>
            </span>
            <span v-else>
              {{ definition }}
            </span>
          </span>
        </td>
      </tr>
      <tr v-if="(Term.Synonyms = '')">
        <td align="left" valign="top">Synonyms:</td>
        <td align="left">
          <ul>
            <li v-for="synonym in Term.Synonyms" :key="synonym" class="li">
              {{ synonym }}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td align="left" valign="top"><nobr>Defined In:</nobr></td>
        <td align="left">
          <span class="li">
            {{ Term.DefinedIn.Publication }}
          </span>
        </td>
      </tr>
      <tr>
        <td align="left" valign="top">Used In:</td>
        <td align="left">
          <span
            v-for="secondary in Term.UsedIn.Publication"
            :key="secondary"
            class="li"
          >
            {{ secondary }}
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["Term"],
  created() {
    console.log("\nTerm.created():  start");

    this.$store.dispatch(
      "minimumrequirement/getMinimumRequirement",
      this.tempControlFamilyID
    );

    // Breadcrumbs
    this.$store.dispatch("breadcrumb/setBreadcrumbs", [
      {
        document: "Glossary",
        name: "glossary"
      },
      { document: this.Term.Term }
    ]);
  },
  computed: {
    tempControlFamilyID() {
      if (this.ControlFamilyID === undefined) {
        return this.$store.state.minimumrequirement.minimumrequirement
          .ControlFamilyID;
      } else {
        return this.ControlFamilyID;
      }
    },
    ...mapState(["term", "breadcrumb"])
  }
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: large;
  text-align: left;
}
.li {
  padding: 5px;
}
</style>
