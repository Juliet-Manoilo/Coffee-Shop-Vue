<template>
  <section class="form">
    <div class="form__wrapper">
      <h1 class="form__title">с удовольствием поможем подобрать лучший кофе</h1>
      <form action="#" method="POST" class="form__post">
        <input
          type="text"
          placeholder="Имя"
          class="form__input"
          pattern="[A-Za-zА-Яа-яЁё]{3,15}"
        />
        <input
          required
          class="form__input"
          placeholder="Тел."
          pattern="[0-9]{10,14}"
        />
        <input
          v-model="email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
          class="form__input"
          placeholder="e-mail"
        />
        <input
          type="submit"
          value="Заказать консультацию"
          class="form__input--btn"
        />
      </form>
    </div>
    <div class="form__icon-wrapper">
      <Icon icon="tracery" class="form__icon--right" />
    </div>
    <a href="#market" class="slider__link-to-top">
      <Icon icon="arrow" /> вверх
    </a>
  </section>
</template>

<script>
import Icon from "../icons/Icons.vue";
export default {
  name: "Form",
  components: { Icon },
};
</script>

<style lang="scss">
@import "@/styles/style.scss";
.form {
  position: relative;
  color: $main-color;
  padding-top: 5%;
  &__wrapper {
    width: 90%;
    margin: auto;
  }
  &__icon {
    position: absolute;
    left: -12%;
    top: -17%;
    transform: rotate(110deg);
    z-index: 0;
    &--right {
      transform: translateX(100px);
      z-index: 0;
      @media (max-width: 1000px) {
        transform: translateX(250px);
        z-index: 0;
      }
    }
  }
  &__title {
    text-transform: uppercase;
    font-family: $title-font;
    font-size: $subtitle;
    font-weight: 600;
    margin-bottom: 100px;
    z-index: 1000;
  }
  &__input {
    width: 620px;
    height: 50px;
    margin-bottom: 50px;
    outline: none;
    border: 1px solid $main-color;
    padding: 5px;
    background-color: $black;
    padding-left: 15px;
    color: $coffee;
    border-radius: 5px;
    z-index: 100;
    @media (max-width: 700px) {
      width: 320px;
    }
    &:hover {
      border: 1px solid $coffee;
      box-shadow: 0px 5px 10px -5px rgba(248, 245, 245, 0.5);
      transition: 0.2s ease;
    }
    &:active {
      border: 1px solid $coffee;
      box-shadow: 0px 5px 10px -5px rgba(248, 245, 245, 0.5);
    }
    &:focus {
      border: 1px solid $coffee;
      box-shadow: 0px 5px 10px -5px rgba(248, 245, 245, 0.5);
    }
    &--btn {
      outline: none;
      background-color: $main-color;
      border: 1px solid transparent;
      width: 400px;
      height: 50px;
      margin-bottom: 50px;
      font-size: $btn;
      color: $black;
      font-weight: 600;
      cursor: pointer;
      border-radius: 5px;
      @media (max-width: 1000px) {
        width: 320px;
      }
      &:hover {
        background-color: $black;
        color: $main-color;
        border: 1px solid $main-color;
        transition: 0.2s ease;
      }
    }
  }
  &__post {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease;
  }
  &__icon-wrapper {
    position: absolute;
    right: 0;
    top: 30%;
    z-index: 0;
    @media (max-width: 1000px) {
      display: none;
    }
  }
}
</style>