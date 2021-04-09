<template>
  <div>
    <br />
    <table>
      <tr>
        <td class="title" colspan="2">
          <span>{{ glossary.term.Term }}</span>
        </td>
      </tr>
      <tr>
        <td align="left" valign="top">Definition:</td>
        <td align="left">
          <span
            v-for="definition in glossary.term.Definition"
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
      <tr v-if="(glossary.term.Synonyms = '')">
        <td align="left" valign="top">Synonyms:</td>
        <td align="left">
          <ul>
            <li
              v-for="synonym in glossary.term.Synonyms"
              :key="synonym"
              class="li"
            >
              {{ synonym }}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td align="left" valign="top"><nobr>Defined In:</nobr></td>
        <td align="left">
          <span class="li">
            {{ glossary.term.DefinedIn.Publication }}
          </span>
        </td>
      </tr>
      <tr>
        <td align="left" valign="top">Used In:</td>
        <td align="left">
          <span
            v-for="secondary in glossary.term.UsedIn.Publication"
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

    //Data
    this.$store.dispatch("glossary/getTerm", this.tempTerm).then(
      // Breadcrumbs
      this.$store.dispatch("breadcrumb/setBreadcrumbs", [
        {
          document: "Glossary",
          name: "glossary"
        },
        { document: this.glossary.term.Term }
      ])
    );

    console.log("\nTerm.created():  end");
  },
  computed: {
    tempTerm() {
      if (this.Term === undefined) {
        return this.$store.state.glossary.term.Term;
      } else {
        return this.Term;
      }
    },
    ...mapState(["glossary", "breadcrumb"])
  },
  watch: {
    "$store.state.glossary.term": function() {
      this.$store.dispatch("breadcrumb/setBreadcrumbs", [
        {
          document: "Glossary",
          name: "glossary"
        },
        { document: this.glossary.term.Term }
      ]);
    }
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
