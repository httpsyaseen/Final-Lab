import { configureStore } from "@reduxjs/toolkit";
import dragonSlice from "../feature/dragons/dragonSlice";
import missionSlice from "../feature/missions/missionSlice";

const store = configureStore({
  reducer: {
    dragon: dragonSlice,
    mission: missionSlice,
  },
});

export default store;
