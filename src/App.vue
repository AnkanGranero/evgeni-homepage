<template>
  <div id="app">
    <div class="appWrapper">
      <HeaderComponent />
      <div class="routerViewWrapper">
        <router-view :key="$route.fullPath"></router-view>
      </div>
      <Footer class="footer"></Footer>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/header/HeaderComponent.vue";
import BackToTop from "./components/BackToTop.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    HeaderComponent,
    BackToTop,
    Footer,
  },
  metaInfo() {
    return {
      title: "Evgeni-Leonov",
      meta: [
        {
          vmid: "description",
          name: "Evgeni Leonovs hemsida",
          content: "hemsida till skådespelare/musiker/regissör Evgeni Leonov",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Ilisarniq-Demi";
  src: url("/evgeni-homepage/fonts/Ilisarniq-Demi.eot");
  src: url("/evgeni-homepage/fonts/Ilisarniq-Demi.eot?#iefix")
      format("embedded-opentype"),
    url("/evgeni-homepage/fonts/Ilisarniq-Demi.woff2") format("woff2"),
    url("/evgeni-homepage/fonts/Ilisarniq-Demi.woff") format("font-woff"),
    url("/evgeni-homepage/fonts/Ilisarniq-Demi.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Ilisarniq-Light";
  src: url("/evgeni-homepage/fonts/Ilisarniq-Light.eot");
  src: url("/evgeni-homepage/fonts/Ilisarniq-Light.eot?#iefix")
      format("embedded-opentype"),
    url("/evgeni-homepage/fonts/Ilisarniq-Light.woff2") format("woff2"),
    url("/evgeni-homepage/fonts/Ilisarniq-Light.woff") format("woff"),
    url("/evgeni-homepage/fonts/Ilisarniq-Light.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Ilisarniq-DemiItalic";
  src: url("/evgeni-homepage/fonts/Ilisarniq-DemiItalic.eot");
  src: url("/evgeni-homepage/fonts/Ilisarniq-DemiItalic.eot?#iefix")
      format("embedded-opentype"),
    url("/evgeni-homepage/fonts/Ilisarniq-DemiItalic.woff2") format("woff2"),
    url("/evgeni-homepage/fonts/Ilisarniq-DemiItalic.woff") format("font-woff"),
    url("/evgeni-homepage/fonts/Ilisarniq-DemiItalic.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Ilisarniq-LightItalic";
  src: url("/evgeni-homepage/fonts/Ilisarniq-LightItalic.eot");
  src: url("/evgeni-homepage/fonts/Ilisarniq-LightItalic.eot?#iefix")
      format("embedded-opentype"),
    url("/evgeni-homepage/fonts/Ilisarniq-LightItalic.woff2") format("woff2"),
    url("/evgeni-homepage/fonts/Ilisarniq-LightItalic.woff") format("woff"),
    url("/evgeni-homepage/fonts/Ilisarniq-LightItalic.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
body {
  font-family: "Ilisarniq-Demi";
  color: black;
  margin: 0%;
}

span {
  font-family: "Ilisarniq-LightItalic";
}

h2 {
  font-size: 60px;
  margin-bottom: 0px;

  margin-top: 0px;
  letter-spacing: 4px;
  color: rgb(0, 0, 0);
}
h3 {
  font-family: "Ilisarniq-LightItalic";
  font-size: 20px;
  letter-spacing: 3px;
}

h4 {
  font-size: 30px;
}

p {
  font-size: 22px;
  font-family: "Ilisarniq-LightItalic";
}

a {
  text-decoration: none;
  color: black;
  font-family: "Ilisarniq-Light";
}
a:hover {
  cursor: pointer;
}

.body-content {
  text-align: left;
  width: 50%;
  padding: 20px;
  align-self: center;
  overflow: hidden;

  color: black;
  margin-bottom: 10%;
}

.videoImg {
  width: 768px;
  height: 432px;
}

#aktuellt {
  object-position: 0% 20%;
  opacity: 0.8;
}

.viewWrapper {
  display: inline-block;
  width: 100%;
  @media only screen and (min-width: $desktop) {
    min-height: 1900px;
  }
}
p {
  font-size: 22px;
  font-family: "Ilisarniq-LightItalic";

  @media only screen and (max-width: $mobile) {
    font-size: 19px;
  }
}
.appWrapper {
  /* box-sizing: border-box; */
  position: relative;
  /*  padding-bottom: 1em;  */
  min-height: 100%;
  /*  height:100vh; */
  overflow: hidden;
}
h1 {
  text-align: center;
  font-size: 60px;
  margin: 70px;
  margin-top: 0px;
  margin-bottom: 10%;
  display: none;
  @media only screen and (max-width: $mobile) {
    margin-top: -20%;
  }
}
li {
  font-size: 20px;
  padding: 10px;
  margin: 40px;
  margin-top: 0%;

  @media only screen and (max-width: $tablet) {
    padding: 0;
    margin: 30px;
    margin-top: 0;
  }
}

.routerViewWrapper {
  margin-bottom: 0;
  margin-top: 8%;
  @media only screen and (max-width: $tablet) {
  }
  @media only screen and (max-width: $mobile) {
    margin-top: 120px;
    margin-bottom: 0;
  }
}
.body-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin: 2%; */
  margin-top: 0%;
}
@media only screen and (max-width: $mobile) {
}
.body-content {
  text-align: left;
  width: 50%;
  padding: 20px;
  align-self: center;
  overflow: hidden;

  color: black;
  @media only screen and (max-width: $mobile) {
    width: 90%;
  }
}
#app {
  height: 100%;
  margin: 0;
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
}
</style>
