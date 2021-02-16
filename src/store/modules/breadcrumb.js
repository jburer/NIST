export const namespaced = true;

export const state = {
  breadcrumbs: []
};

export const mutations = {
  /*
  SET_BREADCRUMB(state, breadcrumb) {
    console.log("\nbreadcrumb.SET_BREADCRUMB()  start");
    state.breadcrumb = breadcrumb;
  },
  */
  SET_BREADCRUMBS(state, breadcrumbs) {
    console.log("\nbreadcrumb.SET_BREADCRUMBS()  start");
    state.breadcrumbs = breadcrumbs;
    console.log(
      " ... breadcrumb.SET_BREADCRUMBS() state.breadcrumbs = " +
        state.breadcrumbs
    );
  }
};

export const actions = {
  /*
  setBreadcrumb({ commit }, Breadcrumb) {
    console.log("\nbreadcrumb.setBreadcrumb():  start");
    console.log(" ... breadcrumb.setBreadcrumb.Breadcrumb = " + Breadcrumb);
    commit("SET_BREADCRUMB", Breadcrumb);
  },
  */
  setBreadcrumbs({ commit }, Breadcrumbs) {
    console.log("\nbreadcrumb.setBreadcrumbs():  start");
    console.log(" ... breadcrumb.setBreadcrumbs.Breadcrumb = " + Breadcrumbs);
    commit("SET_BREADCRUMBS", Breadcrumbs);
  }
  /*
  getBreadcrumb({ commit, getters }, Breadcrumb) {
    console.log("\nbreadcrumb.getBreadcrumb():  start");
    console.log(" ... breadcrumb.getBreadcrumb.Breadcrumb = " + Breadcrumb);
    var breadcrumb = getters.getBreadcrumbByBreadcrumb(Breadcrumb);
    console.log(" ... breadcrumb.getBreadcrumb.breadcrumb = " + breadcrumb);
    if (breadcrumb) {
      console.log("\n\nhere\n\n");
    } else {
      //commit("SET_BREADCRUMB", Breadcrumb);
      commit("SET_BREADCRUMBS", Breadcrumb);
    }
  }
  */
};
/*
export const getters = {
  getBreadcrumbByBreadcrumb: state => Breadcrumb => {
    console.log("\nbreadcrumb.getBreadcrumbByBreadcrumb:  start");
    console.log(
      " ... breadcrumb.getBreadcrumbByBreadcrumb.Breadcrumb = " + Breadcrumb
    );
    return state.breadcrumbs.find(
      breadcrumb => breadcrumb.Breadcrumb === Breadcrumb
    );
  }
};
*/
