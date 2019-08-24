import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videoTypes: ["Skådespelare", "Regissör", "Musik"],
    chosenVideoType: "Skådespelare",
  
    videos: [{
      link: "https://player.vimeo.com/video/144140675",
      type: ["Skådespelare"],
      name: "Showreel (Johan Falk)"

    }, {
      href: "https://urplay.se/program/209216-vad-ska-vi-gora-idag-ryska-bengt-och-bodil-far-besok?fbclid=IwAR1vX21dOZ1uJc3XOrqaMd7xF9sVdcKJ6l_EDuBVSIyMoidQQVzo6L4lwQU?cmpid=del:cl:20190708:urplay",
      img: "/images/svt.jpg",
      type: ["Skådespelare"],
      name: "Vad ska vi göra idag?"
    },
    {
      link: "https://player.vimeo.com/video/265363769",
      type: ["Skådespelare"],
      name: "Hyvlingsfällan",
    },
    {
      link: "https://player.vimeo.com/video/226292147",
      type: ["Skådespelare"],
      name: "Flight to Santiago (Monologföreställning)",

    },
    {
      link: "https://www.youtube.com/embed/FmHpjzFHWDk",
      type: ["Skådespelare"],
      name: "Ikeareklam",
      site: "youtube",
    },
    {
      link: "https://player.vimeo.com/video/238588753",
      type: ["Regissör"],
      name: "Bli kompis (Tillsammans med Elina Blomberg)"
    },
    {
      link: "https://player.vimeo.com/video/278312659",
      type: ["Regissör"],
      name: "Frivilliga familjehem (Tillsammans med Lina E. Johansson)"
    },
    {
      link: "https://player.vimeo.com/video/304840863",
      type: ["Regissör"],
      name: "Bara vara kompis (Tillsammans med Elina Blomberg)"
    },
    {
      link: "https://www.youtube.com/embed/8CtTftYQQzs",
      type: ["Regissör", "Musik"],
      name: "Ge Inte Upp - Dreaming Of Space",
      site: "youtube",
    },



    {
      link: "https://player.vimeo.com/video/123877158",
      type: ["Regissör", "Musik"],
      name: "Walls - Dreaming Of Space"

    },
    {
      link: "https://www.youtube.com/embed/6l6RDSQlGVQ",
      type: ["Musik"],
      name: "Moskva - Dreaming Of Space",
      site: "youtube",
    },
    {
      link: "https://www.youtube.com/embed/HvZ7DEnwFAQ",
      type: ["Musik"],
      name: "Motstånd - Dreaming Of Space",
      site: "youtube",

    },

    ],
    pictures: [
      {
        id: 1,
        src: "./images/blackNWhite.jpg",
        class: "long"
      },
      {
        id: 2,
        src: "./images/dreamingOfSpace.jpg",
        class: "wide"
      },
      { id: 3, src: "./images/face.jpg", class: "wide" },
      {
        id: 4,
        src: "./images/instruerar.jpeg",
        class: "wide"
      },
      {
        id: 5,
        src: "./images/onSet.jpeg",
        class: "wide"
      },
      {
        id: 6,
        src: "./images/onSet2.jpeg",
        class: "wide"
      },
      {
        id: 7,
        src: "./images/stairs.jpg",
        class: "long"
      },
      {
        id: 8,
        src: "./images/standing.jpg",
        class: "long"
      }, {
        id: 9,
        src: "./images/Hej.jpg",
        class: "long"
      }
    ],
    views: [
      { name: "Hej", link: "/" },
      { name: "På gång", link: "/Pagang" },
      { name: "Galleri", link: "/Galleri" },
      { name: "Video", link: "/Video", params: ["Skådespelare", "Regissör", "Musik"],  },
      { name: "Cv", link: "/Cv" }
    ],
    videoDropDownIsActive: false,
    showCellphoneMenu: false

  },
  mutations: {
    changeVideoDropDownState(state, payload) {

      state.videoDropDownIsActive = payload
      
    },
    changeCellphoneMenuStatus(state, payload) {

      state.showCellphoneMenu = !state.showCellphoneMenu
    },
    changeVideoType(state, payload) {

    
      state.chosenVideoType = payload
    }

  },
  actions: {
    clickedOnPage({ commit }, payload) {


      commit("changeVideoDropDownState", payload)
    },
    clickedOnHamburger({ commit }) {
      commit("changeCellphoneMenuStatus")
    },
    clickedVideoType({ commit}, payload) {
      commit("changeVideoType", payload)
    }




  },
  getters: {
    videos: (state) => {
      return state.videos
    },
    videoTypes: (state) => {
      return state.videoTypes
    },
    pictures: (state) => {
      return state.pictures
    },
    videoDropDownStatus: (state) => {
      return state.videoDropDownIsActive
    },
    showCellphoneMenuStatus: (state) => {
      return state.showCellphoneMenu
    },
    views: (state) => {
      return state.views
    }
  }
});
