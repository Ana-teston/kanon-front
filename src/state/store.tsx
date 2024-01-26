import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './reducers/gamesReducer';
import slotMachineReducer from "./reducers/slotMachineReducer";


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const store = configureStore({
    reducer: {
        games: gamesReducer,
        slotMachine: slotMachineReducer,
    },
});

export default store;

