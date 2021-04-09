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
    console.log("\nminimumrequirement.getMinimumRequirements() ... start");

    Service.getMinimumRequirements()
      .then(response => {
        commit("SET_MINIMUMREQUIREMENTS", response.data);
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });

    console.log("\nminimumrequirement.getMinimumRequirements() ... end");
  },
  getMinimumRequirement({ commit, getters }, ControlFamilyID) {
    console.log("\nminimumrequirement.getMinimumRequirement() ... start");

    var minimumrequirement = getters.getMinimumRequirementByControlFamilyID(
      ControlFamilyID
    );

    if (minimumrequirement) {
      commit("SET_MINIMUMREQUIREMENT", minimumrequirement);
    } else {
      Service.getMinimumRequirement(ControlFamilyID)
        .then(response => {
          commit("SET_MINIMUMREQUIREMENT", response.data[0]);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    }

    console.log("\nminimumrequirement.getMinimumRequirement() ... end");
  }
};

export const getters = {
  getMinimumRequirementByControlFamilyID: state => ControlFamilyID => {
    console.log(
      "\nminimumrequirement.getMinimumRequirementByControlFamilyID() ... start"
    );

    return state.minimumrequirements.find(
      minimumrequirement =>
        minimumrequirement.ControlFamilyID === ControlFamilyID
    );
  }
};
