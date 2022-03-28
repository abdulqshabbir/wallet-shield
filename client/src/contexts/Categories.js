import React, { useState } from "react"

const Categories = React.createContext()

//TODO: remove later, just for demonstration
const defaultCategories = [
    {cId: 1, cName: "ImmediateObligations" },
    {cId: 2, cName: "School Expenses" },
    {cId: 3, cName: "Monthly Budget" }
]

export function useCategories() {
    return React.useContext(Categories)
}

export default function CategoriesProvider({ children }) {
    const [ categories, setCategories ] = useState(defaultCategories)
    return(
        <Categories.Provider value={[categories, setCategories]}>
            {children}
        </Categories.Provider>
    )
}
