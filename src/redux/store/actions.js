import { createAsyncThunk } from "@reduxjs/toolkit";

export const getActivitiesList = createAsyncThunk("activities", async () => {
    const res = await fetch(`http://localhost:7000/activity/get`);
    let data = await res.json();
    return data?.data;
});
