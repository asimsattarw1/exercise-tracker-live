import { createAsyncThunk } from "@reduxjs/toolkit";

export const getActivitiesList = createAsyncThunk("activities", async ({uid, token}) => {
    console.log(token,"HERE IS TOKEN");
    console.log(uid,"HERE IS TOKEN");

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'authorization': `${token}` }
       
    };
    const res = await fetch(`http://localhost:7000/activity/get/${uid}`, requestOptions); 
    let data = await res.json();
    return data?.data;
});
