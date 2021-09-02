<template>
  <div class="viewWrapper">
    <div v-if="moduleOpen" v-on:click="toggleModule()" id="moduleWrapper">
      <img :src="moduleImage" id="fullScreen" />
    </div>

    <div class="wrapper">
      <div class="overlay">
        <div
          v-for="picture in pictures"
          :key="picture.id"
          div
          class="cell"
          :class="picture.id"
        >
          <img
            :src="picture.src"
            v-bind:class="picture.class"
            v-on:click="getModuleImage(picture.id), toggleModule()"
            alt="picture on Evgeni Leonov"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { pictures } from "@/media";

export default {
  name: "Galleri",
  data() {
    return {
      moduleOpen: false,
      moduleImage: "",
      pictures,
    };
  },

  computed: {
    pictures() {
      return this.pictures.filter((p) => p.subject === "Evgeni");
    },
    picturesRow1() {
      return this.pictures.filter((picture) => picture.id < 4);
    },
    picturesRow2() {
      return this.pictures.filter(
        (picture) => picture.id < 7 && picture.id > 3
      );
    },
    picturesRow3() {
      return this.pictures.filter((picture) => picture.id > 6);
    },
  },

  methods: {
    toggleModule() {
      this.moduleOpen = !this.moduleOpen;
    },
    getModuleImage(id) {
      this.moduleImage = this.pictures.filter((p) => p.id == id)[0].src;
    },
  },
};
</script>
<style lang="scss" scoped>
#gallery {
  @media only screen and (max-width: $mobile) {
  }
}

.wrapper {
  margin: 5%;
  overflow: hidden;

  @media only screen and (max-width: $mobile) {
    height: 90vh;
    margin-bottom: 0;
  }
}

.overlay {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 30% 30% 30%;

  grid-gap: 5%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: $mobile) {
    margin-top: 10%;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 15% 15% 15%;
    grid-column-gap: 5%;
    grid-row-gap: 15%;
  }
}
.cell {
  width: 100%;
  height: 100%;
}
.cell img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 60% 20%;
  margin: auto;
}

h1 {
  margin-bottom: 10%;
}
.containerTest {
  height: auto;
  margin: 2rem;
  display: grid;

  grid-gap: 5%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}

#moduleWrapper {
  height: 100vh;
  width: 100vw;
  position: fixed;
  float: center;

  top: 0;

  background: rgb(3, 4, 2, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

#fullScreen {
  position: absolute;
  float: center;
  height: 70vh;
}
</style>


