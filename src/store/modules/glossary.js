import Service from "@/services/Service.js";

export const namespaced = true;

export const state = {
  term: {},
  glossary: []
};

export const mutations = {
  SET_GLOSSARY(state, glossary) {
    console.log("\nglossary.SET_GLOSSARY() ... start");

    state.glossary = glossary;

    console.log("\nglossary.SET_GLOSSARY() ... end");
  },
  SET_TERM(state, term) {
    console.log("\nglossary.SET_TERM() ... start");

    state.term = term;

    console.log("\nglossary.SET_TERM() ... end");
  }
};

export const actions = {
  getGlossary({ commit }) {
    console.log("\nglossary.getGlossary() ... start");

    Service.getGlossary()
      .then(response => {
        commit("SET_GLOSSARY", response.data);
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });

    console.log("\nglossary.getGlossary() ... end");
  },
  //getTerm({ commit, getters }, Term) {
  getTerm({ commit }, Term) {
    console.log("\nglossary.getTerm() ... start");

    console.log(" ... glossary.getTerm().Term = " + Term);

    //var term = getters.getGlossaryByTerm(Term);

    //console.log(" ... glossary.getTerm().term = " + term);

    //if (term) {
    //  commit("SET_TERM", term);
    //} else {
    Service.getTerm(Term)
      .then(response => {
        console.log(response.data);
        commit("SET_TERM", response.data[0]);
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
    //}

    console.log("\nglossary.getTerm() ... end");
  }
};

export const getters = {
  getGlossaryByTerm: state => Term => {
    return state.glossary.find(glossary => glossary.Term === Term);
  }
};
