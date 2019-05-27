import { API } from "@/api/index.js";

const global = {
  // namespaced: true,
  state: {
    navData:[],
    sideBar:{
      isFold:false
    }
  },
  mutations: {
    GET_NAV_DATA: (state, data) => {
      state.navData = data;
    },
    TOGGLE_SIDE_BAR: (state, data) => {
      state.sideBar.isFold =!state.sideBar.isFold;
    }
  },
  actions: {
    getNavData({ commit }, params,cb) {
      console.log(params)
      API.getNavData(params).then(ret=>{
        commit('GET_NAV_DATA', ret.data.topNav||[]);
      })
   },
    toggleSideBar({ commit }, params,cb) {
      commit('TOGGLE_SIDE_BAR', );
    }
  }
}

export default global
