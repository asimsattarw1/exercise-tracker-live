import { createSlice } from "@reduxjs/toolkit";
import { getActivitiesList } from "./actions";

const exerciseReducer = createSlice({
  name: "exercise",
  initialState: {
    user: null,
    loader: false,
    errors: {},
    activitiesList: [],
    edit: null
  },
  reducers: {
    userDataAction: (state, action) => {
      state.user = action.payload
    },
    logoutAction: (state, action) => {
      state.user = null;
      state.activitiesList = [];
      state.edit = null;
    },
    editAction: (state, action) => {
      state.edit = action.payload;
    },
    nullEditAction: (state, action) => {
      state.edit = null;
    }
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
export const { userDataAction, logoutAction, editAction, nullEditAction } = exerciseReducer.actions;
export default exerciseReducer.reducer;
