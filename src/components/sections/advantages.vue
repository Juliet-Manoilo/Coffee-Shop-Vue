<template>
  <div class="advantages">
    <Icon icon="tracery" class="advantages__icon" v-if="showInfo" />
    <h1 class="advantages__main-title" v-if="!showInfo && !market">
      ПОЧЕМУ НАШ КОФЕ ВСЕГДА ОЧЕНЬ ВКУСНЫЙ
    </h1>
    <h1 class="advantages__main-title" v-if="market">кофе в зернах</h1>
    <ul class="advantages__list">
      <li v-for="item in list" class="advantages__item" :key="item.id">
        <Icon v-if="showInfo" :icon="item.icon" class="advantages__icon-list" />
        <img
          class="advantages__image"
          v-else
          :src="
            market
              ? require(`@/assets/beans${item.id}.png`)
              : require(`@/assets/tasty${item.id}.png`)
          "
          alt="coffee"
        />
        <h2 class="advantages__title">{{ item.title }}</h2>
        <span v-if="market" class="advantages__weight"
          >{{ item.weight }} грамм</span
        >
        <p class="advantages__description">{{ item.description }}</p>
        <span class="advantages__undertext">{{ item.smallText }}</span>
        <p v-if="market" class="advantages__price">
          цена: {{ item.price }} грн
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "../icons/Icons.vue";
export default {
  name: "Advantages",
  components: { Icon },
  props: {
    showInfo: Boolean,
    market: Boolean,
    list: Array,
  },
};
</script>

<style lang="scss">
@import "/src/styles/style.scss";
.advantages {
  position: relative;
  z-index: 1;
  font-family: $main-font;
  width: 90%;
  margin: auto;
  margin-bottom: 60px;
  &__list {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    text-align: center;
    flex-wrap: wrap;
  }
  &__item {
    width: 31%;
    z-index: 50;
    margin-bottom: 15px;
    position: relative;
    &:hover .advantages__icon-list {
      transform: translatey(-5px);
      transition: 0.5s ease;
    }
    &:nth-child(2):hover .advantages__icon-list {
      -webkit-transform: rotate(20deg);
      transform: rotate(20deg);
      transition: 0.5s ease;
    }
  }
  &__icon {
    transform: rotate(135.06deg) scaleX(-1);
    z-index: 2;
    position: absolute;
    left: -130px;
    top: -250px;
  }
  &__title {
    width: 75%;
    margin: auto;
    padding-bottom: 10px;
    margin-bottom: 20px;
    position: relative;
    font-size: $nav-logo;
    font-weight: 600;
    min-height: 60px;
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
  &__description {
    font-size: $nav;
    font-weight: 400;
    line-height: 25px;
    margin-bottom: 25px;
  }
  &__undertext {
    font-size: $footer;
    font-weight: 300;
    color: $light-grey;
  }
  &__icon-list {
    margin-bottom: 30px;
  }
  &__main-title {
    color: $main-color;
    margin-bottom: 30px;
    font-family: $title-font;
    font-size: $subtitle;
    text-transform: uppercase;
  }
  &__image {
    width: 100%;
    margin-bottom: 30px;
  }
  &__weight {
    color: $coffee;
    margin-bottom: 30px;
    display: inline-block;
  }
  &__price {
    color: $main-color;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 2%;
  }
}
</style>