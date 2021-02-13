 <template>
  <div class="menu">
    <Icon icon="tracery" class="menu__icon" />
    <h2 class="menu__title">меню</h2>
  </div>
</template>

<script>
import Icon from "../icons/Icons.vue";
export default {
  name: "MenuList",
  components: { Icon },
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
    right: -200px;
    top: -120px;
  }
}
</style>