/* Tailwind only works properly for .js files not .jsx */
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ExpenseCategory from '../components/ExpenseCategory';
import Footer from '../components/Footer';

function App() {
	return (
		<div>
			<Sidebar/>
			<div className="h-screen">
				<Header/>
				<main>
					<ExpenseCategory categoryName={"Immediate Obligations"}/> 
					<ExpenseCategory categoryName={"Entertainment"}/> 
					<ExpenseCategory categoryName={"Entertainment"}/> 
				</main>
				<Footer/>
			</div>
		</div>
	);
}
  
export default App;
