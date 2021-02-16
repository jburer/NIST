export const namespaced = true;

export const state = {
  breadcrumbs: []
};

export const mutations = {
  SET_BREADCRUMBS(state, breadcrumbs) {
    console.log("\nbreadcrumb.SET_BREADCRUMBS()  start");
    console.log(
      " ... breadcrumb.SET_BREADCRUMBS(): state.breadcrumbs = " + breadcrumbs
    );
    state.breadcrumbs = breadcrumbs;
  }
};

export const actions = {
  setBreadcrumbs({ commit }, Breadcrumbs) {
    console.log("\nbreadcrumb.setBreadcrumbs()  start");
    console.log(
      " ... breadcrumb.setBreadcrumbs():  Breadcrumb = " + Breadcrumbs
    );
    commit("SET_BREADCRUMBS", Breadcrumbs);
  }
};
