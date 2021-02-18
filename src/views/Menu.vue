<template>
  <div class="div">
    <Video />
    <Advantages :list="advantagesList" :showInfo="true" />
    <MenuList />
    <Advantages :list="whyTasty" />
  </div>
</template>

<script>
import Video from "../components/sections/Video.vue";
import Advantages from "../components/sections/advantages.vue";
import MenuList from "../components/sections/menu-list.vue";
import { advantagesList, whyTasty } from "../components/sections/data.js";
//import whyTaste from "../components/sections/why-tasty.vue";

export default {
  name: "Menu",
  components: { Video, Advantages, MenuList },
  data() {
    return {
      advantagesList,
      whyTasty,
    };
  },
};
</script>

<style lang="scss">
@import "../styles/style.scss";
</style>
