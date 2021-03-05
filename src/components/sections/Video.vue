<template>
  <section class="video">
    <video
      class="video__bcg"
      src="/coffee.webm"
      autoplay
      loop
      playsinline
      muted
    ></video>
    <div class="video__content">
      <h2 class="video__logo"><a href="/"> COFFEE SHOP</a></h2>
      <h1 class="video__title">7-й кофе в подарок</h1>
      <p class="video__description">получи карточку и фиксируй заказы</p>
      <div class="video__buttons">
        <a href="#menu-list" class="video__link">меню</a>
        <router-link to="/beans" class="video__link">кофе в зернах</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Video",
};
</script>


<style lang="scss">
@import "/src/styles/style.scss";
.video {
  width: 100%;
  position: relative;
  font-weight: 500;
  z-index: 100;
  margin-bottom: 50px;
  background-image: url("/src/assets/slide2.png");
  @media (max-width: 1000px) {
    min-height: 90vh;
  }
  &__bcg {
    width: 100%;
    z-index: 100;
    @media (max-width: 1000px) {
      display: none;
    }
  }
  &__content {
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 70%;
    top: 20%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
  &__logo {
    color: $main-color;
    font-size: $logo;
    font-family: $logo-font;
    letter-spacing: 2px;
    @media (max-width: 1000px) {
      font-size: $subtitle;
    }
  }
  &__title {
    font-size: $title;
    font-family: $title-font;
    font-weight: 500;
    @media (max-width: 1000px) {
      font-size: $mobile-title;
      text-align: center;
    }
  }
  &__description {
    font-size: $nav-logo;
    font-weight: 700;
    @media (max-width: 1000px) {
      text-align: center;
      font-size: $nav;
    }
  }
  &__buttons {
    display: flex;
    width: 30%;
    justify-content: space-around;
    margin: auto;
    @media (max-width: 1000px) {
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
  }
  &__link {
    width: 100%;
    vertical-align: center;
    background-color: transparent;
    color: $main-color;
    border: 1px solid $main-color;
    width: 192px;
    height: 42px;
    font-size: $btn;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      background-color: $main-color;
      color: $black;
    }
    @media (max-width: 1000px) {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
