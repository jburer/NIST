<template>
  <router-link
    class="step-link"
    :to="{
      name: 'securityObjective',
      params: { SecurityObjective: SecurityObjective.SecurityObjective }
    }"
  >
    <div class="step-card -shadow">
      <table>
        <tr>
          <td align="left">
            <span class="eyebrow">{{
              SecurityObjective.SecurityObjective
            }}</span>
          </td>
        </tr>
      </table>

      <span></span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["SecurityObjective"]
};
</script>

<style scoped>
.step-card {
  padding: 0 15px;
  /*margin-bottom: 24px;*/
  transition: all 0.2s linear;
  cursor: pointer;
}
.step-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.step-card > .title {
  margin: 0;
}

.step-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
