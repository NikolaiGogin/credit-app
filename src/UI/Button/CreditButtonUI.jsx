import React from 'react';
import classes from './CreditButtonUI.module.css';

const CreditButtonUI = ({title, isDisabled, sendData, ...props}) => {

    return (
        <button 
            type='submit' 
            className={classes.CreditButton}
            disabled={isDisabled}
            {...props}
        >
            {title}
        </button>
    );
};

export default CreditButtonUI;
