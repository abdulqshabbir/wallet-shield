import React, { useState } from "react"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleMinus, faCirclePlus, faFolderPlus, faGripHorizontal } from "@fortawesome/free-solid-svg-icons"
import { useCategories } from "../contexts/Categories"
import { useExpenses } from "../contexts/Expenses"

export default function Categories() {
	const [renderAddCategory, setRenderAddCategory] = useState(false)

	return (
		<React.Fragment>
			<Sidebar/>
				<Header/>
				<main>
					<div onClick={() => setRenderAddCategory(true)} className="h-14 flex flex-wrap justify-center items-center bg-gray-200 hover:bg-gray-300 cursor-pointer">
						<h2 className="mr-8 text-xl">Add New Category</h2>
						<FontAwesomeIcon className="hover:scale-125" icon={faFolderPlus} size="lg"/>
					</div>
					<AddCategoryField renderAddCategory={renderAddCategory} setRenderAddCategory={setRenderAddCategory} />
					<RenderCategories/>
				</main>
		</React.Fragment>
	)
}

function RenderCategories() {
	const [categories, _] = useCategories()
	return categories.map(c => <Category key={c.cId} category={c} /> )
}

function Category({ category }) {
	const [categories, setCategories] = useCategories()
	const [expenses, setExpenses] = useExpenses()
	const [renderAddExpenseField, setRenderAddExpenseField] = useState(false)

	function deleteCategory(cId) {
		setExpenses(expenses.filter(e => e.cId !== cId))
		setCategories(categories.filter(c => c.cId !== cId))
	}

	return (
		<React.Fragment>
			<div className="h-12 flex justify-between bg-gray-100 border-b-2 border-gray-200">
				<div className="w-3/4 flex justify-center items-center">
					<h2 className="overflow-ellipsis">{category.cName}</h2>	
					<FontAwesomeIcon onClick={() => deleteCategory(category.cId)} className="ml-4 cursor-pointer hover:scale-125" icon={faCircleMinus} />
				</div>
				<div className="w-1/4 flex justify-center items-center">
					<FontAwesomeIcon onClick={() => setRenderAddExpenseField(true)} className="hover:cursor-pointer hover:scale-125" icon={faCirclePlus} />
					<FontAwesomeIcon className="ml-4" icon={faGripHorizontal} />
				</div>
			</div>
			<AddExpenseField
				renderField={renderAddExpenseField}
				setRenderField={setRenderAddExpenseField}
				cId={category.cId}
			/>
			<RenderExpenses cId={category.cId} expenses={expenses} />
		</React.Fragment>
	)
}

function RenderExpenses({ cId, expenses }) {
	return expenses.filter(e => e.cId === cId).map(e => <Expense key={e.eId} expense={e} />)	
}

function Expense({ expense }) {
	return (
		<div className="flex flex-row flex-wrap justify-between border-b-2 border-b-gray-200">
			<h3 className="w-3/4 flex justify-center items-center">{expense.eName}</h3>
			<p className="w-1/4 flex justify-center items-center">{expense.eMax} CAD</p>
		</div>
	)
}

function AddCategoryField({ renderAddCategory, setRenderAddCategory }) {
	const [categories, setCategories] = useCategories()
	const [cName, setcName] = useState("")
	function createNewCategory() {
		// TODO: use proper id for cId not Math.random
		setCategories([...categories, {cName, cId: Math.random()*1000}])
		setcName("")
		setRenderAddCategory(false)
	}
	if (renderAddCategory) {
		return (
			<React.Fragment>
				<div className="h-12 my-4 mx-8 flex flex-wrap justify-between items-center">
					<label className="w-1/2" htmlFor="cName" placeholder="Category Name">Category Name:</label>
					<input
						onChange={e => setcName(e.target.value)}
						value={cName}
						placeholder="Category Name"
						className="w-1/2 h-10 p-2 border-2 border-gray-300 rounded-md" type="text" name="cName" id="cName"
					/>	
				</div>
				<div className="flex justify-center items-center">
					<button onClick={() => createNewCategory()} className="h-12 mx-8 mb-4 w-full border-2 border-blue-400 bg-blue-200 rounded hover:bg-blue-400" >Save</button>
				</div>
			</React.Fragment>
		)
	}
	return null
}

function AddExpenseField({ renderField, setRenderField, cId }) {
	const [expenses, setExpenses] = useExpenses()
	const [name, setName] = useState("")
	const [max, setMax] = useState("")

	function createNewExpense() {
		setRenderField(false)
		setExpenses([...expenses, { eName: name, eMax: max, cId }])
		setName("")
		setMax("")
	}
	if (renderField) {
		return(
			<div>
				<div className="h-12 my-4 mx-8 flex justify-between items-center">
					<label className="w-1/2" htmlFor="eName">Expense Name:</label>
					<input
						onChange={e => setName(e.target.value)}
						value={name}
						placeholder="Expense Name"
						className="w-1/2 h-10 p-2 border-2 border-gray-300 rounded-md" type="text" name="eName" id="eName"
					/>
				</div>
				<div className="h-12 my-4 mx-8 flex justify-between items-center">
					<label className="w-1/2" htmlFor="eMax">Monthly Budget:</label>
					<input
						onChange={e => setMax(Number(e.target.value))}
						value={max}
						placeholder="Monthly Budget"
						className="w-1/2 h-10 p-2 border-2 border-gray-300 rounded-md" type="text" name="eMax" id="eMax"
					/>
				</div>
				<div className="flex justify-center items-center">
					<button onClick={createNewExpense} className="h-12 mx-8 mb-4 w-full border-2 border-blue-400 bg-blue-200 rounded hover:bg-blue-400" >Save</button>
				</div>
			</div>
		)
	}
	return null
}