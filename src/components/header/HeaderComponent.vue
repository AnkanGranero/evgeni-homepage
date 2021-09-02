<template>
  <div>
    <div v-if="dropDown" @click="dropDown = false" class="overlayz" />
    <div class="headerWrapper">
      <div class="topMenu">
        <h2 class="topMenu__header">EVGENI LEONOV</h2>
        <Hamburger />
      </div>

      <div class="bottomMenu">
        <div class="links">
          <a
            v-for="logo in logoLinks"
            :href="logo.href"
            :key="logo.name"
            class="links__link"
          >
            <img :src="logo.src" alt />
          </a>
        </div>
        <div class="menu">
          <li v-for="view in views" :key="view.name">
            <router-link :to="view.link">{{ view.name }}</router-link>
          </li>
          <li>
            <div class="dropdown">
              <a class="videoLink" @click="dropDown = true">Video</a>
            </div>
          </li>
        </div>
      </div>
    </div>
    <div class="dropdownContent" :class="{ active: dropDown }">
      <router-link
        @click.native="dropDown = false"
        class="dropdownLink"
        v-for="type in Object.values(VIDEO_TYPES)"
        :to="{ name: 'video', params: { videoType: type } }"
        :key="type"
        >{{ type }}</router-link
      >
    </div>
  </div>
</template>

<script>
import { VIDEO_TYPES } from "@/media/media.js";
import Hamburger from "./Hamburger.vue";
export default {
  name: "headerComponent",
  components: {
    Hamburger,
  },
  data() {
    return {
      dropDown: false,
      overlay: false,
      VIDEO_TYPES,
    };
  },
  computed: {
    views() {
      return this.$store.getters.views.filter((item) => item.name != "Video");
    },
    logoLinks() {
      return this.$store.getters.logos.filter((l) => l.type === "logolink");
    },
  },
};
</script>

<style lang="scss">
li {
  color: white;
  list-style: none;
}

.dropdown {
  color: black;
  font-family: "Ilisarniq-Light";
  position: relative;

  height: 200px;
}
.dropdownContent {
  display: none;
  position: absolute;
  right: 0;
  top: 168px;
  flex-direction: column;
  background: rgb(141, 235, 141);
  height: 200px;
  padding: 10px;
  justify-content: space-evenly;
  z-index: 5;
}
.active {
  display: flex;
}
.dropdown:hover .dropdownContent {
  display: flex;
}
.dropdownContent a {
  padding: 20px;
}
.dropdownContent a:hover {
  background-color: #61d470;
}

a.router-link-exact-active {
  text-decoration: none;

  -webkit-text-fill-color: rgb(241, 69, 127);
  -webkit-text-stroke-color: rgb(241, 69, 127);
}

.active a.router-link-exact-active {
  color: black;
}
.videoLinkActive {
  color: rgb(241, 69, 127);
}
.linkDeactivated {
  color: green;
}
.menu a:hover {
  cursor: pointer;
}
.topMenu {
  position: relative;
  height: 60px;
  background: rgb(141, 235, 141);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 30px;
  letter-spacing: 0;
  @media only screen and (min-width: $tablet) {
    flex-grow: 2;
  }
  &__header {
    font-size: 25px;
    letter-spacing: 0;
    margin-left: 20px;
    @media only screen and (min-width: $tablet) {
      font-size: 60px;
      margin-bottom: 10px;
      margin-left: 40px;
      letter-spacing: 4px;
    }
  }
}
.topMenuOld {
  position: relative;
  width: 100%;
  height: 60px;
  flex-grow: 2;
  @media only screen and (min-width: $tablet) {
    height: unset;
    padding-bottom: 10px;
  }
  display: flex;
  background: rgb(141, 235, 141);
  @media only screen and (max-width: $mobile) {
    flex-wrap: wrap;
  }
}
.nameWrapper {
  padding: 10px 40px;
  word-spacing: 10px;
  white-space: nowrap;
  flex: 1 1 560px;
  img {
    display: none;
  }

  @media only screen and (max-width: $mobile) {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: auto;
    word-spacing: 0%;

    display: flex;
    flex-direction: row;

    top: -10px;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (max-width: $smallMobile) {
    top: -5px;
  }
}
/* ---------------------------wrappers----------------------------------------------------- */
.bottomMenu {
  display: flex;
  background: rgb(176, 246, 255);
  padding: 0.7% 0;
  width: 100%;
  height: 40px;
  align-content: center;
  justify-content: space-between;

  @media only screen and (max-width: $mobile) {
    top: 76px;
  }
}
.headerWrapper {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;

  @media only screen and (min-width: $tablet) {
    position: relative;
    height: 168px;
  }
}

.links {
  display: flex;
  justify-content: space-around;
  width: 100%;
  &__link {
    display: flex;
    align-items: center;
  }
  @media only screen and (min-width: $tablet) {
    width: 40%;
    margin-left: 40px;
    display: flex;
    justify-content: flex-start;
  }
}
.links img {
  max-height: 70%;

  @media only screen and (max-width: $smallMobile) {
    margin-right: 0;
  }
}

.menu {
  display: flex;
  white-space: nowrap;
  margin-right: 40px;
  justify-content: space-between;
  align-content: center;
  right: 0px;
  width: 40%;

  & li {
    margin: 30px;
    margin-top: 6px;
    padding: 0;
    @media only screen and (max-width: $tablet) {
      font-size: 17px;
      margin: 15px;
      margin-top: 8px;
    }
  }

  @media only screen and (max-width: $mobile) {
    display: none;
  }
  /*  margin-top: 2%; */
}

.overlayz {
  position: fixed;
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0.3;
  z-index: 4;
}
</style>