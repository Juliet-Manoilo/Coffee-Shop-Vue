<template>
  <div class="advantages">
    <Icon icon="tracery" class="advantages__icon" />
    <ul class="advantages__list">
      <li
        v-for="advantage in advantagesList"
        class="advantages__item"
        :key="advantage.id"
      >
        <Icon :icon="advantage.icon" class="advantages__icon-list" />
        <h2 class="advantages__title">{{ advantage.title }}</h2>
        <p class="advantages__description">{{ advantage.description }}</p>
        <span class="advantages__undertext">{{ advantage.smallText }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "../icons/Icons.vue";
import { advantagesList } from "./data.js";
export default {
  name: "Advantages",
  components: { Icon },
  data() {
    return {
      advantagesList,
    };
  },
  // props: {
  // msg: String
};
</script>


<style lang="scss">
@import "/src/styles/style.scss";
.advantages {
  position: relative;
  z-index: 1;
  padding: 30px;
  font-family: $main-font;
  margin-bottom: 50px;
  &__list {
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: auto;
    text-align: center;
  }
  &__item {
    width: 30%;
    z-index: 50;
    &:hover .advantages__icon-list {
      transform: translatey(-5px);
      transition: 0.5s ease;
    }
    &:nth-child(2):hover .advantages__icon-list {
      -webkit-transform: rotate(20deg);
      transform: rotate(20deg);
      transition: 0.5s ease;
    }
  }
  &__icon {
    transform: rotate(135.06deg) scaleX(-1);
    z-index: 2;
    position: absolute;
    left: -100px;
    top: -180px;
  }
  &__title {
    width: 55%;
    margin: auto;
    padding-bottom: 20px;
    margin-bottom: 20px;
    position: relative;
    font-size: $nav-logo;
    font-weight: 600;
    min-height: 25%;
    &::after {
      position: absolute;
      content: "";
      bottom: 0;
      width: 54px;
      border-bottom: 2px solid $main-color;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &__description {
    font-size: $nav;
    font-weight: 400;
    line-height: 25px;
    margin-bottom: 10px;
  }
  &__undertext {
    font-size: $footer;
    font-weight: 300;
    color: $light-grey;
  }
  &__icon-list {
    margin-bottom: 30px;
  }
}
</style>