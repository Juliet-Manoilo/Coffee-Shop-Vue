 <template>
  <section class="menu" id="menu">
    <div class="menu__icon-wrapper">
      <Icon icon="tracery" class="menu__icon" />
    </div>
    <h2 class="menu__title">меню</h2>
    <div class="menu__row">
      <img src="@/assets/menu1.png" alt="coffee" class="menu__img" />

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
    <div class="menu__row">
      <div class="menu__content">
        <h3 class="menu__subtitle-name">
          <Icon icon="icecoffee" class="menu__icon-title" />Кофе со льдом
        </h3>
        <div
          class="menu__positions--second"
          v-for="position in iceCoffee"
          :key="position.id"
        >
          <span class="menu__name">{{ position.name }}</span>
          <div class="menu__characteristics">
            <span class="menu__quantity">{{ position.ml }}мл</span>
            <span class="menu__price">{{ position.price }}грн</span>
          </div>
        </div>
      </div>
      <img src="@/assets/menu2.png" alt="coffee" class="menu__img" />
    </div>
    <Icon icon="tracery" class="menu__icon--second" />
    <div class="menu__row">
      <img src="@/assets/menu3.png" alt="coffee" class="menu__img" />

      <div class="menu__content">
        <h3 class="menu__subtitle-name">
          <Icon icon="tea" class="menu__icon-title" />Чай, лимонад
        </h3>
        <div class="menu__positions" v-for="position in tea" :key="position.id">
          <span class="menu__name">{{ position.name }}</span>
          <div class="menu__characteristics">
            <span class="menu__quantity">{{ position.ml }}мл</span>
            <span class="menu__price">{{ position.price }}грн</span>
          </div>
        </div>
      </div>
    </div>
    <div class="menu__row">
      <div class="menu__content">
        <h3 class="menu__subtitle-name">
          <Icon icon="bakery" class="menu__icon-title" />Выпечка
        </h3>
        <div
          class="menu__positions--last"
          v-for="position in bakery"
          :key="position.id"
        >
          <span class="menu__name">{{ position.name }}</span>
          <div class="menu__characteristics">
            <span class="menu__price">{{ position.price }}грн</span>
          </div>
        </div>
      </div>
      <img src="@/assets/menu2.png" alt="coffee" class="menu__img" />
    </div>
    <div class="menu__icon-wrapper--last">
      <Icon icon="tracery" class="menu__icon--last" />
    </div>
  </section>
</template>

<script>
import Icon from "../icons/Icons.vue";
import { coffeeMenu } from "./data.js";
import { iceCoffee } from "./data.js";
import { tea } from "./data.js";
import { bakery } from "./data.js";
export default {
  name: "MenuList",
  components: { Icon },
  data() {
    return {
      coffeeMenu,
      iceCoffee,
      tea,
      bakery,
    };
  },
};
</script>

<style lang="scss">
@import "/src/styles/style.scss";
.menu {
  width: 100%;
  position: relative;
  margin: 0, 5%;

  &__title {
    text-transform: uppercase;
    color: $main-color;
    margin-bottom: 20px;
    font-family: $title-font;
    font-size: $subtitle;
    padding-left: 5%;
  }
  &__icon {
    transform: translateX(140px);
    z-index: 0;
    &--second {
      position: absolute;
      left: -9%;
      top: 37%;
      transform: rotate(196deg);
    }
    &--last {
      transform: translateX(120px);
      z-index: 0;
    }
  }
  &__content {
    font-size: $nav-logo;
    width: 40%;
    margin: auto;
    display: inline-block;
  }
  &__icon-title {
    margin-right: 25px;
  }
  &__row {
    display: flex;
    width: 90%;
    margin: auto;
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
    &--second {
      display: flex;
      width: 100%;
      justify-content: space-between;
      font-size: $nav;
      font-weight: 400;
      margin-bottom: 5px;
    }
    &--last {
      display: flex;
      width: 100%;
      justify-content: space-between;
      font-size: $nav;
      font-weight: 400;
      margin-bottom: 5px;
      &:nth-child(7) {
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
      &:nth-child(9) {
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
  }
  &__price {
    font-weight: 600;
  }
  &__icon-wrapper {
    position: absolute;
    overflow-x: hidden;
    right: 0;
    top: -150px;
    &--last {
      position: absolute;
      overflow-x: hidden;
      right: 0;
      bottom: -5%;
      z-index: 0;
    }
  }

  &__img {
    width: 50%;
    max-width: 100%;
    z-index: 10;
    &--right {
      align-items: flex-end;
    }
  }
}
</style>