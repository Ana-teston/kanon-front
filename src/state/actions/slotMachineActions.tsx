import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const spinSlotMachine = createAsyncThunk<{ spinResult: string[], coinsWon: number, updatedCoins: number }, void>('slotMachine/spin', async () => {
    try {
        const response = await axios.post('http://localhost:8000/api/slot-machine/spin');

        return response.data;
    } catch (error) {
        console.error('Error spinning slot machine:', error);
        throw error;
    }
});
