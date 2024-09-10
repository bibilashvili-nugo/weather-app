import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "default",
  unit: "celsius",
  language: "en",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleUnit(state) {
      state.unit = state.unit === "celsius" ? "fahrenheit" : "celsius";
    },

    setLanguage(state, action) {
      state.language = action.payload;
    },

    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { toggleUnit, setLanguage, setTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
