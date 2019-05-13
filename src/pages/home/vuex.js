import { API } from "@/api/index.js";


const home = {
  state: {
    homeData:[]
  },
  mutations: {
    GET_HOME_DATA: (state, homeData) => {
      state.homeData = homeData
    }
  },
  actions: {
    getHomeData({ commit }, params,cb) {
      API.getHomeData({}).then(ret=>{
          commit('GET_HOME_DATA', ret.data||[]);
        })
     }
  }
}

export default home
