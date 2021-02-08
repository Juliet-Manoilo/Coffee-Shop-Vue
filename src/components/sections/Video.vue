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
        <a href="" class="video__link">меню</a>
        <a href="/beans" class="video__link">кофе в зернах</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Video",
  // props: {
  // msg: String
};
</script>


<style lang="scss">
@import "/src/styles/style.scss";
.video {
  width: 100%;
  position: relative;
  font-weight: 500;
  &__bcg {
    width: 100%;
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
  }
  &__title {
    font-size: $title;
    font-family: $title-font;
    font-weight: 500;
  }
  &__description {
    font-size: $nav-logo;
    font-weight: 700;
  }
  &__buttons {
    display: flex;
    width: 30%;
    justify-content: space-around;
    margin: auto;
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
  }
}
</style>
