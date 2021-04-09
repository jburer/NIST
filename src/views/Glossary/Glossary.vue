<template>
  <div>
    <Title :Title="title" />
    <TermCard v-for="term in sortedGlossary" :key="term.Term" :Term="term" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Title from "@/components/Title.vue";
import TermCard from "@/components/TermCard.vue";

export default {
  data: () => ({
    title: "Glossary",
    sortedGlossary: {}
  }),
  components: {
    Title,
    TermCard
  },
  created() {
    console.log("\nGlossary.created() ... start");

    //Breadcrumbs
    this.$store.dispatch("breadcrumb/setBreadcrumbs", [
      {
        document: "Glossary",
        name: "glossary"
      }
    ]);

    //Data
    this.$store.dispatch("glossary/getGlossary");
    this.sortedGlossary = this.glossary.glossary.sort((a, b) =>
      a.Term.localeCompare(b.Term)
    );

    console.log("\nGlossary.created() ... end");
  },
  computed: {
    ...mapState(["breadcrumb", "glossary"])
  }
};
</script>
