/* Tailwind only works properly for .js files not .jsx */
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import ExpenseCategory from '../components/ExpenseCategory'
import Test from '../components/Test'
import Footer from '../components/Footer'
import React, { useState, useEffect } from 'react'
import AssignMoney from '../components/AssignMoney'

function App(props) {
	const [state, setState] = useState({ expenses: [] })

	useEffect(() => {
		fetch("http://localhost:4000/expenses")
			.then(res => res.json())
			.then(expenses => setState({ expenses: expenses }))
			.catch(e => console.log(e))
	}, [])

	function submit(data) {
		setState({ expenses: state.expenses.concat(data) })
	}
	
	return (
		<div>
			<Sidebar/>
			<div className="h-screen">
				<Header/>
				<AssignMoney />
				<main>
					<ExpenseCategory categoryName={"Immediate Obligations"} expenses={state.expenses}/> 
					<Test onSubmit={(e) => submit(e)} />
				</main>
				<Footer/>
			</div>
		</div>
	)
}
  
export default App
