import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  spinSlotMachine,
  getUserCoins,
} from '../../state/actions/slotMachineActions'
import { AppDispatch, RootState } from '../../state/store'
import '../slot-machine/slot-machine.styles.css'

const SlotMachinePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const {
    spinResult,
    coinsWon,
    updatedCoins,
    loading,
    currentCoins,
  } = useSelector((state: RootState) => state.slotMachine)

  useEffect(() => {
    dispatch(getUserCoins())
  }, [dispatch])

  const handleSpinClick = () => {
    dispatch(spinSlotMachine())
  }

  return (
    <div>
      <h1>Slot Machine Page</h1>
      <p>
        Initial User Coins:{' '}
        {currentCoins !== null ? currentCoins : updatedCoins } 💰
      </p>
      <p>Cost of Spin: 1 Coin 💰</p>
      <div className="slots">
        {spinResult ? (
          spinResult.map((symbol, index) => (
            <span className={`reel ${coinsWon !== null && coinsWon > 0 ? 'winning' : ''}`}
                  id={`reel${index + 1}`}
                  key={index}>
              {symbol}
            </span>
          ))
        ) : (
              <div className="reel">
                <span className="symbol2">🍒</span>
                <span className="symbol2">🍎</span>
                <span className="symbol2">🍌</span>
              </div>
        )}
      </div>

      <button
          style={{ animation: loading ? 'pulse 0.5s infinite' : '' }}
          className="spin-button"
          onClick={handleSpinClick}
          disabled={loading}
      >
        {loading ? 'Spinning...' : 'PLAY'}
      </button>
      <div className="results">
        {spinResult && <p>Result: {spinResult.join(', ')}</p>}
        {coinsWon !== null && <p>Coins Won: {coinsWon} 💰</p>}
        {updatedCoins !== null && <p>You have: {updatedCoins}, <strong>Try again!</strong></p>}
      </div>

      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Win Condition</th>
              <th>Coins</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🍒,🍒,🍒</td>
              <td>50 💰</td>
            </tr>
            <tr>
              <td>🍒,🍒</td>
              <td>40 💰</td>
            </tr>
            <tr>
              <td>🍎,🍎,🍎</td>
              <td>20 💰</td>
            </tr>
            <tr>
              <td>🍎,🍎</td>
              <td>10 💰</td>
            </tr>
            <tr>
              <td>🍌,🍌,🍌</td>
              <td>15 💰</td>
            </tr>
            <tr>
              <td>🍌,🍌</td>
              <td>05 💰</td>
            </tr>
            <tr>
              <td>🍋,🍋,🍋</td>
              <td>03 💰</td>
            </tr>
            <tr>
              <td>🍋,🍋</td>
              <td>02 💰</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SlotMachinePage
