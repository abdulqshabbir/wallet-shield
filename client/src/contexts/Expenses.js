import React, { useState } from "react"

const Expenses = React.createContext()

//TODO: remove later, just for demonstration
const defaultExpenses = [
    {id: 1, cId: 1, name: "Groceries", max: 100, remaining: 100},
    {id: 2, cId: 2, name: "Rent", max: 1000, remaining: 1000},
    {id: 3, cId: 1, name: "Internet", max: 40, remaining: 40}
]

export function useExpenses() {
    return React.useContext(Expenses)
}

export default function ExpensesProvider({ children }) {
    const [ expenses, setExpenses ] = useState(defaultExpenses)
    return(
        <Expenses.Provider value={[expenses, setExpenses]}>
            {children}
        </Expenses.Provider>
    )
}
