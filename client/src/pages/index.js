/* Tailwind only works properly for .js files not .jsx */
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import ExpenseCategory from '../components/ExpenseCategory'
import Test from '../components/Test'
import Footer from '../components/Footer'
import React, { useState } from 'react'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { expenses: [] }
		this.submit = this.submit.bind(this)
	}

	componentDidMount() {
		fetch("http://localhost:4000/expenses")
			.then(res => res.json())
			.then(expenses => this.setState({ expenses: expenses }))
			.catch(e => console.log(e))
	}

	submit(data) {
		this.setState({ expenses: this.state.expenses.concat(data) })
	}
	
	render() {
		return (
			<div>
				<Sidebar/>
				<div className="h-screen">
					<Header/>
					<main>
						<ExpenseCategory categoryName={"Immediate Obligations"} expenses={this.state.expenses}/> 
						<Test onSubmit={(e) => this.submit(e)} />
					</main>
					<Footer/>
				</div>
			</div>
		)
	}
}
  
export default App
