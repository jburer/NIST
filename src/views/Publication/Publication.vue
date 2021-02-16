<template>
  <div class="publication">
    <table>
      <tr>
        <td align="left">Publication:</td>
        <td align="left">{{ publication.publication.Publication }}</td>
      </tr>
      <tr>
        <td align="left">Publication:</td>
        <td align="left">
          {{ publication.publication.Title }}
          {{ publication.publication.SubTitle }}
        </td>
      </tr>
      <tr>
        <td align="left"><nobr>Release Date:</nobr></td>
        <td align="left">{{ publication.publication.ReleaseDate }}</td>
      </tr>
      <tr>
        <td align="left">Publication:</td>
        <td align="left">
          <a :href="publication.publication.Link" target="_blank">{{
            publication.publication.Link
          }}</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  created() {
    console.log("\n... Publication.create():  start");
  },
  computed: {
    ...mapState(["publication"])
  },
  methods: {
    ...mapActions("publication", ["getPublication"])
  }
};
</script>

<style scoped>
.publication {
  padding: 15px;
  text-align: left;
}
</style>
