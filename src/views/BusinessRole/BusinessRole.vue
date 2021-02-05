<template>
  <div class="step-header">
    <table>
      <tr>
        <td align="left">Publication:</td>
        <td align="left">{{ businessrole }}</td>
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

    this.$store.dispatch("businessrole/getBusinessRoles");
    this.getBusinessRole(this.BusinessRole);

    console.log(
      "BusinessRole.create().this.BusinessRole = " + this.BusinessRole
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
