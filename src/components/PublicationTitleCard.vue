<template>
  <div>
    <h3 align="left">
      {{ publication.publication.Title }}<br />
      <span v-if="publication.publication.SubTitle">{{
        publication.publication.SubTitle
      }}</span>
      <a :href="publication.publication.Link">{{
        publication.publication.Publication
      }}</a>
    </h3>
    <h3 align="left"></h3>
  </div>
</template>

<script>
export default {
  props: {
    publication: Object
  }
};
</script>

<style scoped></style>
