<template>
  <section class="market" id="market">
    <div class="market__icon-wrapper">
      <Icon icon="tracery" class="market__icon" />
    </div>
    <div class="content-wrapper"></div>
  </section>
</template>

<script>
import Icon from "../icons/Icons.vue";
export default {
  name: "Market",
  components: { Icon },
};
</script>

<style lang='scss'>
@import "@/styles/style.scss";

.market {
  position: relative;
  &__content-wrapper {
    width: 90%;
    margin: auto;
  }
  &__icon {
    transform: rotate(300deg);
  }
  &__icon-wrapper {
    position: absolute;
    right: 0;
    top: -20%;
    overflow: hidden;
  }
}
</style>