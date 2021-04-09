import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: "#424242",
        secondary: {
          base: "#ff8c00",
          lighten3: "#ffb700",
          darken3: "#ff6200"
        },
        tertiary: {
          base: "#4682bf",
          lighten3: "#4696bf",
          darken3: "#466ebf"
        },
        accent: "#9c27b0"
      },
      light: {
        primary: "#2196f3",
        secondary: "#8bc34a",
        accent: "#cddc39",
        error: "#f44336",
        warning: "#ffc107",
        info: "#009688",
        success: "#3f51b5"
      }
    }
  }
});
