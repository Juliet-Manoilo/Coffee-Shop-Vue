<template>
  <div class="app">
    <div class="header">
      <router-link class="header__logo-link" to="/">coffee shop</router-link>
      <div class="header__nav">
        <router-link to="/" class="header__nav-link">Меню</router-link>
        <router-link to="/beans" class="header__nav-link"
          >Кофе в зернах</router-link
        >
        <router-link to="/contacts" class="header__nav-link"
          >Контакты</router-link
        >
      </div>
      <router-link class="header__contacts-link" to="/contacts"
        ><Icon icon="location" class="header__icon" />ул. Ришельевская,
        31</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
import Icon from "./components/icons/Icons.vue";
export default {
  components: { Icon },
};
</script>


<style lang="scss">
@import "./styles/style.scss";
.header {
  width: 100%;
  background-color: $black;
  display: flex;
  color: $main-color;
  min-height: 70px;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  &__logo-link {
    text-transform: uppercase;
    font-size: $nav-logo;
    font-weight: 500;
    font-family: $logo-font;
    margin-right: 30px;
    &:hover {
      transform: scale(1.1);
    }
  }
  &__nav {
    width: 33%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: $nav;
    font-weight: 400;
    padding-left: 20px;
  }
  &__icon {
    margin-right: 10px;
  }
  &__contacts-link {
    align-items: center;
    display: flex;
    &:hover .header__icon {
      transform: scale(1.5);
    }
  }
  &__nav-link:hover {
    transform: scale(1.1);
  }
}

.app {
  background-color: $black;
}
</style>


