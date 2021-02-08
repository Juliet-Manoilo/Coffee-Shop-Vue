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
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "../icons/Icons.vue";
import advantagesList from "./data.js";
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
  &__list {
    display: flex;
    justify-content: space-around;
  }
}
</style>