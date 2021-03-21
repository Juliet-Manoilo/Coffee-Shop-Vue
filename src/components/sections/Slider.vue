<template>
  <section class="slider">
    <splide :options="options">
      <splide-slide>
        <div class="slider__content">
          <h2 class="slider__title">
            покупай зерна кофе - получи латте в подарок
          </h2>
          <router-link to="/beans" class="slider__link"
            >смотреть кофе в зернах</router-link
          >
        </div>
        <a href="#main-page" class="slider__link-to-top"
          ><Icon icon="arrow" /> вверх
        </a>
        <img src="@/assets/slide1.png" alt="coffee" />
      </splide-slide>
      <splide-slide>
        <div class="slider__content">
          <h2 class="slider__title">7-й кофе в подарок</h2>
          <router-link to="/contacts" class="slider__link"
            >получи карточку и фиксируй заказы</router-link
          >
        </div>
        <a href="#main-page" class="slider__link-to-top"
          ><Icon icon="arrow" /> вверх
        </a>
        <img src="@/assets/slide2.png" alt="coffeeshop" />
      </splide-slide>
      <splide-slide>
        <div class="slider__content">
          <h2 class="slider__title">Мы находимся здесь</h2>
          <router-link to="/contacts" class="slider__link"
            >контакты</router-link
          >
        </div>
        <a href="#main-page" class="slider__link-to-top">
          <Icon icon="arrow" /> вверх
        </a>
        <img src="@/assets/slide3.png" alt="map" />
      </splide-slide>
    </splide>
  </section>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Icon from "../icons/Icons.vue";
export default {
  name: "Slider",
  components: {
    Splide,
    SplideSlide,
    Icon,
  },
  data() {
    return {
      options: {
        rewind: true,
        fixedWidth: "100%",
        perPage: 1,
        cover: true,
        fixedHeight: "80vh",
        autoplay: true,
      },
    };
  },
};
</script>

<style lang='scss'>
@import "@/styles/style.scss";

.slider {
  max-height: 100%;
  &__title {
    color: $main-color;
    text-transform: uppercase;
    text-align: center;
    font-family: $title-font;
    font-size: $title;
    font-weight: 600;
    @media (max-width: 1000px) {
      font-size: $subtitle;
    }
  }
  &__link {
    width: 240px;
    height: 50px;
    background-color: $main-color;
    color: $black;
    font-size: $btn;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: $main-font;
    text-align: center;
    &:hover {
      background-color: transparent;
      border: 1px solid $main-color;
      color: $white;
      transition: 0.2s ease;
    }
  }
  &__content {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
  }
  &__link-to-top {
    position: absolute;
    bottom: 5%;
    right: 5%;
    color: $main-color;
    border: 1px solid $main-color;
    border-radius: 50%;
    display: flex;
    width: 84px;
    height: 84px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    :hover {
      transform: translatey(-5px);
      transition: 0.1s ease;
    }
    @media (max-width: 1000px) {
      bottom: 0;
      right: 0;
      width: 60px;
      height: 60px;
      border: none;
    }
  }
}
</style>