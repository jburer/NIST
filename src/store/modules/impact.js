import Service from "@/services/Service.js";

export const namespaced = true;

export const state = {
  impact: {},
  impacts: []
};

export const mutations = {
  SET_IMPACT(state, impact) {
    state.impact = impact;
  },
  SET_IMPACTS(state, impacts) {
    state.impacts = impacts;
  }
};

export const actions = {
  getImpacts({ commit }) {
    console.log("\nimpact.getImpacts() ... start");

    Service.getFIPS199()
      .then(response => {
        console.log(response.data[1].Impacts);
        commit("SET_IMPACTS", response.data[1].Impacts);
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });

    console.log("\nimpact.getImpacts() ... end");
  },
  getImpact({ commit, getters }, Impact) {
    var impact = getters.getImpactByImpact(Impact);

    if (impact) {
      commit("SET_IMPACT", impact);
    } else {
      Service.getImpact(impact)
        .then(response => {
          commit("SET_IMPACT", response.data[1]);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    }
  }
};

export const getters = {
  getImpactByImpact: state => Impact => {
    return state.impacts.find(impact => impact.Impact === Impact);
  }
};
