import React, { useContext } from 'react';
import { CountContext } from '../context';
import CreditCounterUI from '../UI/Counter/CreditCounterUI';

const CreditHeader = () => {
  const {getMonthlyInstalment, getTotalAmount} = useContext(CountContext);
    
    const calcResult = [
        {id:1, inscription: 'ЕЖЕМЕСЯЧНЫЙ ПЛАТЕЖ', counter: () => getMonthlyInstalment()},
        {id:2, inscription: 'ОБЩАЯ СУММА ВЫПЛАТ', counter: () => getTotalAmount()},
    ]

    return (
        <div className='credit-counters'>
            {calcResult.map(elem =>
                <CreditCounterUI
                    inscription={elem.inscription}
                    counter={elem.counter()}
                    key={elem.id}
                />
            )}
        </div>
    );
};

export default CreditHeader;
