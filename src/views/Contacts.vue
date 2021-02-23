<template>
  <section class="contacts">
    <div class="contacts__content-wrapper">
      <div class="contacts__breadcrumbs">
        <router-link to="/" class="contacts__breadcrumb">
          <Icon icon="arrow-left" class="market__arrow" />Главная/
        </router-link>
        <router-link to="/contacts"> Контакты</router-link>
      </div>
      <h1 class="contacts__title">ВСЕГДА РАДЫ ВАС ВИДЕТЬ</h1>
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
}
</style>
