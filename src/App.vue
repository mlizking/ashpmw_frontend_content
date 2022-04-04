<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    component: {}
    //
  })
}
</script>
<style scoped>
* {
  font-family: "Prompt", sans-serif !important;
}
</style>
