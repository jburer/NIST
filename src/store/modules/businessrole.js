import Service from "@/services/Service.js";

export const namespaced = true;

export const state = {
  businessrole: {},
  businessroles: []
};

export const mutations = {
  SET_BUSSINESSROLE(state, businessrole) {
    console.log("\nbusinessrole.SET_BUSSINESSROLE()  start");
    console.log(
      " ... businessrole.SET_BUSSINESSROLE():  businessrole = " + businessrole
    );
    state.businessrole = businessrole;
  },
  SET_BUSSINESSROLES(state, businessroles) {
    console.log("\nbusinessrole.SET_BUSSINESSROLES()  start");
    console.log(
      " ... businessrole.SET_BUSSINESSROLES():  businessroles = " +
        businessroles
    );
    state.businessroles = businessroles;
  }
};

export const actions = {
  getBusinessRoles({ commit }) {
    console.log("\nbusinessrole.getBusinessRoles():  start");
    Service.getBusinessRoles()
      .then(response => {
        //console.log(response);
        commit("SET_BUSSINESSROLES", response.data);
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  },
  getBusinessRole({ commit, getters }, BusinessRole) {
    console.log("\nbusinessrole.getBusinessRole():  start");
    console.log(
      " ... businessrole.getBusinessRole.BusinessRole = " + BusinessRole
    );
    var businessrole = getters.getBusinessRoleByRole(BusinessRole);

    if (businessrole) {
      commit("SET_BUSSINESSROLE", businessrole);
    } else {
      Service.getBusinessRole(businessrole)
        .then(response => {
          //console.log(response);
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
    console.log("\nbusinessrole.getBusinessRoleByRole():  start");
    console.log(
      " ... businessrole.getBusinessRoleByRole.BusinessRole = " + BusinessRole
    );
    return state.businessroles.find(
      businessrole => businessrole.Role === BusinessRole
    );
  }
};
