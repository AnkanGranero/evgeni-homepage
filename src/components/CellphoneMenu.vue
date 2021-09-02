<template>
  <div class="cellphoneMenuWrapper" @click="closeOverlay">
    <ul>
      <li v-for="view in views" :key="view.name">
        <router-link
          v-if="view.params"
          @click.native="closeOverlay"
          size="phone"
          :to="{ name: 'video', params: { videoType: VIDEO_TYPES.ACTOR } }"
          >{{ view.name }}</router-link
        >
        <router-link v-else @click.native="closeOverlay" :to="view.link">{{
          view.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { VIDEO_TYPES } from "@/media/";
export default {
  name: "CellPhoneMenu",
  data() {
    return {
      VIDEO_TYPES,
    };
  },
  computed: {
    views() {
      return this.$store.getters.views;
    },
  },
  methods: {
    closeOverlay() {
      this.$store.dispatch("closeOverlay", false);
    },
  },
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
    background: rgb(0, 0, 0, 0.8);

    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
    justify-content: space-evenly;

    align-items: center;
    ul {
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
    li {
      padding: 10px;
      a {
        color: white;

        white-space: nowrap;
      }
    }
  }
}
</style>
