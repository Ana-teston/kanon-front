import { createReducer } from '@reduxjs/toolkit';
import { spinSlotMachine } from '../actions/slotMachineActions';

interface SlotMachineState {
    spinResult: string[] | null;
    coinsWon: number | null;
    updatedCoins: number | null;
    loading: boolean;
}

const initialState: SlotMachineState = {
    spinResult: null,
    coinsWon: null,
    updatedCoins: null,
    loading: false,
};

const slotMachineReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(spinSlotMachine.pending, (state) => {
            state.loading = true;
        })
        .addCase(spinSlotMachine.fulfilled, (state, action) => {
            const { spinResult, coinsWon, updatedCoins } = action.payload;
            state.spinResult = spinResult;
            state.coinsWon = coinsWon;
            state.updatedCoins = updatedCoins;
            state.loading = false;
        })
        .addCase(spinSlotMachine.rejected, (state) => {
            state.loading = false;
        });
});

export default slotMachineReducer;
