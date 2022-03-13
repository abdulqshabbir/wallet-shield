/* Tailwind only works properly for .js files not .jsx */
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import ExpenseCategory from '../components/ExpenseCategory'
import Test from '../components/Test'
import Footer from '../components/Footer'

function App() {
	return (
		<div>
			<Sidebar/>
			<div className="h-screen">
				<Header/>
				<main>
					<ExpenseCategory categoryName={"Immediate Obligations"}/> 
					<Test />
				</main>
				<Footer/>
			</div>
		</div>
	)
}
  
export default App
