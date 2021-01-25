<template>
  <div class="app">
    <p class="app__logo"><a href="/" class="app__logo-link">coffee shop</a></p>
    <div class="app__nav">
      <router-link to="/">Меню</router-link> 
      <router-link to="/beans">Кофе в зернах</router-link>
      <router-link to="/contacts">Контакты</router-link>
    </div>
    <router-view/>
    <a href="/contacts" class="app__contacts-link">ул. Ришельевская, 31</a>
  </div>
</template>

<script>
export default {

}
</script>


<style lang="scss">
@import "./styles/style.scss";
.app {
  width: 100%;
  background-color: $black;
  display: flex;
  color: $main-color;
  min-height: 70px;
  justify-content: space-around;
  align-items: center;
  &__logo-link {
    text-transform: uppercase;
    font-size: $nav-logo;
    font-weight: 400;
  }
  &__nav {
    width: 25%;
    display: flex;
    justify-content: space-between;
  }
}
</style>


