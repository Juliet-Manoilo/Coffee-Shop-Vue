<template>
  <div class="map">
    <GmapMap
      :center="{ lat: 46.47283123588844, lng: 30.739238197961864 }"
      :zoom="zoom"
      :options="options"
      map-type-id="terrain"
      style="width: 100%; height: 700px"
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
        return 14;
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
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#0f1114",
              },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#787878",
              },
            ],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#18191b",
              },
            ],
          },
          {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#4285f4",
              },
            ],
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
          {
            featureType: "administrative.province",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#4285f4",
              },
            ],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#4285f4",
              },
            ],
          },
          {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [
              {
                color: "#023e58",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#283d6a",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#8f8f8f",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#000000",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#101e1e",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#3C7680",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                color: "#292f38",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#5d6674",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#000000",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#293b51",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#0b0b0f",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#b0d5ce",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#023e58",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#98a5be",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#1d2c4d",
              },
            ],
          },
          {
            featureType: "transit.line",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#283d6a",
              },
            ],
          },
          {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
              {
                color: "#3a4762",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#354245",
              },
            ],
          },
        ],
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