import Vue from "vue";
import Vuex from "vuex";
import * as step from "@/store/modules/step.js";
import * as minimumrequirement from "@/store/modules/minimumrequirement.js";
import * as publication from "@/store/modules/publication.js";
import * as businessrole from "@/store/modules/businessrole.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    step,
    minimumrequirement,
    publication,
    businessrole
  },
  state: {},
  minimumrequirement: {},
  publication: {},
  businessrole: {}
});
