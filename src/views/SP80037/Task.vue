<template>
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
          <ul>
            <li v-for="outcome in task.Outcomes" :key="outcome">
              {{ outcome }}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td align="left">Potential Inputs:</td>
      </tr>
      <tr>
        <td align="left">
          <ul>
            <li
              v-for="potentialInput in task.PotentialInputs"
              :key="potentialInput"
            >
              {{ potentialInput }}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td align="left">Expected Outputs:</td>
      </tr>
      <tr>
        <td align="left">
          <ul>
            <li
              v-for="expectedOutput in task.ExpectedOutputs"
              :key="expectedOutput"
            >
              {{ expectedOutput }}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td align="left">Primary Responsibility:</td>
      </tr>
      <tr>
        <td align="left">
          <ul>
            <li
              v-for="responsibility in task.PrimaryResponsibility.Roles.Role"
              :key="responsibility"
            >
              <router-link
                class="step-link"
                :to="{
                  name: 'businessrole',
                  params: {
                    BusinessRole: responsibility
                  }
                }"
              >
                {{ responsibility }}
              </router-link>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td align="left">Supporting Roles:</td>
      </tr>
      <tr>
        <td align="left">
          <ul>
            <li
              v-for="supportingRole in task.SupportingRoles.Roles.Role"
              :key="supportingRole"
            >
              {{ supportingRole }}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td align="left">
          <div v-for="discussion in task.Discussion" :key="discussion">
            <p align="left">{{ discussion }}</p>
          </div>
        </td>
      </tr>
      <tr>
        <td align="left">References:</td>
      </tr>
      <tr>
        <td align="left">
          <ul>
            <li
              v-for="reference in task.References.Publications.Publication"
              :key="reference"
            >
              <router-link
                class="step-link"
                :to="{
                  name: 'publication',
                  params: {
                    Publication: reference
                  }
                }"
              >
                {{ reference }}
              </router-link>
            </li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  }
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
