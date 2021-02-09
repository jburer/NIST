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
  /*
  SET_PUBLICATIONS_TOTAL(state, publicationsTotal) {
    state.publicationsTotal = publicationsTotal;
  },
  */
  SET_PUBLICATIONS(state, publications) {
    state.publications = publications;
  }
};

export const actions = {
  getPublications({ commit }) {
    console.log("\n... publication.getPublications():  start");
    Service.getPublications()
      .then(response => {
        console.log(response);
        commit("SET_PUBLICATIONS", response.data);
        /*
        commit(
          "SET_PUBLICATIONS_TOTAL",
          parseInt(response.headers["x-total-count"])
        );
        */
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  },
  getPublication({ commit, getters }, Publication) {
    console.log("\n... publication.getPublication():  start");
    console.log("publication.getPublication.Publication = " + Publication);
    var publication = getters.getPublicationByPublication(Publication);
    console.log("publication.getPublication.publication = " + publication);

    if (publication) {
      commit("SET_PUBLICATION", publication);
    } else {
      Service.getPublication(publication)
        .then(response => {
          console.log(response);
          commit("SET_PUBLICATION", response.data);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    }
  }
};

export const getters = {
  getPublicationByPublication: state => Publication => {
    console.log("\n... publication.getPublicationByPublication:  start");
    console.log(
      "publication.getPublicationByPublication.Publication = " + Publication
    );
    return state.publications.find(
      publication => publication.Publication === Publication
    );
  }
};
