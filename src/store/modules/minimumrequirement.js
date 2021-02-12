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
  getMinimumRequirement({ commit, getters }, ControlFamilyID) {
    console.log("\nminimumrequirement.getMinimumRequirement():  start");
    console.log(
      " ... minimumrequirement.getMinimumRequirement.MinimumRequirement = " +
        ControlFamilyID
    );
    var minimumrequirement = getters.getMinimumRequirementByControlFamilyID(
      ControlFamilyID
    );
    console.log(
      " ... minimumrequirement.getMinimumRequirement.minimumrequirement = " +
        minimumrequirement
    );

    if (minimumrequirement) {
      commit("SET_MINIMUMREQUIREMENT", minimumrequirement);
    } else {
      Service.getMinimumRequirement(ControlFamilyID)
        .then(response => {
          console.log(response);
          console.log(response.data[0]);
          commit("SET_MINIMUMREQUIREMENT", response.data[0]);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    }
  }
};

export const getters = {
  getMinimumRequirementByControlFamilyID: state => ControlFamilyID => {
    console.log(
      "\nminimumrequirement.getMinimumRequirementByControlFamilyID:  start"
    );
    console.log(
      " ... minimumrequirement.getMinimumRequirementByControlFamilyID.ControlFamilyID = " +
        ControlFamilyID
    );
    return state.minimumrequirements.find(
      minimumrequirement =>
        minimumrequirement.ControlFamilyID === ControlFamilyID
    );
  }
};
