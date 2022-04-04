<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">Welcome to Ashira Plus</h1>

        <p class="subheading font-weight-regular">
          Ashira Plus is a premium drinking water base in Udonthani.
          <!-- <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a> -->
        </p>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">มาตรฐานการรับรอง</h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="mb-3">
        <img height="100px" :src="require('/src/assets/logo-food-drug.png')" />
      </v-col>
      <v-col class="mb-3">
        <img height="100px" :src="require('/src/assets/gmp.png')" />
      </v-col>
      <v-col class="mb-3">
        <img height="100px" :src="require('/src/assets/haccp.png')" />
      </v-col>
      <v-col class="mb-3">
        <img height="100px" :src="require('/src/assets/logo-halal-en.png')" />
      </v-col>
    </v-row>

    <!-- //# product -->
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">ผลิตภัณฑ์ทั้งหมด</h1>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
          </v-img>

          <v-card-actions>
            <v-card-title v-text="card.title"></v-card-title>
            <v-spacer></v-spacer>

            <!-- <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn> -->
            35 บาท
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    cards: [
      {
        title: 'น้ำดื่ม',
        src: require('../assets/1.jpg'),
        flex: 3
      },
      {
        title: 'น้ำดื่ม',
        src: require('../assets/2.jpg'),
        flex: 3
      },
      {
        title: 'น้ำดื่ม',
        src: require('../assets/3.jpg'),
        flex: 3
      },
      {
        title: 'น้ำดื่ม',
        src: require('../assets/4.jpg'),
        flex: 3
      },
      {
        title: 'น้ำดื่ม',
        src: require('../assets/5.jpg'),
        flex: 3
      },
      {
        title: 'น้ำดื่ม',
        src: require('../assets/6.jpg'),
        flex: 3
      },
      {
        title: 'น้ำดื่ม',
        src: require('../assets/7.jpg'),
        flex: 3
      }
    ]
  })
}
</script>
