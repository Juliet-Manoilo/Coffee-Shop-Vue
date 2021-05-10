<template>
  <section class="app">
    <header class="header">
      <div class="header__wrapper">
        <router-link class="header__logo-link" to="/">coffee shop</router-link>
        <div class="header__nav">
          <router-link to="/" class="header__nav-link">Меню</router-link>
          <router-link to="/beans" class="header__nav-link"
            >Кофе в зернах</router-link
          >
          <router-link to="/contacts" class="header__nav-link"
            >Контакты</router-link
          >
        </div>
        <router-link class="header__contacts-link" to="/contacts"
          ><Icon icon="location" class="header__icon" />ул. Ришельевская,
          31</router-link
        >
      </div>
      <div class="header__burger-wrapper">
        <Slide right>
          <router-link to="/" class="header__nav-link">
            <span>Меню</span>
          </router-link>
          <router-link to="/beans" class="header__nav-link">
            <span>Кофе в зернах</span>
          </router-link>
          <router-link to="/contacts" class="header__nav-link">
            <span>Контакты</span>
          </router-link>
        </Slide>
      </div>
    </header>
    <router-view />
    <footer class="footer">
      <div class="footer__content-wrapper">
        <div class="footer__copyright">
          <a href="#main-page" class="footer__logo">coffee shop</a>
          <p class="footer__authors-wrapper">
            <span class="footer__author"
              >© Developer: Juliet Manoilo, 2021</span
            >
            <span class="footer__author"
              >© UI/UX-designer: Mariia Slasna, 2021</span
            >
          </p>
        </div>
        <div class="footer__col-nav">
          <div class="footer__nav-links">
            <router-link to="/" class="footer__nav-link">меню</router-link>
            <router-link to="/beans" class="footer__nav-link">
              кофе в зернах
            </router-link>
          </div>
          <div class="footer__time">
            <span class="footer__time-info">график работы: </span>
            <span class="footer__time-info">пн-вс 8:00 - 22:00</span>
          </div>
        </div>
        <div class="footer__contacts">
          <router-link to="/contacts" class="footer__nav-link">
            контакты:
          </router-link>
          <div class="footer__adresses">
            <span class="footer__adress">Одесса, ул.Ришельевская, 31</span>
            <a href="tel:+38098786754635" class="footer__tel"
              >+38098786754635</a
            >
          </div>
          <div class="footer__adresses">
            <span class="footer__adress">Одесса, ул.Садовая, 31</span>
            <a href="tel:+38098786754635" class="footer__tel"
              >+38098786754635</a
            >
          </div>
        </div>
        <div class="footer__col-nav">
          <div class="footer__adresses">
            <span class="footer__adress">Одесса, ул.Степовая, 31</span>
            <a href="tel:+38098786754635" class="footer__tel"
              >+38098786754635</a
            >
          </div>
          <div class="footer__social-links">
            <a
              href="http://www.instagram.com"
              class="footer__insta"
              target="_blank"
              ><Icon icon="instagram"
            /></a>
            <a href="http://www.facebook.com" class="footer__fb" target="_blank"
              ><Icon icon="facebook"
            /></a>
          </div>
        </div>
        <Icon icon="tracery" class="footer__icon" />
      </div>
      <Icon icon="tracery" class="footer__icon--second" />
      <div class="footer__icon-wrapper">
        <Icon icon="tracery" class="footer__icon--third" />
      </div>
    </footer>
  </section>
</template>

<script>
import Icon from "./components/icons/Icons.vue";
import { Slide } from "vue-burger-menu";
export default {
  components: { Icon, Slide },
};
</script>


<style lang="scss">
@import "./styles/style.scss";
.header {
  width: 100%;
  position: relative;
  background-color: $total-black;
  &__wrapper {
    width: 90%;
    display: flex;
    color: $main-color;
    min-height: 70px;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    z-index: 10000;
  }
  &__burger-wrapper {
    visibility: hidden;
    @media (max-width: 1000px) {
      visibility: visible;
      position: absolute;
      top: -20%;
      right: 0;
    }
  }
  &__logo-link {
    text-transform: uppercase;
    font-size: $nav-logo;
    font-weight: 500;
    font-family: $logo-font;
    margin-right: 30px;
    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: 1000px) {
      width: 250px;
    }
  }
  &__nav {
    width: 33%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: $nav;
    font-weight: 400;
    padding-left: 20px;
    @media (max-width: 1000px) {
      display: none;
    }
  }
  &__icon {
    margin-right: 10px;
  }
  &__contacts-link {
    align-items: center;
    display: flex;
    z-index: 100;
    &:hover .header__icon {
      transform: scale(1.5);
    }
    @media (max-width: 1000px) {
      visibility: hidden;
    }
  }
  &__nav-link:hover {
    transform: scale(1.1);
  }
}

.app {
  background-color: $black;
  z-index: 10000;
}

.footer {
  min-height: 30vh;
  color: $footer-color;
  overflow: hidden;
  font-size: $footer;
  position: relative;
  background-color: $total-black;
  padding-top: 3%;
  @media (max-width: 1000px) {
    min-height: 50vh;
  }
  @media (max-width: 960px) {
    min-height: 50vh;
    font-size: $btn;
  }
  @media (max-width: 772px) {
    font-size: $nav;
    min-height: 40vh;
  }
  @media (max-width: 556px) {
    font-size: $nav-logo;
  }
  &__icon {
    position: absolute;
    bottom: -20%;
    left: -10%;
    transform: rotate(156deg);
    z-index: 0;
    @media (max-width: 1000px) {
      bottom: -45%;
      transform: rotate(150deg);
    }
    @media (max-width: 772px) {
      bottom: -30%;
      transform: rotate(150deg);
    }
    &--second {
      position: absolute;
      bottom: -63%;
      right: 10%;
      transform: rotate(100deg);
      z-index: 0;
      @media (max-width: 1000px) {
        display: none;
      }
    }
    &--third {
      transform: rotate(25deg) translateX(160px);
      z-index: 0;
      @media (max-width: 1000px) {
        display: none;
      }
    }
  }
  &__content-wrapper {
    width: 90%;
    margin: auto;
    z-index: 100;
    height: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 556px) {
      flex-wrap: wrap;
    }
  }
  &__copyright {
    display: inline-flex;
    flex-direction: column;
    height: 90%;
    justify-content: space-between;
    width: 20%;
    @media (max-width: 1000px) {
      width: 40%;
    }
    @media (max-width: 960px) {
      display: none;
    }
  }
  &__logo {
    text-transform: uppercase;
    font-family: $logo-font;
    font-size: $nav-logo;
    z-index: 100;
    &:hover {
      color: $main-color;
      font-weight: 600;
      transition: 0.1s ease;
    }
  }
  &__authors-wrapper {
    z-index: 100;
    display: flex;
    flex-direction: column;
  }
  &__author {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__col-nav {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    z-index: 100;
    @media (max-width: 1000px) {
      width: 40%;
      height: 90%;
    }
    @media (max-width: 772px) {
      width: 45%;
      height: 70%;
      justify-content: flex-start;
      align-items: center;
    }
    @media (max-width: 556px) {
      width: 90%;
      height: 70%;
      justify-content: flex-start;
      align-items: center;
    }
  }
  &__nav-links {
    display: flex;
    flex-direction: column;
    height: 30%;
    justify-content: space-between;
    @media (max-width: 772px) {
      margin-bottom: 50px;
      justify-content: flex-start;
      :first-child {
        margin-bottom: 30px;
      }
    }
    @media (max-width: 556px) {
      align-items: center;
      margin-bottom: 10px;
    }
  }
  &__time {
    display: flex;
    flex-direction: column;
    height: 30%;
    justify-content: space-between;
    @media (max-width: 772px) {
      margin-bottom: 50px;
      justify-content: flex-start;
      :first-child {
        margin-bottom: 30px;
      }
    }
    @media (max-width: 556px) {
      align-items: center;
    }
  }
  &__contacts {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    z-index: 100;
    @media (max-width: 1000px) {
      width: 40%;
    }
    @media (max-width: 772px) {
      width: 45%;
      height: 70%;
      justify-content: flex-start;
    }
    @media (max-width: 556px) {
      width: 90%;
      height: 70%;
      justify-content: flex-start;
      align-items: center;
    }
  }
  &__adresses {
    display: flex;
    flex-direction: column;
    height: 25%;
    justify-content: space-between;
    @media (max-width: 772px) {
      justify-content: flex-start;
      margin-bottom: 30px;
      :first-child {
        margin-bottom: 10px;
      }
    }
    @media (max-width: 556px) {
      align-items: center;
      text-align: center;
    }
  }
  &__insta {
    margin-right: 20px;
    &:hover {
      transform: scale(1.1);
      transition: 0.1s ease;
    }
  }
  &__fb:hover {
    transform: scale(1.1);
    transition: 0.1s ease;
  }
  &__nav-link {
    &:hover {
      color: $main-color;
      font-weight: 600;
      transition: 0.1s ease;
    }
    @media (max-width: 772px) {
      margin-bottom: 30px;
    }
  }
  &__icon-wrapper {
    position: absolute;
    overflow: hidden;
    right: 0;
    bottom: -20%;
  }
  &__social-links {
    @media (max-width: 556px) {
      margin-bottom: 30px;
    }
  }
}

.bm-burger-bars {
  background-color: $main-color;
}

.bm-cross {
  background: $main-color;
}

.bm-menu {
  height: 50%;
  background-color: $black;
  @media (max-width: 1000px) {
    height: 75%;
  }
}

.bm-item-list > * > span {
  color: $main-color;
}
</style>


