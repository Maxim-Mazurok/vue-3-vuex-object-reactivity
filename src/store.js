import { createStore } from "vuex";

export default createStore({
  state: {
    object: {
      initialProperty: "defined",
    },
  },
  mutations: {
    setPropOnObject(state, { prop, val }) {
      state.object[prop] = val;
    },
  },
  actions: {
    onSetObjectProperty: (context, { prop, val }) => {
      context.commit("setPropOnObject", { prop, val });
    },
  },
  modules: {},
});
