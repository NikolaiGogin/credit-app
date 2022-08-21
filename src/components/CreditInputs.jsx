import React, { useContext } from 'react';
import { CountContext } from '../context';
import CreditInputUI from '../UI/Input/CreditInputUI';

const CreditInputs = ({onBlur, creditHandler, termError, termDirty, sumDirty, sumError}) => {
    const {inputValue, setInputValue} = useContext(CountContext);

    return (
        <div className="blocks-wrapper">
            <CreditInputUI
                id='1'
                title={'СУММА КРЕДИТА'}
                inscription={'РУБ.'}
                value={inputValue.sumCredit}
                onChange={e => {
                    creditHandler(e);
                    setInputValue({...inputValue, sumCredit: e.target.value});
                }}
                maxLength={10}
                onBlur={onBlur}
                name='sumCredit'
                dataError={sumError}
                dataDirty={sumDirty}
            />
            <CreditInputUI
                id='2'
                title={'СРОК КРЕДИТА'}
                inscription={'МЕС.'}
                value={inputValue.termCredit}
                onChange={e => {
                    creditHandler(e);
                    setInputValue({...inputValue, termCredit: e.target.value});
                }}
                maxLength={3}
                onBlur={onBlur}
                name='termCredit'
                dataError={termError}
                dataDirty={termDirty}
            />     
    </div>
    );
};

export default CreditInputs;
