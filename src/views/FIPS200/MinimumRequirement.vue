<template>
  <div>
    <table>
      <tr>
        <td align="left">
          <span v-if="minimumrequirement.MinimumRequirement.length > 1">
            Minimum Requirements:
          </span>
          <span v-else>Minimum Requirement:</span>
        </td>
      </tr>
      <tr>
        <td align="left">
          <ul>
            <li
              v-for="requirement in minimumrequirement.MinimumRequirement"
              :key="requirement"
            >
              {{ requirement }}
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
    minimumrequirement: Object
  }
};
</script>

<style scoped></style>
