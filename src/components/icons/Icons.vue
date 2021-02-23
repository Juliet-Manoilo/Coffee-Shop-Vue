<template>
  <component :is="getIcon"></component>
</template>
<script>
const getName = (name) => `icon-${name}`;
export default {
  name: "Icon",
  props: {
    icon: {
      type: String,
    },
  },
  components: {
    [getName("location")]: () => import("./Location.vue"),
    [getName("tracery")]: () => import("./tracery.vue"),
    [getName("coffeemachine")]: () => import("./Coffeemachine.vue"),
    [getName("crescent")]: () => import("./crescent.vue"),
    [getName("gift")]: () => import("./Gift.vue"),
    [getName("coffee-hot")]: () => import("./Coffee-hot.vue"),
    [getName("icecoffee")]: () => import("./Icecoffee.vue"),
    [getName("tea")]: () => import("./Tea.vue"),
    [getName("bakery")]: () => import("./Bakery.vue"),
    [getName("arrow")]: () => import("./Arrow.vue"),
    [getName("facebook")]: () => import("./Facebook.vue"),
    [getName("instagram")]: () => import("./Instagram.vue"),
    [getName("arrow-left")]: () => import("./Arrow-left.vue"),
    [getName("phone")]: () => import("./Phone.vue"),
    [getName("clock")]: () => import("./Clock.vue"),
  },
  computed: {
    getIcon() {
      return getName(this.icon);
    },
  },
};
</script>