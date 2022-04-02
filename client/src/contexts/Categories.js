import React, { useState } from "react"

const Categories = React.createContext()

//TODO: remove later, just for demonstration
const defaultCategories = [
    {id: 1, name: "ImmediateObligations" },
    {id: 2, name: "School Expenses" },
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
