import { createSlice } from "@reduxjs/toolkit";

export type PopupsState = {
  leaderboard: boolean;
  about: boolean;
  settings: boolean;
};
const initialState: PopupsState = {
  leaderboard: false,
  about: false,
  settings: false,
};

const popupsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    showLeaderboard: (state) => {
      state.leaderboard = true;
      state.about = false;
      state.settings = false;
    },
    showAboutPopup: (state) => {
      state.leaderboard = false;
      state.about = true;
      state.settings = false;
    },
    showSettingsPopup: (state) => {
      state.leaderboard = false;
      state.settings = true;
      state.about = false;
    },
    hidePopups: (state) => {
      state.leaderboard = false;
      state.settings = false;
      state.about = false;
    },
  },
});

export const { showLeaderboard, showAboutPopup, showSettingsPopup, hidePopups } =
  popupsSlice.actions;
export const popupsReducer = popupsSlice.reducer;
