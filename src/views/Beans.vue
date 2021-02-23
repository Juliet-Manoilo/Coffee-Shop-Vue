<template>
  <section class="beans">
    <Market />
    <Form />
  </section>
</template>
<script>
import Market from "../components/sections/Market.vue";
import Form from "../components/sections/Form.vue";
export default {
  name: "Beans",
  components: { Market, Form },
};
</script>

<style lang='scss'>
@import "../styles/style.scss";
</style>
