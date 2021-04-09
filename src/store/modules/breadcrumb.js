export const namespaced = true;

export const state = {
  breadcrumbs: []
};

export const mutations = {
  SET_BREADCRUMBS(state, breadcrumbs) {
    state.breadcrumbs = breadcrumbs;
  }
};

export const actions = {
  setBreadcrumbs({ commit }, Breadcrumbs) {
    console.log("\nbreadcrumb.setBreadcrumbs() ... start");

    commit("SET_BREADCRUMBS", Breadcrumbs);

    console.log("\nbreadcrumb.setBreadcrumbs() ... end");
  }
};
