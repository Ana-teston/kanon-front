import { createReducer } from '@reduxjs/toolkit'
import {
  getUserCoins,
  spinSlotMachine,
  startSpin,
  stopSpin,
  updateReelStates,
  ReelState,
} from '../actions/slotMachineActions' // Update the import statement

interface SlotMachineState {
  spinResult: string[] | null
  coinsWon: number | null
  updatedCoins: number | null
  currentCoins: number | null
  loading: boolean
  userCoins: number | null
  reelStates: ReelState[] // Make sure ReelState is correctly imported
  isSpinning: boolean
}

const initialState: SlotMachineState = {
  spinResult: null,
  coinsWon: null,
  updatedCoins: null,
  currentCoins: null,
  loading: false,
  userCoins: null,
  reelStates: [],
  isSpinning: false,
}

const slotMachineReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(startSpin, (state) => {
      state.isSpinning = true
    })
    .addCase(stopSpin, (state) => {
      state.isSpinning = false
    })
    .addCase(updateReelStates, (state, action) => {
      // Assuming you have an action to update reel states
      state.reelStates = action.payload
    })
    .addCase(spinSlotMachine.pending, (state) => {
      state.loading = true
    })
    .addCase(spinSlotMachine.fulfilled, (state, action) => {
      const { spinResult, coinsWon, updatedCoins, currentCoins } =
        action.payload
      const reelStates = action.payload.reelStates
      state.spinResult = spinResult
      state.coinsWon = coinsWon
      state.updatedCoins = updatedCoins
      state.currentCoins = currentCoins
      state.reelStates = reelStates
      state.loading = false
    })
    .addCase(spinSlotMachine.rejected, (state) => {
      state.loading = false
    })
    .addCase(getUserCoins.fulfilled, (state, action) => {
      state.currentCoins = action.payload.userCoins
    })
})

export default slotMachineReducer
