<template>
  <section class="market" id="market">
    <div class="market__icon-wrapper">
      <Icon icon="tracery" class="market__icon" />
    </div>
    <div class="market__breadcrumbs">
      <router-link to="/" class="market__breadcrumb">
        <Icon icon="arrow-left" class="market__arrow" />Главная/
      </router-link>
      <router-link to="/beans"> Кофе в зернах</router-link>
    </div>
    <Advantages :list="beansList" :market="true" />
  </section>
</template>

<script>
import Icon from "../icons/Icons.vue";
import { beansList } from "./data.js";
import Advantages from "../sections/advantages.vue";
export default {
  name: "Market",
  components: { Icon, Advantages },
  data() {
    return {
      beansList,
    };
  },
};
</script>

<style lang='scss'>
@import "@/styles/style.scss";

.market {
  position: relative;
  z-index: 10000;
  padding-top: 5%;

  &__breadcrumbs {
    width: 90%;
    margin: auto;
    margin-bottom: 50px;
    color: $main-color;
  }
  &__icon {
    transform: rotate(300deg) translateX(140px) translateY(15px);
  }
  &__icon-wrapper {
    position: absolute;
    right: 0;
    top: 0;
    overflow: hidden;
    overflow-y: hidden;
    z-index: 0;
  }
  &__breadcrumb {
    margin-right: 5px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__arrow {
    margin-right: 5px;
  }

  li {
    background-color: $card-bgc;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border: 2px solid transparent;
    z-index: 100;
    &:hover {
      border: 2px solid $white;
      box-shadow: 0px 5px 30px -5px rgba(248, 245, 245, 0.5);
    }
  }
}
</style>