import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  //   theme: { dark: true }
  theme: {
    themes: {
      light: {
        primary: '#231F20',
        secondary: '#D3A82B',
        accent: '#8c9eff',
        error: '#b71c1c'
      }
    }
  }
})
