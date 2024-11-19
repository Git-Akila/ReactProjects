import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';
function Transaction({transactions}) {
    console.log("trans"+transactions);
    const {deleteTransaction}=useContext(GlobalContext)
    const sign=transactions.amount<0?'-':'+';
  return (
    <>
        <li key={transactions.id} className={transactions.amount<0?'minus':'plus'} >
    {transactions.text} <span>{sign}${Math.abs}{transactions.amount}</span>
<button className='delete-btn'
onClick={()=>deleteTransaction(transactions.id)}>x</button>
    </li>
    </>
  )
}

export default Transaction