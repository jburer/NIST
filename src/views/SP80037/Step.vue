<template>
  <div>
    <h1 class="title">{{ step.Step }} {{ step.ID }}</h1>
    <SubCard v-for="task in step.Tasks" :key="task.ID" :task="task" />
    <!--<div class="step-header">
      <p v-for="task in step.Tasks" :key="task.ID">
        {{ task.ID }}
        {{ task.Title }}
      </p>
    </div>-->
  </div>
</template>

<script>
import SubCard from "@/components/SubCard.vue";
import { mapState, mapActions } from "vuex";

export default {
  props: ["id"],
  components: {
    SubCard
  },
  created() {
    console.log("Step.create() ...");
    this.getStep(this.id);
    console.log("this.getStep(this.id) = " + this.getStep(this.id));
  },
  computed: mapState({
    step: state => state.step.step
  }),
  methods: {
    ...mapActions("step", ["getStep"])
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
