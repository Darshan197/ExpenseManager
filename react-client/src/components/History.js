import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const History = () => {
    const { transactions, loadTransactions } = useContext(GlobalContext)
    useEffect(() => {
        loadTransactions()
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                { transactions.map(transaction => <Transaction transaction={transaction} key={transaction._id} />)}
            </ul>
        </div>
    )
}

export default History