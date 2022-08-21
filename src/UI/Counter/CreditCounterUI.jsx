import React from 'react';
import classes from './CreditCounterUI.module.css';

const CreditCounterUI = React.forwardRef(({counter, inscription}, ref) => {
    return (
        <div className={classes.counter}>
            <div ref={ref} className={classes.counterValue}>
                {counter}
            </div>
            <div className={classes.counterInscription}>
                <span className={classes.counterPrice}>
                    РУБ.
                </span>
                {inscription} 
            </div>
        </div>
    );
});

export default CreditCounterUI;
