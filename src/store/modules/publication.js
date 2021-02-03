import Service from "@/services/Service.js";

export const namespaced = true;

export const state = {
  publication: {},
  publications: []
};

export const mutations = {
  SET_PUBLICATION(state, publication) {
    state.publication = publication;
  },
  SET_PUBLICATIONS_TOTAL(state, publicationsTotal) {
    state.publicationsTotal = publicationsTotal;
  },
  SET_PUBLICATIONS(state, publications) {
    state.publications = publications;
  }
};

export const actions = {
  getPublications({ commit }, { perPage, page }) {
    console.log("publication.getPublications ... start");
    Service.getPublications(perPage, page)
      .then(response => {
        commit("SET_PUBLICATIONS", response.data);
        commit(
          "SET_PUBLICATIONS_TOTAL",
          parseInt(response.headers["x-total-count"])
        );
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  },
  getPublication({ commit, getters }, id) {
    console.log("publications.getPublication ... start");
    console.log("publications.getPublication.id = " + id);
    var publication = getters.getPublicationById(id);
    console.log("publications.getPublication.publication = " + publication);

    if (publication) {
      commit("SET_PUBLICATION", publication);
    } else {
      Service.getPublication(id)
        .then(response => {
          commit("SET_PUBLICATION", response.data);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    }
  }
};

export const getters = {
  getPublicationById: state => id => {
    console.log("publication.getPublicationById ... start");
    console.log("publication.getPublicationById.id = " + id);
    return state.publications.find(publication => publication.id === id);
  }
};
