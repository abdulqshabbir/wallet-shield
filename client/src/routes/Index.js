/* Tailwind only works properly for .js files not .jsx */
import Header from "../components/Header"
import Footer from "../components/Footer"
import React from "react"
import AssignMoney from "../components/AssignMoney"
import Expense from "../components/Expense"
import { useCategories } from '../contexts/Categories'
import { useExpenses } from '../contexts/Expenses'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function App(props) {
	return (
		<div className="min-w-content max-w-5xl mx-auto">
			{/* <Sidebar/> */}
			<div className="h-screen">
				<Header/>
				<AssignMoney />
				<Budget />
				<Footer/>
			</div>
		</div>
	)
}

function Budget() {
	const [categories, ] = useCategories()
	const [expenses, ] = useExpenses()
	return (
		<React.Fragment>
		<div className="h-14 px-4 flex flex-wrap justify-between items-center border-y-[0.5px] border-y-primaryGray-300">
			<h3 className="text-base text-gray-500">CATEGORY</h3>
			<h3 className="text-base text-gray-500">AVAILABLE</h3>
		</div>	
		{categories.map(category =>
			<RenderExpensesWithinCategories
				key={Math.random()*1000}
				expenses={expenses.filter(expense => expense.categoryId === category.id)}
				categoryName={category.name}
			/>)
		}

		</React.Fragment>
	)
}


function RenderExpensesWithinCategories({ categoryName, expenses }) {
    return (
        <React.Fragment>
			<div className="h-14 px-4 flex flex-wrap justify-between items-center bg-primaryGray-100 border-b-[0.5px] border-y-primaryGray-300">
				<div className="text-normal font-semibold flex justify-center items-center">
					<FontAwesomeIcon icon={faAngleDown} />
					<p className="ml-2">{categoryName}</p>
				</div>
				<h2 className="font-light text-gray-700">{`1100CAD`}</h2>
			</div>
			{
				expenses.map((e) => 
					<Expense
						key={e.id}
						expenseName={e.name}
						expenseAmount={e.remaining}
						expenseMax={e.max} />
				)
			}
        </React.Fragment>
    )
}
  
export default App
