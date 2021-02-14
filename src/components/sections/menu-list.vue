 <template>
  <div class="menu" id="menu">
    <Icon icon="tracery" class="menu__icon" />
    <h2 class="menu__title">меню</h2>
    <div class="menu__row">
      <img src="./menu1.png" alt="coffee" />
      <div class="menu__content">
        <h3 class="menu__subtitle-name">
          <Icon icon="coffee-hot" class="menu__icon-title" />Кофе
        </h3>
        <div
          class="menu__positions"
          v-for="position in coffeeMenu"
          :key="position.id"
        >
          <span class="menu__name">{{ position.name }}</span>
          <div class="menu__characteristics">
            <span class="menu__quantity">{{ position.ml }}мл</span>
            <span class="menu__price">{{ position.price }}грн</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../icons/Icons.vue";
import { coffeeMenu } from "./data.js";
export default {
  name: "MenuList",
  components: { Icon },
  data() {
    return {
      coffeeMenu,
    };
  },
};
</script>

<style lang="scss">
@import "/src/styles/style.scss";
.menu {
  width: 90%;
  margin: auto;
  position: relative;

  &__title {
    text-transform: uppercase;
    color: $main-color;
    margin-bottom: 20px;
    font-family: $title-font;
    font-size: $subtitle;
  }
  &__icon {
    position: absolute;
    right: -7%;
    top: -110px;
    z-index: 0;
  }
  &__content {
    font-size: $nav-logo;
    width: 40%;
    margin: auto;
  }
  &__icon-title {
    margin-right: 25px;
  }
  &__row {
    display: flex;
  }
  &__subtitle-name {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    font-weight: 600;
    &:hover .menu__icon-title {
      -webkit-transform: rotate(20deg);
      transform: rotate(20deg);
      transition: 0.5s ease;
    }
  }
  &__quantity {
    margin-right: 35px;
    color: $light-grey;
    font-weight: 300;
  }
  &__positions {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: $nav;
    font-weight: 400;
    margin-bottom: 5px;
    &:last-child {
      padding-top: 40px;
      position: relative;
      &::before {
        content: "";
        width: 100px;
        border-top: 2px solid $main-color;
        position: absolute;
        left: 0;
        top: 20px;
      }
    }
  }
  &__price {
    font-weight: 600;
  }
}
</style>