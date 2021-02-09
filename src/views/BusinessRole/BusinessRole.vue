<template>
  <div class="step-header">
    <table>
      <tr>
        <td align="left">{{ businessrole.Role }}:</td>
      </tr>
      <tr>
        <td align="left">
          <p
            v-for="responsibility in businessrole.Responsibilities"
            :key="responsibility.id"
          >
            <span v-if="typeof responsibility === 'object'">
              <ul>
                <li v-for="item in responsibility.List" :key="item">
                  {{ item }}
                </li>
              </ul>
            </span>
            <span v-else>
              {{ responsibility }}
            </span>
          </p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["BusinessRole"],
  created() {
    console.log("\n... BusinessRole.create():  start");
    console.log(
      "BusinessRole.create().this.BusinessRole type = " +
        typeof this.BusinessRole
    );

    //this.$store.dispatch("businessrole/getBusinessRoles");
    this.getBusinessRole(this.BusinessRole);

    console.log(
      "BusinessRole.create().this.BusinessRole = " + this.BusinessRole
    );
    console.log(
      "BusinessRole.create().this.BusinessRole type = " +
        typeof this.BusinessRole
    );

    console.log(
      "BusinessRole.create().this.businessrole = " + this.businessrole
    );
    console.log(
      "BusinessRole.create().this.businessrole type = " +
        typeof this.businessrole
    );
  },
  computed: mapState({
    businessrole: state => state.businessrole.businessrole
  }),
  methods: {
    ...mapActions("businessrole", ["getBusinessRole"])
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
