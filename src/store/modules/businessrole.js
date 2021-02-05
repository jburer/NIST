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
  SET_BUSSINESSROLES_TOTAL(state, businessrolesTotal) {
    state.businessrolesTotal = businessrolesTotal;
  },
  SET_BUSSINESSROLES(state, businessroles) {
    state.businessroles = businessroles;
  }
};

export const actions = {
  getBusinessRoles({ commit }) {
    console.log("\n... businessrole.getBusinessRoles():  start");
    Service.getBusinessRoles()
      .then(response => {
        console.log(response);
        commit("SET_BUSSINESSROLES", response.data);
        commit(
          "SET_BUSSINESSROLES_TOTAL",
          parseInt(response.headers["x-total-count"])
        );
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  },
  getBusinessRole({ commit, getters }, id) {
    console.log("\n... businessrole.getBusinessRole():  start");
    console.log("businessrole.getBusinessRole.id = " + id);
    var businessrole = getters.getBusinessRoleByRole(id);
    console.log("businessroles.getBusinessRole.businessrole = " + businessrole);

    if (businessrole) {
      commit("SET_BUSSINESSROLE", businessrole);
    } else {
      Service.getBusinessRole(id)
        .then(response => {
          console.log(response);
          commit("SET_BUSSINESSROLE", response.data);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    }
  }
};

export const getters = {
  getBusinessRoleByRole: state => BusinessRole => {
    console.log("\n... businessrole.getBusinessRoleByRole():  start");
    console.log(
      "businessrole.getBusinessRoleByRole.BusinessRole = " + BusinessRole
    );
    return state.businessroles.find(
      businessrole => businessrole.BusinessRole === BusinessRole
    );
  }
};
