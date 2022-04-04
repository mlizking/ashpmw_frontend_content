<template>
  <div>
    <v-app-bar dense app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../../assets/logo.svg"
          transition="scale-transition"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <!-- <span class="mr-2">Tel. (+66)99-999-9999</span> -->
      <div class="d-none d-md-flex">
        <v-btn href="#" text>
          <span>หน้าแรก</span>
        </v-btn>
        <v-btn href="#" text>
          <span>สั่งซื้อ</span>
        </v-btn>
        <v-btn href="#" text>
          <span>เกี่ยวกับเรา</span>
        </v-btn>
        <v-btn href="#" text>
          <span>ผลงาน</span>
        </v-btn>
        <v-btn href="#" text>
          <span>รีวิว</span>
        </v-btn>
      </div>

      <v-app-bar-nav-icon
        class="d-md-none"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-list-item-title>หน้าแรก</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>สั่งซื้อ</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>เกี่ยวกับเรา</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>ผลงาน</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>รีวิว</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style></style>
