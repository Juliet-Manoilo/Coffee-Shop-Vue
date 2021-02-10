<template>
  <div class="advantages">
    <Icon icon="tracery" class="advantages__icon" />
    <ul class="advantages__list">
      <li
        v-for="advantage in advantagesList"
        class="advantages__item"
        :key="advantage.id"
      >
        {{ advantage.icon }}
        <h2>{{ advantage.title }}</h2>
        <p>{{ advantage.description }}</p>
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
  &__list {
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: auto;
    text-align: center;
  }
  &__item {
    width: 30%;
  }
  &__icon {
    transform: rotate(135.06deg) scaleX(-1);

    position: absolute;
    left: -100px;
    top: -150px;
  }
}
</style>