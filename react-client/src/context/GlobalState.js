import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
    transactions: [],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const loadTransactions = async () => {
        try {
            const res = await axios.get('/transactions')
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.transactions
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.err
            })
        }
    }

    const deleteTransaction = async (id) => {
        try {
            await axios.delete(`/transactions/${id}`)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.err
            })
        }
    }

    const addTransaction = async (transaction) => {
        try {
            const res = await axios.post('/transactions',transaction)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.transaction
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.err
            })
        }
    }
    return (<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction, loadTransactions, error: state.error, loading: state.loading}}> {children} </GlobalContext.Provider>)
}