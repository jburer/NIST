<template>
  <div class="step-card -shadow">
    <table>
      <tr>
        <td align="left">
          <v-dialog v-model="dialog" width="500" overlay-opacity="0">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="ma-0 pa-1">
                {{ Term.Term }}
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2">
                <v-icon class="mr-2">mdi-book</v-icon>
                {{ Term.Term }}
              </v-card-title>

              <v-card-text>
                <v-spacer></v-spacer>
                <span
                  v-for="definition in Term.Definition"
                  :key="definition[0]"
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
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false" icon>
                  <v-icon>mdi-book</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Term",
  props: {
    Term: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    dialog: false
  }),
  created() {
    console.log("\nTerm.created() ... start");

    //Data
    this.$store.dispatch("glossary/getTerm", this.tempTerm);

    console.log("\nTerm.created() ... end");
  },
  computed: {
    tempTerm() {
      if (this.Term === undefined) {
        return this.glossary.term.Term;
      } else {
        return this.Term;
      }
    },
    ...mapState(["glossary"])
  }
};
</script>
