import React from 'react';
import classes from './CreditInputUI.module.css';

const CalcInputUI = ({title, inscription, name, dataDirty, dataError, ...props}) => {
    return (
        <div className={classes.inputArea}>
            <label htmlFor='id' className={classes.label}>{title}</label>
            <div className={classes.creditInputWrapper}>
                <input 
                    {...props}
                    className={classes.creditInput}
                    type='text' 
                    placeholder='0'
                    autoComplete='off'
                    name={name}
                />
                <div className={classes.creditInputInscription}>
                    {inscription}
                </div>
                {(dataDirty && dataError) && <div className={classes.errorMessage}>{dataError}</div>}
            </div>
        </div>
    );
};

export default CalcInputUI;
