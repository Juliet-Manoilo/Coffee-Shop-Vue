<template>
  <div class="map">
    <GmapMap
      :center="{ lat: 46.4766219783261, lng: 30.740220069130373 }"
      :zoom="16"
      :options="options"
      map-type-id="terrain"
      style="width: 100%; height: 900px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in locations"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
        :icon="mapIconSrc"
      />
    </GmapMap>
  </div>
</template>

<scriptпш>
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
        return 16;
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