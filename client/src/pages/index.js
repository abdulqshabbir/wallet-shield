/* Tailwind only works properly for .js files not .jsx */
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ExpenseCategory from '../components/ExpenseCategory';
import Footer from '../components/Footer';
import Test from '../components/Test.js';

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
	);
}
  
export default App;
