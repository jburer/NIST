<template>
  <div>
    <Title :publication="Publication" />
    <Card v-for="step in step.steps" :key="step.id" :step="step" />
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Card from "@/components/Card.vue";
import { mapState } from "vuex";

export default {
  props: {
    Publication: Object
  },
  components: {
    Title,
    Card
  },
  created() {
    console.log("\nSP80037.created():  start");

    this.Publication = "SP 800-37 Rev. 2";
    console.log(
      " ... SP80037.created().this.Publication = " + this.Publication
    );

    this.$store.dispatch("breadcrumb/setBreadcrumbs", [
      { document: "SP 800-37 Rev. 2", name: "SP80037" }
    ]);

    this.$store.dispatch("step/getSteps");
  },
  computed: {
    ...mapState(["step", "breadcrumb"])
  }
};
</script>
