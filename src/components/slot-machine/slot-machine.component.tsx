import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { spinSlotMachine } from '../../state/actions/slotMachineActions';
import {AppDispatch, RootState} from '../../state/store';

const SlotMachinePage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { spinResult, coinsWon, updatedCoins, loading } = useSelector((state: RootState) => state.slotMachine);

    const handleSpinClick = () => {
        dispatch(spinSlotMachine());
    };

    return (
        <div>
            <h1>Slot Machine Page</h1>
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
