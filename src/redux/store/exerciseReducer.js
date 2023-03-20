import { createSlice } from "@reduxjs/toolkit";
import { getActivitiesList } from "./actions";

const exerciseReducer = createSlice({
  name: "exercise",
  initialState: {
    user: null,
    loader: false,
    errors: {},
    activitiesList: []
  },
  reducers: {
    userDataAction: (state, action) => {
      state.user = action.payload
    },
    nullUserData: (state, action) => {
      state.user = null
    },
  },
  extraReducers: {
    [getActivitiesList.pending]: (state, action) => {
      state.loader = true;
    },
    [getActivitiesList.fulfilled]: (state, action) => {
      state.loader = false;
      state.activitiesList = [...action.payload];
    },
    [getActivitiesList.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
  },
});
export const { userDataAction, nullUserData } = exerciseReducer.actions;
export default exerciseReducer.reducer;
