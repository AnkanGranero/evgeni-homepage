<template>
  <div class="cellphoneMenuWrapper">
    <ul>
      <li v-for="view in views" :key="view.name">
        <router-link
          v-if="view.params"
          @click.native="clickedOnLink"
          size="phone"
          :to="{name: 'video', params: { videoType: 'Skådespelare'}}"
        >{{view.name}}</router-link>
        <router-link v-else @click.native="clickedOnLink" :to="view.link">{{view.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CellPhoneMenu",

  computed: {
    views() {
      return this.$store.getters.views;
    }
  },
  methods: {
    clickedOnLink() {
      this.$store.dispatch("clickedOnHamburger");
    }
  }
};
</script>
<style lang="scss" scoped>
.cellphoneMenuWrapper {
  display: none;
}
@media only screen and (max-width: $mobile) {
  .cellphoneMenuWrapper {
    display: flex;
    position: fixed;
    background: rgb(0, 0, 0, 0.6);

    height: 100%;
    width: 100%;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    justify-content: space-evenly;

    align-items: center;
    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
    li {
      a {
        color: white;
      }
    }
  }
}
</style>
