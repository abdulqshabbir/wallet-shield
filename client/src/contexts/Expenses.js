import React, { useState } from "react"

const Expenses = React.createContext()

//TODO: remove later, just for demonstration
const defaultExpenses = [
    {eId: 1, cId: 1, eName: "Groceries", eMax: 100, spent: 90},
    {eId: 2, cId: 2, eName: "Rent", eMax: 1000, spent: 500},
    {eId: 3, cId: 1, eName: "Internet", eMax: 40, spent: 10}
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
