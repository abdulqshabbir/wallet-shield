import React, { useState } from "react"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleMinus, faCirclePlus, faFolderPlus, faGripHorizontal } from "@fortawesome/free-solid-svg-icons"

export default function Categories() {
	const [renderAddCategory, setRenderAddCategory] = useState(false)
	return (
		<React.Fragment>
			<Sidebar/>
				<Header/>
				<main>
					<div onClick={() => setRenderAddCategory(true)} className="h-14 flex flex-wrap justify-center items-center bg-gray-200 hover:bg-gray-300 cursor-pointer">
						<h2 className="mr-8 text-xl">Add New Category</h2>
						<FontAwesomeIcon icon={faFolderPlus} size="lg"/>
					</div>
					<AddCategoryField renderAddCategory={renderAddCategory} setRenderAddCategory={setRenderAddCategory}/>
					<Category cName={'Immediate Obligations'} />
					<Category cName={'School Expenses'} />
					<Category cName={'Entertainment'} />
				</main>
		</React.Fragment>
	)
}

function AddCategoryField({ renderAddCategory, setRenderAddCategory }) {
	if (renderAddCategory) {
		return (
			<div className="h-12 flex flex-wrap justify-between items-center">
					<div className="w-2/3">
						<input type="text" name="cName" placeholder="Category Name" className="h-12 w-full mr-4 bg-blue-200 p-1"/>
					</div>
					<div className="w-1/3">
						<button className="w-full h-12 bg-green-500" onClick={() => setRenderAddCategory(false)}>Save Category</button>
					</div>
			</div>
		)
	}
	return null
}

function Category({ cName }) {
	return (
		<div className="h-12 flex justify-between bg-gray-100 border-b-2 border-gray-200">
			<div className="w-3/4 flex justify-center items-center">
				<h2 className="overflow-ellipsis">{cName}</h2>	
				<FontAwesomeIcon className="ml-4" icon={faCircleMinus} />
			</div>
			<div className="w-1/4 flex justify-center items-center">
				<FontAwesomeIcon icon={faCirclePlus} />
				<FontAwesomeIcon className="ml-4" icon={faGripHorizontal} />
			</div>
		</div>
	)
}