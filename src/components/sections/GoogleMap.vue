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
        return 14.5;
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
                color: "#212121",
              },
            ],
          },
          {
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#212121",
              },
            ],
          },
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#bdbdbd",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },

          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#181818",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#1b1b1b",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#2c2c2c",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#8a8a8a",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#373737",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#3c3c3c",
              },
            ],
          },
          {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [
              {
                color: "#4e4e4e",
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
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
                color: "#3d3d3d",
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
  mounted() {},
};
</script>

