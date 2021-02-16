import Service from "@/services/Service.js";

export const namespaced = true;

export const state = {
  publication: {},
  publications: []
};

export const mutations = {
  SET_PUBLICATION(state, publication) {
    console.log("\npublication.SET_PUBLICATION()  start");
    console.log(
      " ... publication.SET_PUBLICATION():  publication = " + publication
    );
    state.publication = publication;
  },
  SET_PUBLICATIONS(state, publications) {
    console.log("\npublication.SET_PUBLICATIONS()  start");
    console.log(
      " ... publication.SET_PUBLICATIONS().publications = " + publications
    );
    state.publications = publications;
  }
};

export const actions = {
  getPublications({ commit }) {
    console.log("\npublication.getPublications():  start");
    Service.getPublications()
      .then(response => {
        //console.log(response.data);
        commit("SET_PUBLICATIONS", response.data);
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  },
  getPublication({ commit, getters }, Publication) {
    console.log("\npublication.getPublication():  start");
    console.log(
      " ... publication.getPublication():  Publication = " + Publication
    );
    var publication = getters.getPublicationByPublication(Publication);

    if (publication) {
      commit("SET_PUBLICATION", publication);
    } else {
      Service.getPublication(Publication)
        .then(response => {
          //console.log(response);
          //console.log(response.data[0]);
          commit("SET_PUBLICATION", response.data[0]);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    }
  }
};

export const getters = {
  getPublicationByPublication: state => Publication => {
    console.log("\npublication.getPublicationByPublication:  start");
    console.log(
      " ... publication.getPublicationByPublication.Publication = " +
        Publication
    );
    return state.publications.find(
      publication => publication.Publication === Publication
    );
  }
};
