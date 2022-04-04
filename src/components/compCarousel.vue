<template>
  <div>
    <v-carousel
      cycle
      height="600"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src: require('../assets/1.jpg')
      },
      {
        src: require('../assets/2.jpg')
      },
      {
        src: require('../assets/3.jpg')
      },
      {
        src: require('../assets/4.jpg')
      },
      {
        src: require('../assets/5.jpg')
      },
      {
        src: require('../assets/6.jpg')
      },
      {
        src: require('../assets/7.jpg')
      },
      {
        src: require('../assets/logo.png')
      }
    ]
  })
}
</script>

<style></style>
