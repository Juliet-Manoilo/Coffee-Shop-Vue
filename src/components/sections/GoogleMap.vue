<template>
  <div class="map">
    <GmapMap
      :center="{ lat: 46.47283123588844, lng: 30.739238197961864 }"
      :zoom="zoom"
      :options="options"
      map-type-id="terrain"
      style="width: 100%; height: 900px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in locations"
        :position="{
          lat: parseFloat(m.lat),
          lng: parseFloat(m.lng),
        }"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
        :icon="mapIconSrc"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "Map",
  props: {
    centerRef: {
      type: Object,
      default: function () {
        return {
          lat: 46.4766219783261,
          lng: 30.740220069130373,
        };
      },
    },
    zoomVal: {
      type: Number,
      default: function () {
        return 15;
      },
    },
  },
  data() {
    return {
      mapIconSrc: require("@/assets/location.svg"),
      feedLoaded: true,
      zoom: this.zoomVal,
      center: this.centerRef,
      options: {
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: false,
      },
      mapTypeId: "styledMapType",
      locations: [
        {
          lat: 46.4766219783261,
          lng: 30.740220069130373,
        },
        { lat: 46.48471380039353, lng: 30.732291699816482 },
        { lat: 46.46126219467505, lng: 30.71419491145259 },
      ],
    };
  },
  mounted() {
    console.log(this.locations);
  },
};
</script>

<style lang="scss">
</style>