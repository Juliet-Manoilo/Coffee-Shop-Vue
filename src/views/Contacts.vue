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

      <h5 class="contacts__subtitle">контакты</h5>
      <div class="contacts__adresses">
        <div class="contacts__col">
          <div class="contacts__adress">
            <div class="contacts__line">
              <Icon icon="location" class="contacts__icon-small" />
              <span>Одесса, ул.Ришельевская, 31</span>
            </div>
            <div class="contacts__line">
              <Icon icon="phone" class="contacts__icon-small" />
              <a href="tel:+38098786754635">+38098786754635</a>
            </div>
          </div>
          <div class="contacts__adress">
            <div class="contacts__line">
              <Icon icon="location" class="contacts__icon-small" />
              <span>Одесса, ул.Садовая, 31</span>
            </div>
            <div class="contacts__line">
              <Icon icon="phone" class="contacts__icon-small" />
              <a href="tel:+38098786754635">+38098786754635</a>
            </div>
          </div>
        </div>
        <div class="contacts__col">
          <div class="contacts__adress">
            <div class="contacts__line">
              <Icon icon="location" class="contacts__icon-small" />
              <span>Одесса, ул.Степовая, 31</span>
            </div>
            <div class="contacts__line">
              <Icon icon="phone" class="contacts__icon-small" />
              <a href="tel:+38098786754635">+38098786754635</a>
            </div>
          </div>
          <div class="contacts__adress">
            <div class="contacts__line">
              <span class="contacts__time">график работы:</span>
            </div>
            <div class="contacts__line">
              <Icon icon="clock" class="contacts__icon-small" />
              <span>пн-вс: 8:00 - 22:00</span>
            </div>
          </div>
        </div>
        <div class="contacts__col--social">
          <span>мы в соцсетях</span>
          <div class="contacts__soc-btn">
            <a
              href="http://www.facebook.com"
              class="contacts__social"
              target="_blank"
              ><Icon icon="facebook"
            /></a>
            <a
              href="http://www.instagram.com"
              target="_blank"
              class="contacts__social"
              ><Icon icon="instagram"
            /></a>
          </div>
        </div>
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
    margin-bottom: 50px;
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
  &__adresses {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
  &__col {
    min-width: 27%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: $white;
    margin-right: 30px;
    &--social {
      color: $main-color;
      display: flex;
      flex-direction: column;
      height: 200px;
      justify-content: space-evenly;
    }
  }
  &__adress {
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }
  }
  &__icon-small {
    margin-right: 10px;
  }
  &__line {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__time {
    color: $main-color;
  }
  &__social {
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
