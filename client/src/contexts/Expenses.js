import React, { useEffect, useState } from "react"
import getExpenses from "../services/getExpenses"

const Expenses = React.createContext()

export function useExpenses() {
    return React.useContext(Expenses)
}

export default function ExpensesProvider({ children }) {
    const [ expenses, setExpenses ] = useState([])
    useEffect(() => {
        getExpenses().then(expenses => {
            if (expenses !== null) {
                setExpenses(expenses)
            }
        })
    }, [])
    return(
        <Expenses.Provider value={[expenses, setExpenses]}>
            {children}
        </Expenses.Provider>
    )
}
