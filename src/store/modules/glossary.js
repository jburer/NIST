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
  }
};
