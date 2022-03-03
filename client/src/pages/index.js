/* Tailwind only works properly for .js files not .jsx */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPenToSquare, faCircleChevronDown, faEllipsis, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

function App() {
	 return (
	 	<div className="sm:bg-red-200 md:bg-red-300 lg:bg-red-500 xl:bg-red-600 text-gray-800">
	 		<div className="grid grid-cols-3 justify-items-center py-6">
	 			<FontAwesomeIcon className="text-2xl lg:text-3xl pt-2" icon={faEllipsis} />
	 			<h1>
	 				<span className="text-4xl lg:text-5xl">Feb 2022</span>&nbsp;
	 				<FontAwesomeIcon className="text-2xl lg:text-3xl pb-1 lg:pb-2" icon={faCircleChevronDown} />
	 			</h1>
	 			<FontAwesomeIcon className="text-2xl lg:text-3xl pt-2" icon={faPenToSquare} />
	 		</div>
	
			<div className="grid grid-cols-2 justify-items-center py-3 text-gray-700">
				<h2 className="text-xl lg:text-2xl">Assign your money</h2>
				<FontAwesomeIcon className="text-xl lg:text-2xl" icon={faArrowRight} />
			</div>

			<div className="grid grid-cols-2 justify-items-center py-6 gap-y-4">
				<h2 className="text-xl font-semibold">Immediate Obligations</h2>
				<h2 className="text-xl font-semibold">50%</h2>
				<p className="text-lg">Rent/Mortgage</p>
				<progress className="w-4/5 ring-2 rounded-lg ring-red-400" value="50" max="100"></progress>
				<p className="text-lg">Electric</p>
				<progress className="w-4/5 ring-2 rounded-lg ring-red-400" value="10" max="100"></progress>
				<p className="text-lg">Water</p>
				<progress className="w-4/5 ring-2 rounded-lg ring-red-400" value="90" max="100"></progress>
			</div>
			<div className="grid grid-cols-2 justify-items-center py-6 gap-y-4">
				<h2 className="text-xl font-semibold">True Expenses</h2>
				<h2 className="text-xl font-semibold">45%</h2>
				<p className="text-lg">Auto Maintainance</p>
				<progress className="w-4/5 ring-2 rounded-lg ring-red-400" value="30" max="100"></progress>
				<p className="text-lg">Home Maintainance</p>
				<progress className="w-4/5 ring-2 rounded-lg ring-red-400" value="60" max="100"></progress>
			</div>

			<div className="text-center pt-14">
				<FontAwesomeIcon className="text-2xl lg:text-3xl" icon={faCirclePlus} />
			</div>
		</div>
	)

    // return (
    //   <div className='container lg mx-auto h-screen lg:max'>
    //     <header className='h-16 mx-12 flex flex-row justify-between items-center'>
    //       <div>
    //         <p>Feb 2022</p>
    //       </div>
    //       <div>
    //         <p>My Budget</p>
    //       </div>
    //       <div>
    //         <FontAwesomeIcon icon={faPenToSquare}/> 
    //       </div>
    //     </header>
    //     <section className='flex flex-row justify-between px-8 items-center h-16 bg-gray-100 mx-auto'>
    //         <p>Assign Your Money</p>
    //         <div className='flex justify-center items-center w-12 h-12 bg-gray-200 rounded'>
    //           <FontAwesomeIcon icon={faArrowRight} />
    //         </div>
    //     </section>
    //     <main>
    //       <header className='h-12 px-8 flex flex-row justify-between items-center bg-gray-300'>
    //         <h1 className='font-semibold'>Immediate Obligations</h1>
    //         <h2 className='font-semibold'>Amount Spent</h2>
    //       </header>
    //       <ul>
    //         <li className='flex justify-between items-center pl-8 h-12 border-b border-gray-100'>
    //           <div>Rent/Mortgage</div>
    //           <div className='h-6 w-1/3 bg-gray-100 rounded-'>
    //             <div className='w-1/3 h-full bg-green-500'>
    //             </div>
    //           </div>
    //         </li>
    //         <li className='flex justify-between items-center pl-8 h-12 border-b border-gray-100'>
    //           <div>Food</div>
    //           <div className='h-6 w-1/3 bg-gray-100 rounded-'>
    //             <div className='w-2/3 h-full bg-yellow-300'>
    //             </div>
    //           </div>
    //         </li>
    //         <li className='flex justify-between items-center pl-8 h-12 border-b border-gray-100'>
    //           <div>Groceries</div>
    //           <div className='h-6 w-1/3 bg-gray-100 rounded-'>
    //             <div className='w-5/6 h-full bg-red-500'>
    //             </div>
    //           </div>
    //         </li>
    //       </ul>
    //       <header className='h-12 px-8 flex flex-row justify-between items-center bg-gray-300'>
    //         <h1 className='font-semibold'>True Expenses</h1>
    //         <h2 className='font-semibold'>Amount Spent</h2>
    //       </header>
    //       <ul>
    //         <li className='flex justify-between items-center pl-8 h-12 border-b border-gray-100'>
    //           <div>Movies</div>
    //           <div className='h-6 w-1/3 bg-gray-100 rounded-'>
    //             <div className='w-1/3 h-full bg-green-500'>
    //             </div>
    //           </div>
    //         </li>
    //         <li className='flex justify-between items-center pl-8 h-12 border-b border-gray-100'>
    //           <div>Dining Out</div>
    //           <div className='h-6 w-1/3 bg-gray-100 rounded-'>
    //             <div className='w-2/3 h-full bg-yellow-300'>
    //             </div>
    //           </div>
    //         </li>
    //         <li className='flex justify-between items-center pl-8 h-12 border-b border-gray-100'>
    //           <div>Video Games</div>
    //           <div className='h-6 w-1/3 bg-gray-100 rounded-'>
    //             <div className='w-5/6 h-full bg-red-500'>
    //             </div>
    //           </div>
    //         </li>
    //       </ul>
    //     </main>
    //   </div>
    // );

  }
  
  export default App;
