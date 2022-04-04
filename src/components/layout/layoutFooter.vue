<template>
  <v-footer dark padless>
    <v-card flat tile class="secondary white--text text-center" width="100%">
      <v-card-text>
        <img
          class="hoverPointer"
          height="30px"
          :src="require('/src/assets/f_logo_RGB-Blue_58.png')"
        />
        <img
          class="hoverPointer"
          height="30px"
          :src="require('/src/assets/round-default.png')"
        />
      </v-card-text>

      <v-card-text class="white--text pt-0">
        tel. (+66)99 999 9999
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <v-icon size="14px"> mdi-copyright </v-icon> Copyright
        {{ new Date().getFullYear() }}.
        <br>All rights reserved. Powered by Ashira Plus.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
  }),
  methods: {}
}
</script>

<style>
.hoverPointer:hover {
  cursor: pointer;
}

.hoverPointer {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
