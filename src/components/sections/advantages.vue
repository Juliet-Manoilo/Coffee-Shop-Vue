<template>
  <div class="advantages">
    <Icon icon="tracery" class="advantages__icon" />
    <ul class="advantages__list">
      <li
        v-for="advantage in advantagesList"
        class="advantages__item"
        :key="advantage.id"
      >
        <svg>
          <use :xlink:href="`#${iconNames[advantage.icon]}`" />
        </svg>
        <h2 class="advantages__title">{{ advantage.title }}</h2>
        <p>{{ advantage.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import iconNames from "../icons/icons.js";
import Icon from "../icons/Icons.vue";
import { advantagesList } from "./data.js";
export default {
  name: "Advantages",
  components: { Icon },
  data() {
    return {
      advantagesList,
      iconNames: iconNames,
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
  }
  &__icon {
    transform: rotate(135.06deg) scaleX(-1);
    z-index: 2;
    position: absolute;
    left: -100px;
    top: -180px;
  }
  &__title {
    width: 70%;
    margin: auto;
    padding-bottom: 20px;
    margin-bottom: 20px;
    position: relative;
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
}
</style>