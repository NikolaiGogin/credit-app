import React, { useState } from "react";
import './styles/App.css';
import './styles/loader.css';
import axios from 'axios';
import CreditApp from './components/CreditApp';
import { CountContext } from './context';

function App() {
    const [inputValue, setInputValue] = useState({
      sumCredit: '', 
      termCredit: '',
  });

  const [isDataLoading, setIsDataLoading] = useState(false);
  const [resultRequest, setResultRequest] = useState(false);

  function getMonthlyInstalment (
    m=inputValue.termCredit,
    p=(16.9/12)/100,
    s=inputValue.sumCredit) {
      const regExpFloat = /^[0-9]*[.,]?[0-9]+$/;
        if (s==='' || m===''
          || !regExpFloat.test(String(inputValue.sumCredit).toLowerCase())
          || !regExpFloat.test(String(inputValue.termCredit).toLowerCase())) {
            return 0;
        } 
        const monthlyPayment = s*(p*(Math.pow(1+p,m)))/(Math.pow(1+p,m)-1);
        return monthlyPayment.toFixed();
  }
  
  function getTotalAmount (
    m=inputValue.termCredit,
    s=getMonthlyInstalment()
  ) {
    const regExpFloat = /^[0-9]*[.,]?[0-9]+$/;
    if (s !== null && regExpFloat.test(String(inputValue.termCredit).toLowerCase())) {
      return (s * m).toFixed();
    }
    return 0;
  }

  async function emulationRequest () {
    setIsDataLoading(true);
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { sumCredit: inputValue.sumCredit, termCredit: inputValue.termCredit});
      console.log('Returned data:', response);
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }
    setTimeout(() => {
      setResultRequest(true);
    }, 2000);
  }

  return (
    <CountContext.Provider value={{
      inputValue, setInputValue, getTotalAmount, getMonthlyInstalment,
      isDataLoading, emulationRequest, resultRequest
    }}>
      <div className='app'>
        <div className='wrapper'>
          <h1 className='title'>ЗАЯВКА НА КРЕДИТ</h1>
          <hr className='hr'/>
          <CreditApp/>
        </div>
      </div>
    </CountContext.Provider>
  );
}

export default App;
