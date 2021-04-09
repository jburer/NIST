import Service from "@/services/Service.js";

export const namespaced = true;

export const state = {
  securityObjective: {},
  securityObjectives: []
};

export const mutations = {
  SET_SECURITYOBJECTIVE(state, securityObjective) {
    state.securityObjective = securityObjective;
  },
  SET_SECURITYOBJECTIVES(state, securityObjectives) {
    state.securityObjectives = securityObjectives;
  }
};

export const actions = {
  getSecurityObjectives({ commit }) {
    console.log("\nsecurityobjective.getSecurityObjectives() ... start");

    Service.getFIPS199()
      .then(response => {
        console.log(response.data[0].SecurityObjectives);
        commit("SET_SECURITYOBJECTIVES", response.data[0].SecurityObjectives);
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });

    console.log("\nsecurityobjective.getSecurityObjectives() ... end");
  },
  getSecurityObjective({ commit, getters }, SecurityObjective) {
    console.log("\nsecurityobjective.getSecurityObjective() ... start");

    var securityObjective = getters.getSecurityObjectiveBySecurityObjective(
      SecurityObjective
    );

    if (securityObjective) {
      commit("SET_SECURITYOBJECTIVE", securityObjective);
    } else {
      Service.getSecurityObjective(securityObjective)
        .then(response => {
          commit("SET_SECURITYOBJECTIVE", response.data[0]);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    }

    console.log("\nsecurityobjective.getSecurityObjective() ... end");
  }
};

export const getters = {
  getSecurityObjectiveBySecurityObjective: state => SecurityObjective => {
    console.log(
      "\nsecurityobjective.getSecurityObjectiveBySecurityObjective() ... start"
    );

    return state.securityObjectives.find(
      securityObjective =>
        securityObjective.SecurityObjective === SecurityObjective
    );
  }
};
