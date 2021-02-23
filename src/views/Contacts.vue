<template>
  <section class="contacts">
    <div class="contacts__icon-wrapper">
      <Icon icon="tracery" class="contacts__icon" />
    </div>
    <div class="contacts__content-wrapper">
      <div class="contacts__breadcrumbs">
        <router-link to="/" class="contacts__breadcrumb">
          <Icon icon="arrow-left" class="market__arrow" />Главная/
        </router-link>
        <router-link to="/contacts"> Контакты</router-link>
      </div>
      <h1 class="contacts__title">ВСЕГДА РАДЫ ВАС ВИДЕТЬ</h1>
      <div class="contacts__adresses">
        <h6 class="contacts__subtitle">контакты</h6>
      </div>
    </div>

    <Map />
  </section>
</template>

<script>
import Map from "../components/sections/GoogleMap.vue";
import Icon from "../components/icons/Icons.vue";
export default {
  name: "Contacts",
  components: { Map, Icon },
};
</script>

<style lang="scss">
@import "../styles/style.scss";
.contacts {
  color: $main-color;
  padding-top: 5%;
  position: relative;
  z-index: 0;
  &__content-wrapper {
    width: 90%;
    margin: auto;
  }
  &__breadcrumbs {
    margin-bottom: 3%;
  }
  &__breadcrumb {
    margin-right: 5px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__title {
    font-size: $subtitle;
    font-family: $title-font;
    margin-bottom: 3%;
  }
  &__icon-wrapper {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
  }
  &__icon {
    transform: rotate(370deg) translateX(50px) translateY(-150px);
    z-index: 0;
  }
  &__subtitle {
    font-size: $nav;
    margin-bottom: 50px;
  }
}
</style>
