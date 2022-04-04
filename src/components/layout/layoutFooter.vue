<template>
  <v-footer dark padless>
    <v-card flat tile class="primary white--text text-center" width="100%">
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12" md="6">
                <img height="150px" :src="require('/src/assets/lineqr.jpg')" />
                <br />
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
              </v-col>
              <v-col cols="12" md="6">
                <b>ผลิตและจัดจำหน่ายโดย</b>
                <br />PONGSIWA GROUP CO.,LTD.<br />305 ม.10<br />ต.โคกกรวด
                อ.เมืองนครราชสีมา<br />จ.นครราชสีมา 30280
                <br />
                <br />
                <b>ติดต่อ</b>
                <br />
                น.ส.จิรภรณ์ น้อยตาแสง
                <br />
                084-6251294, 085-0056265
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6">
            <GmapMap
              :center="center"
              :zoom="15"
              style="height: 200px"
              :options="options"
            >
              <GmapMarker :position="center" />
            </GmapMap>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card flat tile class="secondary white--text text-center" width="100%">
      <v-card-text class="white--text">
        <v-icon size="14px"> mdi-copyright </v-icon> Copyright
        {{ new Date().getFullYear() }}. <br />All rights reserved. Powered by
        Ashira Plus. Develop by Keerati Rukmanee
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    center: { lat: 17.398113, lng: 102.778629 },
    options: {
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      disableDefaultUi: false
    }
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
