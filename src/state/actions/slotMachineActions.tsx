import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000/api'
interface SpinSlotMachineResponse {
  spinResult: string[]
  coinsWon: number
  updatedCoins: number
  currentCoins: number
  reelStates: ReelState[]
}

export interface ReelState {
  reelIndex: number
  currentIndex: number
  symbols: string[]
}

interface GetUserCoinsResponse {
  userCoins: number
}

interface StartSpinPayload {
  spinResult: string[]
}

export const startSpin = createAction<StartSpinPayload>('slotMachine/startSpin')
export const stopSpin = createAction('slotMachine/stopSpin')
export const updateReels = createAction<string[]>('slotMachine/updateReels')
export const updateReelStates = createAction<ReelState[]>(
  'slotMachine/updateReelStates',
)
export const spinSlotMachine = createAsyncThunk<SpinSlotMachineResponse, void>(
  'slotMachine/spin',
  async () => {
    try {
      const response = await axios.post(
          `${apiUrl}api/slot-machine/spin`,
      )
      return response.data
    } catch (error) {
      console.error('Error spinning slot machine:', error)
      throw error
    }
  },
)
export const getUserCoins = createAsyncThunk<GetUserCoinsResponse, void>(
  'slotMachine/getUserCoins',
  async () => {
    try {
      const response = await axios.get(`${apiUrl}api/user-coins`) // Update endpoint
      return response.data
    } catch (error) {
      console.error('Error getting user coins:', error)
      throw error
    }
  },
)
