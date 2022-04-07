import React, { useEffect, useState } from "react"
import getCategories from "../services/getCategories"

const Categories = React.createContext()

export function useCategories() {
    return React.useContext(Categories)
}

export default function CategoriesProvider({ children }) {
    const [ categories, setCategories ] = useState([])
    useEffect(() => {
        getCategories()
           .then(categories => setCategories(categories))
           .catch(e => console.log(e))
    }, [])
    return(
        <Categories.Provider value={[categories, setCategories]}>
            {children}
        </Categories.Provider>
    )
}
