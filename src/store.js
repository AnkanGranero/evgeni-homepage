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
        class: "long",
        subject: "Evgeni"
      },
      {
        id: 2,
        src: "./images/dreamingOfSpace.jpg",
        class: "wide",
        subject: "Evgeni"
      },
      { id: 3, src: "./images/face.jpg", class: "wide",
    subject: "Evgeni" },
      {
        id: 4,
        src: "./images/instruerar.jpeg",
        class: "wide",
        subject: "Evgeni"
      },
      {
        id: 5,
        src: "./images/onSet.jpeg",
        class: "wide",
        subject: "Evgeni"
      },
      {
        id: 6,
        src: "./images/onSet2.jpeg",
        class: "wide",
        subject: "Evgeni"
      },
      {
        id: 7,
        src: "./images/stairs.jpg",
        class: "long",
        subject: "Evgeni"
      },
      {
        id: 8,
        src: "./images/standing.jpg",
        class: "long",
        subject: "Evgeni"
      }, {
        id: 9,
        src: "./images/Hej.jpg",
        class: "long",
        subject: "Evgeni"
      },
      {
        id: 10,
        src: "./images/viSomAkte.jpg",
        header: "Vi var de som åkte",
        bodytext:  `Jag håller på att slutföra dokumentärfilmen
        Vi var de som åkte som jag regisserat.
        Den handlar om mormor och morfars flykt från Chile till Sverige efter militärkuppen i Santiago 1973,
        om hur deras liv blivit påverkade av det som hände.
        Jag har gjort intervjuer med mormor, morfar, deras barn och med de som blev kvar och levde under diktaturen.
        Filmen tar upp frågor kring flykt, saknad, sorg, förlust och kärlek som övervinner gränser och avstånd.
        Kommer snart! `,
        subject: "miscellaneous"
      },
      {
        id:11,
        src: "./images/svt.jpg",
        header:"Vad ska vi göra idag?",
        bodytext: `Nu är ryska versionen av URs Vad ska vi göra idag ute där jag läst in Bengt! Regisserad av Johanna Oskarsson.`,
        href:"https://urplay.se/program/209216-vad-ska-vi-gora-idag-ryska-bengt-och-bodil-far-besok",
        hrefText: "Alla avsnitt finns att lyssna på här",
        subject: "miscellaneous"

      },
      {
        id:12, 
        src: "./images/geInteUpp.jpg",
        header:"Ge inte upp musikvideo",
        bodytext: `Jag har tillsammans med Andreas Granér regisserat Dreaming of Space nya musikvideo Ge inte upp.
        Tack till Ashley Michael Briggs som filmade och till alla
        skådespelare och crew som var med!`,
        href: " https://www.youtube.com/watch?v=8CtTftYQQzs",
        hrefText: "Kolla in videon här",
        subject: "miscellaneous"
      }
    ],
    logos: [
      { name:"hamburger" ,
        src:"./logos/hamburger.png",
          },
        { name:"mail" ,
          href: "mailto:evgenileonov1987@gmail.com",
          src: "./logos/mail.png",
          type: "logolink"},
          
        { name:"facebook" ,
            href:"https://www.facebook.com/evgeni.leonov" ,
            src: "./logos/facebook.png",
            type: "logolink"},
        { name:"instagram",
              href:"https://www.instagram.com/gagarinleonov/" ,
              src:"./logos/instagram.png" ,
              type: "logolink"},
        { name:"spotify" ,
                href: "https://open.spotify.com/album/6WX0djbY030PdzVXdA6pSV",
                src:"./logos/spotify.png" ,
                type: "logolink"},
         {name: "youtube",
          href:"https://www.youtube.com/channel/UCkkFoTv_sk6_oVkLrV_tjrg",
          src:"./logos/youtube.png",
          type: "logolink"}
    ],
    arrow:"./images/arrow.png",
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
    toggleCellphoneMenuStatus(state) {

      state.showCellphoneMenu = !state.showCellphoneMenu
    },
    changeCellphoneMenuStatus(state, payload) {
      state.showCellphoneMenu = payload
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

      
      commit("toggleCellphoneMenuStatus")
    },
    closeOverlay({commit}, payload) {
      commit("changeCellphoneMenuStatus", payload)
     
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
    },
    logos: (state) => {
      return state.logos
    },
    arrow: state => {
      return state.arrow
    }
  }
});
