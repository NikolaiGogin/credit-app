import React, { useContext } from 'react';
import { CountContext } from '../context';
import CreditButtonUI from '../UI/Button/CreditButtonUI';

const CreditMainButton = ({isDisabled}) => {
    const {emulationRequest} = useContext(CountContext);

    return (
        <div className='credit-btns-field'>
            <CreditButtonUI
                title={'ОТПРАВИТЬ ЗАЯВКУ'}
                isDisabled={isDisabled}
                onClick={(e) => {
                    e.preventDefault();
                    emulationRequest();
                }}
            />
        </div>
    );
};

export default CreditMainButton;
