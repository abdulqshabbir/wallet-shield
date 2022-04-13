import React, { useState } from "react"
import { useCategories } from "../../contexts/Categories"
import createCategory from "../../services/createCategory"

export default function AddCategoryField({ renderAddCategory, setRenderAddCategory }) {
	const [categories, setCategories] = useCategories()
	const [cName, setcName] = useState("")
	const [error, setError] = useState(null)
	function createNewCategory() {
		createCategory(cName)
			.then(newCategory => {
				setCategories([...categories, newCategory ])
				setcName("")
				setRenderAddCategory(false)
				setError(null)
			})
			.catch(e => {
				setError(e.message)
			})
	}
	if (renderAddCategory) {
		return (
			<React.Fragment>
                <div className="h-12 my-2 mx-8 flex flex-wrap justify-between items-center">
                    <label className="w-1/2" htmlFor="cName" placeholder="Category Name">Category Name:</label>
                    <input
                        onChange={e => setcName(e.target.value)}
                        value={cName}
                        placeholder="Category Name"
                        className="w-1/2 h-10 p-2 border-2 border-gray-300 rounded-md" type="text" name="cName" id="cName"
                    />
                </div>
                <div className="text-red-500 text-center">
                    <p>{error}</p>
                </div>
                <div className="my-2 flex justify-center items-center">
                    <button onClick={() => createNewCategory()} className="h-12 mx-8 mb-4 w-full border-2 border-blue-400 bg-blue-200 rounded hover:bg-blue-400" >Save</button>
                </div>
			</React.Fragment>
		)
	}
	return null
}
