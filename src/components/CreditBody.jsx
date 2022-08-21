import React, { useState, useContext, useEffect } from 'react';
import CreditMainButton from './CreditMainButton';
import { CountContext } from '../context';
import CreditField from './CreditField';

const CreditBody = () => {
    const {setInputValue} = useContext(CountContext);

    const [dataDirty, setDataDirty] = useState({
        sumCredit: false,
        termCredit: false,
    });
    const [dataError, setDataError] = useState({
        sumCredit: 'Введите сумму',
        termCredit: 'Введите срок кредита',
    });
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (dataError.sumCredit || dataError.termCredit) {
            setFormValid(false);
            return;
        }
        setFormValid(true)
    }, [dataError.sumCredit, dataError.termCredit]);

    function blurHandler (e) {
        switch (e.target.name) {
            case 'sumCredit':
                setDataDirty({...dataDirty, sumCredit: true});
                break;
            case 'termCredit':
                setDataDirty({...dataDirty, termCredit: true});
                break;
            default:
                return;
        }
    }

    function creditHandler (e) {
        const regExpFloat = /^[0-9]*[.,]?[0-9]+$/;
        setInputValue(e.target.value);
        const testValidity = regExpFloat.test(String(e.target.value).toLowerCase());

        switch (e.target.name) {
            case 'sumCredit':
                if (!testValidity) {
                    setDataError({...dataError, sumCredit: 'Некорректная сумма'});
                    return;
                }
                setDataError({...dataError, sumCredit: ''});
                break;
            case 'termCredit':
                if (!testValidity) {
                    setDataError({...dataError, termCredit: 'Введен некорректный срок'});
                    return;
                }
                setDataError({...dataError, termCredit: ''});
                break;
            default:
                return;
        }
    }

    return (
        <form className='credit-body-container'>
            <CreditField
                onBlur={e => blurHandler(e)}
                creditHandler={creditHandler}
                termDirty={dataDirty.termCredit}
                termError={dataError.termCredit}
                sumDirty={dataDirty.sumCredit}
                sumError={dataError.sumCredit}
            />
            <hr style={{margin: '10px'}}/>
            <CreditMainButton
                isDisabled={!formValid}
            />
        </form>
    );
};

export default CreditBody;
