import Service from "@/services/Service.js";

export const namespaced = true;

export const state = {
  step: {},
  steps: [],
  stepsTotal: Number
};

export const mutations = {
  SET_STEPS(state, steps) {
    state.steps = steps;
  },
  /*
  SET_STEPS_TOTAL(state, stepsTotal) {
    state.stepsTotal = stepsTotal;
  },
  */
  SET_STEP(state, step) {
    state.step = step;
  }
};

export const actions = {
  getSteps({ commit }) {
    console.log("\n ...steps.getSteps():  start");
    Service.getSteps()
      .then(response => {
        commit("SET_STEPS", response.data);
        //commit("SET_STEPS_TOTAL", parseInt(response.headers["x-total-count"]));
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  },
  getStep({ commit, getters }, id) {
    console.log("\n ...steps.getStep():  start");
    var step = getters.getStepById(id);
    console.log("step.getStep().step.id = " + step.id);

    if (step) {
      commit("SET_STEP", step);
    } else {
      Service.getStep(id)
        .then(response => {
          commit("SET_STEP", response.data);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    }
  }
};

export const getters = {
  getStepById: state => id => {
    console.log("\n... steps.getStepById():  start");
    console.log("steps.getStepById().id = " + id);
    return state.steps.find(step => step.id === id);
  }
};
