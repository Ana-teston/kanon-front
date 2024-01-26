// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './reducers/gamesReducer';

// Root state type
export type RootState = ReturnType<typeof store.getState>;

// Configure the Redux store
const store = configureStore({
    reducer: {
        games: gamesReducer,
    },
});

export default store;

