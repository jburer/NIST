import Service from "@/services/Service.js";

export const namespaced = true;

export const state = {
  minimumrequirement: {},
  minimumrequirements: []
};

export const mutations = {
  SET_MINIMUMREQUIREMENT(state, minimumrequirement) {
    state.minimumrequirement = minimumrequirement;
  },
  /*
  SET_MINIMUMREQUIREMENTS_TOTAL(state, minimumrequirementsTotal) {
    state.minimumrequirementsTotal = minimumrequirementsTotal;
  },
  */
  SET_MINIMUMREQUIREMENTS(state, minimumrequirements) {
    state.minimumrequirements = minimumrequirements;
  }
};

export const actions = {
  getMinimumRequirements({ commit }) {
    console.log("\n... minimumrequirement.getMinimumRequirements():  start");
    Service.getMinimumRequirements()
      .then(response => {
        console.log(response);
        commit("SET_MINIMUMREQUIREMENTS", response.data);
        /*
        commit(
          "SET_MINIMUMREQUIREMENTS_TOTAL",
          parseInt(response.headers["x-total-count"])
        );
        */
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  },
  getMinimumRequirement({ commit, getters }, MinimumRequirement) {
    console.log("\n... minimumrequirement.getMinimumRequirement():  start");
    console.log(
      "minimumrequirement.getMinimumRequirement.MinimumRequirement = " +
        MinimumRequirement
    );
    var minimumrequirement = getters.getMinimumRequirementByMinimumRequirement(
      MinimumRequirement
    );
    console.log(
      "minimumrequirement.getMinimumRequirement.minimumrequirement = " +
        minimumrequirement
    );

    if (minimumrequirement) {
      commit("SET_MINIMUMREQUIREMENT", minimumrequirement);
    } else {
      Service.getMinimumRequirement(minimumrequirement)
        .then(response => {
          console.log(response);
          commit("SET_MINIMUMREQUIREMENT", response.data);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    }
  }
};

export const getters = {
  getMinimumRequirementByMinimumRequirement: state => MinimumRequirement => {
    console.log(
      "\n... minimumrequirement.getMinimumRequirementByMinimumRequirement:  start"
    );
    console.log(
      "minimumrequirement.getMinimumRequirementByMinimumRequirement.MinimumRequirement = " +
        MinimumRequirement
    );
    return state.minimumrequirements.find(
      minimumrequirement =>
        minimumrequirement.MinimumRequirement === MinimumRequirement
    );
  }
};
