import React, { useContext } from 'react';
import { CountContext } from '../context';
import CreditInputs from './CreditInputs';

const CreditField = ({onBlur, creditHandler, termError, termDirty, sumDirty, sumError}) => {
    const {isDataLoading, resultRequest, inputValue} = useContext(CountContext);
    
    return (
        <>
        {isDataLoading
            ?
            resultRequest
                ?
                <div className='blocks-wrapper success-request'>
                    КРЕДИТНАЯ ЗАЯВКА НА СУММУ {inputValue.sumCredit} РУБЛЕЙ УСПЕШНО ОТПРАВЛЕНА
                </div> 
                : 
                <div className='blocks-wrapper'>
                    <div className='lds-ring'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            : 
            <CreditInputs
                onBlur={onBlur}
                creditHandler={creditHandler}
                termError={termError}
                termDirty={termDirty}
                sumDirty={sumDirty}
                sumError={sumError}
            />
        }
        </>
    );
};

export default CreditField;