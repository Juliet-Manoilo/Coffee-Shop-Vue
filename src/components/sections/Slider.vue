<template>
  <section class="slider">
    <splide :options="options">
      <splide-slide>
        <img src="@/assets/slide1.png" />
      </splide-slide>
      <splide-slide>
        <img src="@/assets/slide2.png" />
      </splide-slide>
      <splide-slide>
        <img src="@/assets/slide3.png" />
      </splide-slide>
    </splide>
  </section>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
export default {
  name: "Slider",
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        fixedWidth: "100%",
        perPage: 1,
        cover: true,
        fixedHeight: "80vh",
      },
    };
  },
};
</script>

<style lang='scss'>
@import "@/styles/style.scss";
.slider {
  max-height: 100%;
}
</style>