import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface SpinSlotMachineResponse {
    spinResult: string[];
    coinsWon: number;
    updatedCoins: number;
    currentCoins: number;
}

interface GetUserCoinsResponse {
    userCoins: number;
}

export const getUserCoins = createAsyncThunk<GetUserCoinsResponse, void>(
    'slotMachine/getUserCoins',
    async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/user-coins'); // Update endpoint
            return response.data;
        } catch (error) {
            console.error('Error getting user coins:', error);
            throw error;
        }
    }
);
export const spinSlotMachine = createAsyncThunk<SpinSlotMachineResponse, void>(
    'slotMachine/spin',
    async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/slot-machine/spin');
            return response.data;
        } catch (error) {
            console.error('Error spinning slot machine:', error);
            throw error;
        }
    }
);
