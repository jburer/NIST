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
  getBusinessRoles({ commit }, { perPage, page }) {
    console.log("businessrole.getBusinessRoles ... start");
    Service.getBusinessRoles(perPage, page)
      .then(response => {
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
    console.log("businessroles.getBusinessRole ... start");
    console.log("businessroles.getBusinessRole.id = " + id);
    var businessrole = getters.getBusinessRoleById(id);
    console.log("businessroles.getBusinessRole.businessrole = " + businessrole);

    if (businessrole) {
      commit("SET_BUSSINESSROLE", businessrole);
    } else {
      Service.getBusinessRole(id)
        .then(response => {
          commit("SET_BUSSINESSROLE", response.data);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    }
  }
};

export const getters = {
  getBusinessRoleById: state => id => {
    console.log("businessrole.getBusinessRoleById ... start");
    console.log("businessrole.getBusinessRoleById.id = " + id);
    return state.businessroles.find(businessrole => businessrole.id === id);
  }
};
