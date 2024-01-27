import { createReducer } from '@reduxjs/toolkit';
import {getUserCoins, spinSlotMachine} from '../actions/slotMachineActions';

interface SlotMachineState {
    spinResult: string[] | null;
    coinsWon: number | null;
    updatedCoins: number | null;
    currentCoins: number | null;
    loading: boolean;
    userCoins: number | null;
}

const initialState: SlotMachineState = {
    spinResult: null,
    coinsWon: null,
    updatedCoins: null,
    currentCoins: null,
    loading: false,
    userCoins: null,
};

const slotMachineReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(spinSlotMachine.pending, (state) => {
            state.loading = true;
        })
        .addCase(spinSlotMachine.fulfilled, (state, action) => {
            const { spinResult, coinsWon, updatedCoins, currentCoins } = action.payload;
            state.spinResult = spinResult;
            state.coinsWon = coinsWon;
            state.updatedCoins = updatedCoins;
            state.currentCoins = currentCoins;
            state.loading = false;
        })
        .addCase(spinSlotMachine.rejected, (state) => {
            state.loading = false;
        })
        .addCase(getUserCoins.fulfilled, (state, action) => {
            state.userCoins = action.payload.userCoins;
        });
});

export default slotMachineReducer;
