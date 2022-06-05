import React, { useState } from "react"
import { useCategories } from "../../contexts/Categories"
import createCategory from "../../services/createCategory"
import Button from "../Shared/Button"
import Spinner from "../Shared/Spinner"

export default function AddCategoryField({ renderAddCategory, setRenderAddCategory }) {
	const [categories, setCategories] = useCategories()
	const [cName, setcName] = useState("")
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	function createNewCategory() {
		setLoading(true)
		createCategory(cName)
			.then(newCategory => {
				setLoading(false)
				setCategories([...categories, newCategory ])
				setcName("")
				setRenderAddCategory(false)
				setError(null)
			})
			.catch(e => {
				setLoading(false)
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
					<Button onClick={createNewCategory}>
						{ loading ? <Spinner /> : "Create New Category" }
					</Button>
                </div>
			</React.Fragment>
		)
	}
	return null
}
