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
  },
  computed: {
    getIcon() {
      return getName(this.icon);
    },
  },
};
</script>