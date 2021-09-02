<template>
  <img
    :src="$store.getters.getLogoByName('hamburger').src"
    class="hamburger"
    @click="clickedOnHamburger"
  />
</template>

<script>
export default {
  name: "Hamburger",
  methods: {
    clickedOnHamburger() {
      this.$store.dispatch("clickedOnHamburger");
    },
  },
};
</script>
<style lang="scss" scoped>
.hamburger {
  height: 60%;
  margin-right: 20px;
  @media only screen and (min-width: $tablet) {
    display: none;
  }
}
</style>