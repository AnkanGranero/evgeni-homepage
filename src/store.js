import Vue from "vue";
import Vuex from "vuex";
import {logos} from '@/media/'

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
    showCellphoneMenu: false,
    isOverlayVisible: false,
    desktopDropdown: false
  },
  mutations: {
    changeVideoDropDownState(state, payload) {
      state.videoDropDownIsActive = payload
    },
    setOverlay(state, bool) {
      state.isOverlayVisible = bool
    },
    setCellphoneMenu(state, payload) {
      state.showCellphoneMenu = payload
    },
    setIsDropdownVisible(state, bool) {
      state.desktopDropdown = bool
      console.log(state.desktopDropdown);
    },
    changeVideoType(state, payload) {
      state.chosenVideoType = payload
    }

  },
  actions: {
    clickedVideoType({ commit}, payload) {
      commit("changeVideoType", payload)
    },
    closeOverlay({ commit}) {
      commit("setOverlay", false);
      commit('setIsDropdownVisible',false);
      commit('setCellphoneMenu', false)
    }
  },
  getters: {
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
    getIsOverlayVisible: (state) => {
      return state.isOverlayVisible || state.showCellphoneMenu || state.desktopDropdown
    }
  }
});
