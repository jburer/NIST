import Service from "@/services/Service.js";

export const namespaced = true;

export const state = {
  securityCategorization: {},
  securityCategorizations: []
};

export const mutations = {
  SET_SECURITYCATEGORIZATION(state, securityCategorization) {
    state.securityCategorization = securityCategorization;
  },
  SET_SECURITYCATEGORIZATIONS(state, securityCategorizations) {
    state.securityCategorizations = securityCategorizations;
  }
};

export const actions = {
  getSecurityCategorizations({ commit }) {
    console.log(
      "\nsecuritycategorization.getSecurityCategorizations() ... start"
    );

    Service.getFIPS199()
      .then(response => {
        commit(
          "SET_SECURITYCATEGORIZATIONS",
          response.data[2].SecurityCategorizations
        );
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });

    console.log(
      "\nsecuritycategorization.getSecurityCategorizations() ... end"
    );
  },
  getSecurityCategorization({ commit, getters }, AppliedTo) {
    console.log(
      "\nsecuritycategorization.getSecurityCategorization() ... start"
    );

    var securityCategorization = getters.getSecurityCategorizationByAppliedTo(
      AppliedTo
    );

    if (securityCategorization) {
      commit("SET_SECURITYCATEGORIZATION", securityCategorization);
    } else {
      Service.getSecurityCategorization(securityCategorization)
        .then(response => {
          commit("SET_SECURITYCATEGORIZATION", response.data[2]);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    }

    console.log("\nsecuritycategorization.getSecurityCategorization() ... end");
  }
};

export const getters = {
  getSecurityCategorizationByAppliedTo: state => AppliedTo => {
    console.log(
      "\nsecuritycategorization.getSecurityCategorizationByAppliedTo() ... start"
    );

    return state.securityCategorizations.find(
      securityCategorization => securityCategorization.AppliedTo === AppliedTo
    );
  }
};
