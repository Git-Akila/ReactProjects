import React,{useState,useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

function AddTransaction() {
    
    const {addTransaction}=useContext(GlobalContext)
    const [text,setText]=useState("")
    const [amt,setAmt]=useState("")
    

    const onSubmit=e=>{
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random()*100000000),
            text,
            amount:+amt
        }
        addTransaction(newTransaction);
    setText("");
    setAmt("");
       
    }
   
  return (<>
    
    <h3>Add new transaction</h3>
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >Amount <br />
          (negative - expense, positive - income)</label>
        
        <input type="number" value={amt} onChange={(e)=>setAmt(e.target.value)} placeholder="Enter amount..." />
      </div>
      <button className="btn">Add transaction</button>
    </form>
   
    </>
  )
}

export default AddTransaction