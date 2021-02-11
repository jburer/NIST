<template>
  <div id="nav" class="nav">
    <span>
      <router-link to="/" class="nav-item">NIST</router-link>
    </span>
    <span v-if="breadcrumb.breadcrumbs.length > 0">
      <span v-for="breadcrumb in breadcrumb.breadcrumbs" :key="breadcrumb.name">
        <span class="separator">
          |
        </span>
        <span v-if="breadcrumb.name">
          <router-link :to="`/${breadcrumb.name}`" class="nav-item"
            >{{ breadcrumb.document }}
          </router-link>
        </span>
        <span v-else class="nav-item">
          {{ breadcrumb.document }}
        </span>
      </span>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["breadcrumb"])
  }
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 40px;
}
.nav .separator {
  box-sizing: border-box;
  margin: 0 5px;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
/*
.nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
*/
/*
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
*/
</style>
