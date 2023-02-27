import { createStore } from "vuex";
import db from "../data.json";
export const store = createStore({
  state() {
    return {
      jobLists: db,
    };
  },
  mutations: {},
});
