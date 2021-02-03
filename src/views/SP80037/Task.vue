<template>
  <div>
    <div class="step-header">
      <table>
        <tr>
          <td align="left">{{ task.ID }} {{ task.Title }}</td>
        </tr>
        <tr>
          <td align="left">{{ task.Task }}</td>
        </tr>
        <tr>
          <td><p /></td>
        </tr>
        <tr>
          <td align="left">Outcomes:</td>
        </tr>
        <tr>
          <td align="left">
            <ul v-for="outcome in task.Outcomes" :key="outcome">
              <li>{{ outcome }}</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td><p /></td>
        </tr>
        <tr>
          <td align="left">Potential Inputs:</td>
        </tr>
        <tr>
          <td align="left">
            <ul
              v-for="potentialInput in task.PotentialInputs"
              :key="potentialInput"
            >
              <li>{{ potentialInput }}</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td><p /></td>
        </tr>
        <tr>
          <td align="left">Expected Outputs:</td>
        </tr>
        <tr>
          <td align="left">
            <ul
              v-for="expectedOutput in task.ExpectedOutputs"
              :key="expectedOutput"
            >
              <li>{{ expectedOutput }}</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td align="left">Primary Responsibility:</td>
        </tr>
        <tr>
          <td align="left">
            <ul
              v-for="responsibility in task.PrimaryResponsibility.Roles.Role"
              :key="responsibility"
            >
              <li>{{ responsibility }}</li>
            </ul>
          </td>
        </tr>
      </table>

      <div v-for="discussion in task.Discussion" :key="discussion">
        <p align="left">{{ discussion }}</p>
      </div>
      {{ task.References }}
    </div>
  </div>
</template>

<script>
//import { mapState, mapActions } from "vuex";

export default {
  //props: ["TaskID", "StepID"],
  props: {
    task: Object
  }
  /*created() {
    this.getStep(this.ID);
    console.log("this.getStep(this.ID) = " + this.getStep(this.ID));
  },
  computed: mapState({
    step: state => state.step.step
  }),
  methods: {
    ...mapActions("step", ["getStep"])
  }*/
};
</script>

<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.step-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
