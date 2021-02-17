<template>
  <div class="div">
    <Video />
    <Advantages :list="advantagesList" :showInfo="true" />
    <MenuList />
    <Advantages :list="whyTaste" />
  </div>
</template>

<script>
import Video from "../components/sections/Video.vue";
import Advantages from "../components/sections/advantages.vue";
import MenuList from "../components/sections/menu-list.vue";
import { AdvantagesList, whyTaste } from "../components/sections/data.js";
//import whyTaste from "../components/sections/why-tasty.vue";

export default {
  name: "Menu",
  components: { Video, Advantages, MenuList },
  data() {
    return {
      AdvantagesList,
      whyTaste,
    };
  },
};
</script>

<style lang="scss">
@import "../styles/style.scss";
</style>
