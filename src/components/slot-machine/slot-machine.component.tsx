import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { spinSlotMachine, getUserCoins } from '../../state/actions/slotMachineActions';
import {AppDispatch, RootState} from '../../state/store';

const SlotMachinePage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { spinResult, coinsWon, updatedCoins, loading, userCoins, currentCoins } = useSelector((state: RootState) => state.slotMachine);

    useEffect(() => {
        dispatch(getUserCoins());
    }, [dispatch]);
    const handleSpinClick = () => {
        dispatch(spinSlotMachine());
    };

    return (
        <div>
            <h1>Slot Machine Page</h1>
            <p>Initial User Coins: {currentCoins !== null ? currentCoins : 'Loading...'}</p>
            <p>Cost of Spin: 1 Coin</p>
            <p>winConditions =
                '🍒,🍒,🍒': 50,
                '🍒,🍒': 40,
                '🍎,🍎,🍎': 20,
                '🍎,🍎': 10,
                '🍌,🍌,🍌': 15,
                '🍌,🍌': 5,
                '🍋,🍋,🍋': 3,
                '🍋,🍋': 2. </p>
            <button onClick={handleSpinClick} disabled={loading}>
                {loading ? 'Spinning...' : 'Spin the Slot Machine'}
            </button>
            {spinResult && <p>Result: {spinResult.join(', ')}</p>}
            {coinsWon !== null && <p>Coins Won: {coinsWon}</p>}
            {updatedCoins !== null && <p>You have: {updatedCoins}, Try again!</p>}
        </div>
    );
};

export default SlotMachinePage;
