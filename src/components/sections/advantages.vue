<template>
  <div class="advantages" v-if="advantagesList.length > 0">
    <Icon icon="tracery" class="advantages__icon" />
    <ul class="advantages__list">
      <li
        class="advantages__item"
        :key="advantagesList.icon"
        v-for="icon in advantagesList"
      >
        {{ advantagesList.icon }}
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