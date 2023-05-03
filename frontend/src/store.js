import { configureStore } from '@reduxjs/toolkit';
import nasaReducer from './redux/nasa/nasaReducer';
import ProfileReducer from "./redux/user/ProfileReducer";

export const store = configureStore({
    reducer: {
        profile: ProfileReducer,
        nasa: nasaReducer
    },
});