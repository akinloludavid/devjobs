import { createStore } from "vuex";
import db from "../data.json";
interface IState {
  lightMode: boolean;
  jobLists: Record<string, any>[];
}
export const store = createStore({
  state() {
    return {
      jobLists: db,
      lightMode: true,
    };
  },
  mutations: {
    setLightMode({ lightMode }: IState) {
      if (localStorage.theme === "dark" || !("theme" in localStorage)) {
        localStorage.theme = "light";
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
      lightMode = true;
    },
    setDarkMode({ lightMode }: IState) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      lightMode = false;
    },
    toggleMode(state: IState) {
      if (localStorage.theme === "dark" || !("theme" in localStorage)) {
        state.lightMode = true;
        localStorage.theme = "light";
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      } else {
        state.lightMode = false;
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      }
    },
  },
});
