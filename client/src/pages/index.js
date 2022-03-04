/* Tailwind only works properly for .js files not .jsx */
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ExpenseCategory from '../components/ExpenseCategory';
import Footer from '../components/Footer';

function App() {
	return (
		<div>
			<Sidebar/>
			<div className="h-screen sm:bg-red-200 md:bg-red-300 lg:bg-red-400 xl:bg-blue-400 xl:pl-24 text-gray-800">
				<Header/>
				<main>
					<ExpenseCategory categoryName={"Immediate Obligations"}/> 
					<ExpenseCategory categoryName={"Entertainment"}/> 
				</main>
				<Footer/>
			</div>
		</div>
	);
}
  
export default App;


// 	 return (
// 	 	<div className="sm:bg-red-200 md:bg-red-300 lg:bg-red-500 xl:bg-red-600 text-gray-800">
// 	 		<div className="grid grid-cols-3 justify-items-center py-6">
// 	 			<FontAwesomeIcon className="text-2xl lg:text-3xl pt-2" icon={faEllipsis} />
// 	 			<h1>
// 	 				<span className="text-4xl lg:text-5xl">Feb 2022</span>&nbsp;
// 	 				<FontAwesomeIcon className="text-2xl lg:text-3xl pb-1 lg:pb-2" icon={faCircleChevronDown} />
// 	 			</h1>
// 	 			<FontAwesomeIcon className="text-2xl lg:text-3xl pt-2" icon={faPenToSquare} />
// 	 		</div>
	
// 			<div className="grid grid-cols-2 justify-items-center py-3 text-gray-700">
// 				<h2 className="text-xl lg:text-2xl">Assign your money</h2>
// 				<FontAwesomeIcon className="text-xl lg:text-2xl" icon={faArrowRight} />
// 			</div>

// 			<div className="grid grid-cols-2 justify-items-center py-6 gap-y-4">
// 				<h2 className="text-xl font-semibold">Immediate Obligations</h2>
// 				<h2 className="text-xl font-semibold">50%</h2>
// 				<p className="text-lg">Rent/Mortgage</p>
// 				<progress className="w-4/5 ring-2 rounded-lg ring-red-400" value="50" max="100"></progress>
// 				<p className="text-lg">Electric</p>
// 				<progress className="w-4/5 ring-2 rounded-lg ring-red-400" value="10" max="100"></progress>
// 				<p className="text-lg">Water</p>
// 				<progress className="w-4/5 ring-2 rounded-lg ring-red-400" value="90" max="100"></progress>
// 			</div>
// 			<div className="grid grid-cols-2 justify-items-center py-6 gap-y-4">
// 				<h2 className="text-xl font-semibold">True Expenses</h2>
// 				<h2 className="text-xl font-semibold">45%</h2>
// 				<p className="text-lg">Auto Maintainance</p>
// 				<progress className="w-4/5 ring-2 rounded-lg ring-red-400" value="30" max="100"></progress>
// 				<p className="text-lg">Home Maintainance</p>
// 				<progress className="w-4/5 ring-2 rounded-lg ring-red-400" value="60" max="100"></progress>
// 			</div>

// 			<div className="text-center pt-14">
// 				<FontAwesomeIcon className="text-2xl lg:text-3xl" icon={faCirclePlus} />
// 			</div>
// 		</div>
// 	)

