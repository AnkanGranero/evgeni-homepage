<template>
  <div>
    <div class="headerWrapper">
      <div class="topMenu">
        <div class="nameWrapper">
          <h2>EVGENI LEONOV</h2>
          <img src="./logos/hamburger.png" class="hamburger" @click="clickedHamburger" />
        </div>
        <div class="logoWrapper">
          <a href="mailto:spitfire_ww_2@hotmail.com">
            <img src="./logos/mail.png" />
          </a>
          <a href="https://www.facebook.com/evgeni.leonov">
            <img src="./logos/facebook.png" />
          </a>
          <a href="https://www.instagram.com/gagarinleonov/">
            <img src="./logos/instagram.png" />
          </a>
          <a href="https://open.spotify.com/album/6WX0djbY030PdzVXdA6pSV">
            <img src="./logos/spotify.png" />
          </a>
          <a href="https://www.youtube.com/channel/UCkkFoTv_sk6_oVkLrV_tjrg">
            <img src="./logos/youtube.png" />
          </a>
        </div>
      </div>
      <div class="menuWrapper">
        <nav>
          <ul class="menu">
            <li v-for="view in views" :key="view.name">
              <router-link :to="view.link">{{view.name}}</router-link>
            </li>

            <li>
              <div class="dropdown">
                <a class="videoLink">Video</a>

                <div class="dropdownContent">
                  <router-link
                    class="dropdownLink"
                    v-for="type in videoTypes"
                    :to="{name: 'video', params: { videoType: type}}"
                    :key="type.index"
                  >{{type}}</router-link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerComponent",
  data() {
    return {
      hover: false
    };
  },

  methods: {
    videoDropClicked() {
      this.$store.dispatch("clickedOnPage", true);
    },
    clickedHamburger() {
      
      this.$store.dispatch("clickedOnHamburger");
    }
  },

  computed: {
    videoTypes() {
      return (this.videoType = this.$store.getters.videoTypes);
    },
    dropIsActive() {
      return this.$store.getters.dropdownContentStatus;
    },
    views() {
      return this.$store.getters.views.filter(item => item.name != "Video");
    }
  }
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
  z-index: 2;
  height: 200px;
}
.dropdownContent {
  display: none;
  position: absolute;
  right: 0;
  flex-direction: column;

  background: rgb(141, 235, 141);
  height: 200px;
  padding: 10px;

  margin-top: 1em;
  justify-content: space-evenly;
  z-index: 2;
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
  width: 100%;

  height: 60px;

  background: rgb(141, 235, 141);
  display: flex;
  padding-top: 2%;
  padding-bottom: 0%;
  @media only screen and (max-width: $mobile) {
    flex-wrap: wrap;
    padding: 0;
  }
}
/* ---------------------------wrappers----------------------------------------------------- */
.menuWrapper {
  display: flex;

  width: 100%;

 

  @media only screen and (max-width: $mobile) {
    display: none;
  }
}
.headerWrapper {
  @media only screen and (max-width: $mobile) {
    height: 50px;

    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
  }
}

.nameWrapper {
  margin-top: 0%;

  padding: 40px;
  padding-top: 0px;
  padding-bottom: 0px;
  word-spacing: 10px;
  white-space: nowrap;
  position: relative;
  top: -40%;
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

    top: 0;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 25px;
      letter-spacing: 0;

      margin-left: 5%;
    }
    img {
      display: block;
      height: 70%;
      margin-right: 20px;
    }
  }
}

.logoWrapper {
  width: 100%;
  height: 35px;
  
  display: flex;
  justify-content: flex-end;
  margin-right: 2%;
  flex: 1 1 360px;
  @media only screen and (max-width: $mobile) {
    /* margin-top: 15%;
    display: flex;
    justify-content: center; */
  }
}
.logoWrapper img {
  max-height: 100%;
  margin-right: 30px;
    @media only screen and (max-width: $pad) {
   display: none;
  }
  @media only screen and (max-width: $mobile) {
    height: 25px;
    display: none;
  }
}
.menu { display: flex;
  white-space: nowrap;

  position: absolute;
  
  justify-content: space-between;
  right:0px;
 /*  margin-top: 2%; */

}
</style>