<template>
  <div class="div">
    <Video />
    <Advantages />
  </div>
</template>

<script>
import Video from "../components/sections/Video.vue";
import Advantages from "../components/sections/advantages.vue";

export default {
  name: "Menu",
  components: { Video, Advantages },
};
</script>

<style lang="scss">
</style>
