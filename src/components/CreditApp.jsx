import React from 'react';
import CreditBody from './CreditBody';
import CreditHeader from './CreditHeader';

const CreditApp = () => {
    return (
        <div className='credit-calculator'>
            <CreditHeader/>
            <CreditBody/>
        </div>
    );
};

export default CreditApp;
