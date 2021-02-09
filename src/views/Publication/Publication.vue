<template>
  <div class="step-header">
    <table>
      <tr>
        <td align="left">Publication:</td>
        <td align="left">{{ publication.Publication }}</td>
      </tr>
      <tr>
        <td align="left">Publication:</td>
        <td align="left">{{ publication.Title }} {{ publication.SubTitle }}</td>
      </tr>
      <tr>
        <td align="left"><nobr>Release Date:</nobr></td>
        <td align="left">{{ publication.ReleaseDate }}</td>
      </tr>
      <tr>
        <td align="left">Publication:</td>
        <td align="left">
          <a :href="publication.Link">{{ publication.Link }}</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["Publication"],
  created() {
    console.log("\n... Publication.create():  start");
    console.log(
      "Publication.create().this.Publication type = " + typeof this.Publication
    );

    //this.$store.dispatch("publication/getPublications");
    this.getPublication(this.Publication);

    console.log("Publication.create().this.Publication = " + this.Publication);
    console.log(
      "Publication.create().this.Publication type = " + typeof this.Publication
    );

    console.log("Publication.create().this.publication = " + this.publication);
    console.log(
      "Publication.create().this.publication type = " + typeof this.publication
    );
  },
  computed: mapState({
    publication: state => state.publication.publication
  }),
  methods: {
    ...mapActions("publication", ["getPublication"])
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
