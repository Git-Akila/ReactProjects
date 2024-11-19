import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction';

function TransactionList() {
    const {transactions}=useContext(GlobalContext);
  return (
   <>

    <h3>History</h3>
    <ul  className='list'>
    {transactions.map((transactions)=><Transaction transactions={transactions}/>)}
   

    </ul>
   </>
  )
}

export default TransactionList