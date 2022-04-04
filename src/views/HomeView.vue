<template>
  <div>
    <layoutAppbar />
    <v-main>
      <compCarousel />
      <hello-world />
    </v-main>
    <layoutFooter />
  </div>
</template>

<script>
import layoutAppbar from '../components/layout/layoutAppbar.vue'
import compCarousel from '../components/compCarousel.vue'
import HelloWorld from '../components/HelloWorld'
import layoutFooter from '../components/layout/layoutFooter.vue'

export default {
  name: 'HomeView',

  components: {
    HelloWorld,
    layoutAppbar,
    compCarousel,
    layoutFooter
  }
}
</script>
