<template>
  <div class="div">
    <Video />
    <Advantages />
    <MenuList />
  </div>
</template>

<script>
import Video from "../components/sections/Video.vue";
import Advantages from "../components/sections/advantages.vue";
import MenuList from "../components/sections/menu.vue";

export default {
  name: "Menu",
  components: { Video, Advantages, MenuList },
};
</script>

<style lang="scss">
</style>
