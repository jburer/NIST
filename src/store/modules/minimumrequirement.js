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
  SET_MINIMUMREQUIREMENTS(state, minimumrequirements) {
    state.minimumrequirements = minimumrequirements;
  }
};

export const actions = {
  getMinimumRequirements({ commit }) {
    console.log("\nminimumrequirement.getMinimumRequirements():  start");
    Service.getMinimumRequirements()
      .then(response => {
        console.log(response);
        commit("SET_MINIMUMREQUIREMENTS", response.data);
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  },
  getMinimumRequirement({ commit, getters }, MinimumRequirement) {
    console.log("\nminimumrequirement.getMinimumRequirement():  start");
    console.log(
      " ... minimumrequirement.getMinimumRequirement.MinimumRequirement = " +
        MinimumRequirement
    );
    var minimumrequirement = getters.getMinimumRequirementByMinimumRequirement(
      MinimumRequirement
    );
    console.log(
      " ... minimumrequirement.getMinimumRequirement.minimumrequirement = " +
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
      "\nminimumrequirement.getMinimumRequirementByMinimumRequirement:  start"
    );
    console.log(
      " ... minimumrequirement.getMinimumRequirementByMinimumRequirement.MinimumRequirement = " +
        MinimumRequirement
    );
    return state.minimumrequirements.find(
      minimumrequirement =>
        minimumrequirement.MinimumRequirement === MinimumRequirement
    );
  }
};
