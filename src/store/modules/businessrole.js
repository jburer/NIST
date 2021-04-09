import Service from "@/services/Service.js";

export const namespaced = true;

export const state = {
  businessrole: {},
  businessroles: []
};

export const mutations = {
  SET_BUSSINESSROLE(state, businessrole) {
    state.businessrole = businessrole;
  },
  SET_BUSSINESSROLES(state, businessroles) {
    state.businessroles = businessroles;
  }
};

export const actions = {
  getBusinessRoles({ commit }) {
    console.log("\nbusinessrole.getBusinessRoles() ... start");

    Service.getBusinessRoles()
      .then(response => {
        commit("SET_BUSSINESSROLES", response.data);
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });

    console.log("\nbusinessrole.getBusinessRoles() ... end");
  },
  getBusinessRole({ commit, getters }, BusinessRole) {
    console.log("\nbusinessrole.getBusinessRole() ... start");

    var businessrole = getters.getBusinessRoleByRole(BusinessRole);

    if (businessrole) {
      commit("SET_BUSSINESSROLE", businessrole);
    } else {
      Service.getBusinessRole(businessrole)
        .then(response => {
          commit("SET_BUSSINESSROLE", response.data);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    }

    console.log("\nbusinessrole.getBusinessRole() ... end");
  }
};

export const getters = {
  getBusinessRoleByRole: state => BusinessRole => {
    console.log("\nbusinessrole.getBusinessRoleByRole() ... start");

    return state.businessroles.find(
      businessrole => businessrole.Role === BusinessRole
    );
  }
};
