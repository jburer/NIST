import Service from "@/services/Service.js";

export const namespaced = true;

export const state = {
  term: {},
  glossary: []
};

export const mutations = {
  SET_GLOSSARY(state, glossary) {
    state.glossary = glossary;
  },
  SET_TERM(state, term) {
    state.term = term;
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
  getTerm({ commit }, Term) {
    console.log("\nglossary.getTerm() ... start");

    Service.getTerm(Term)
      .then(response => {
        commit("SET_TERM", response.data[0]);
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });

    console.log("\nglossary.getTerm() ... end");
  }
};
