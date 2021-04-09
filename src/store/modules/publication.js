import Service from "@/services/Service.js";

export const namespaced = true;

export const state = {
  publication: {},
  publications: [],
  PublicationID: {}
};

export const mutations = {
  SET_PUBLICATION(state, publication) {
    state.publication = publication;
  },
  SET_PUBLICATIONID(state, PublicationID) {
    state.PublicationID = PublicationID;
  },
  SET_PUBLICATIONS(state, publications) {
    state.publications = publications;
  }
};

export const actions = {
  getPublications({ commit }) {
    console.log("\npublication.getPublications() ... start");

    Service.getPublications()
      .then(response => {
        commit("SET_PUBLICATIONS", response.data);
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });

    console.log("\npublication.getPublications() ... end");
  },
  getPublication({ commit, getters }, { Publication, PublicationID }) {
    console.log("\npublication.getPublication() ... start");

    var publication = getters.getPublicationByPublication(Publication);

    if (publication) {
      commit("SET_PUBLICATION", publication);
      commit("SET_PUBLICATIONID", PublicationID);
    } else {
      Service.getPublication(Publication)
        .then(response => {
          commit("SET_PUBLICATION", response.data[0]);
          commit("SET_PUBLICATIONID", PublicationID);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    }

    console.log("\npublication.getPublication() ... end");
  }
};

export const getters = {
  getPublicationByPublication: state => Publication => {
    console.log("\npublication.getPublicationByPublication ... start");

    return state.publications.find(
      publication => publication.Publication === Publication
    );
  }
};
