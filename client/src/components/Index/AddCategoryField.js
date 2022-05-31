import React from "react"
import Spinner from "../Spinner"
import { useState } from "react"
import { useCategories } from "../../contexts/Categories"
import createCategory from "../../services/createCategory"

export default function AddCategoryField({ render, setRender }) {
	const [categoryName, setCategoryName] = useState("")
    const [categories, setCategories] = useCategories()
    const [loading, setLoading] = useState(false)

    function createNewCategory() {
        setLoading(true)
		createCategory(categoryName)
			.then(newCategory => {
                setLoading(false)
				setCategories([...categories, newCategory ])
				setCategoryName("")
                setRender(false)
			})
			.catch(e => {
                // HANDLE UI STATE DURING ERROR
                console.log(e)
                setLoading(false)
			})
	}
    function handleClose() {
        setRender(false)
        setCategoryName("")
    }
    if(render) {
        return (
            <div className=" h-58 w-60 absolute top-8 p-4 flex flex-col justify-center text-white z-10 bg-gray-500">
                <input value={categoryName} onChange={e => setCategoryName(e.target.value)} className="h-12 p-2 my-2 text-black" placeholder="Category Name"/>
                <button
                    onClick={createNewCategory}
                    className="h-10 my-2 flex justify-center items-center bg-primaryBlue rounded-sm hover:bg-blue-300">
                    { loading ? <Spinner height={'1.8rem'} width={'1.8rem'} /> : "Create Category" }
                </button>
                <button onClick={handleClose} className="h-10 my-2 bg-gray-400 rounded-sm hover:bg-gray-300">Cancel</button>
            </div>
        )
    } else {
        return null
    }
}