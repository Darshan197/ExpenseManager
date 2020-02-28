import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
    const [text, settext] = useState('')
    const [amount, setAmount] = useState('')
    const { addTransaction } = useContext(GlobalContext)
    const newTrans = (e) => {
        e.preventDefault();
        const transaction = {id: Math.floor(Math.random() * 100000000), text, amount: +amount}
        addTransaction(transaction)
        setAmount('');
        settext('')
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={newTrans}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" placeholder="Enter text..." value={text} onChange={(e) => settext(e.target.value)} />
                </div>
                <div className="form-control">
                <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction