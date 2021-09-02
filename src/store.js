import Vue from "vue";
import Vuex from "vuex";
import { logos} from '@/media/'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logos,
    views: [
      { name: "Hej", link: "/" },
      { name: "Aktuellt", link: "/Aktuellt" },
      { name: "Galleri", link: "/Galleri" },
      { name: "Video", link: "/Video", params: ["Skådespelare", "Regissör", "Musik"],  },
      { name: "Cv", link: "/Cv" }
    ],
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
    getLogoByName: (state) => (logoName) =>  {
      return state.logos.find((logo) => logo.name ===  logoName);
    },
  }
});
