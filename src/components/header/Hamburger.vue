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