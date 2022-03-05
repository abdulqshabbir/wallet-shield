import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faTree, faCircleChevronDown, faMoneyBill1Wave, faChartLine, faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import React from 'react'


					// <FontAwesomeIcon className="hover:text-blue-300 text-xl sm:text-2xl md:text-3xl pt-2" icon={faCirclePlus} />
					// <h1 className="hover:text-blue-300">
					// 	<span className="text-3xl sm:text-4xl md:text-5xl">Feb&nbsp;2022</span>
					// 	<FontAwesomeIcon className="text-xl sm:text-2xl md:text-3xl pb-1 md:pb-2 pl-2 sm:pl-3 md:pl-4 lg:pl-6" icon={faCirclePlus} />
					// </h1>
					// <FontAwesomeIcon className="hover:text-blue-300 text-xl sm:text-2xl md:text-3xl pt-2" icon={faCirclePlus} />
					// <div className="xl:invisible pt-14 text-xl">
					// 	<FontAwesomeIcon className="hover:text-blue-300 text-xl sm:text-2xl md:text-3xl" icon={faCirclePlus} />
					// </div>

function Footer() {
	 return (
		 <React.Fragment>
			 <div className="xl:invisible grid grid-cols-5 justify-content-center justify-around pt-20 text-2xl px-12">
					<a className="hover:text-blue-500 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faCircleChevronDown} />
					</a>
					<a className="hover:text-blue-500 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faMoneyBill1Wave} />
					</a>
					<a className="hover:text-blue-500 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faChartLine} />
					</a>
					<a className="hover:text-blue-500 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faBuildingColumns} />
					</a>
					<a className="hover:text-blue-50 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faCirclePlus} />
					</a>
				</div>
		 </React.Fragment>
	 )
}

	 // return (
		 // <React.Fragment>
			// <div className="sidenav invisible xl:visible text-xl text-blue-200 bg-blue-900 pt-3">
				// <a className="hover:text-blue-50 mb-2" href="#a">
					// <FontAwesomeIcon className="hover:text-green-600 text-lg pr-3" icon={faTree} />
					// Abdul's Budget
					// <FontAwesomeIcon className="text-lg pl-3" icon={faCircleChevronDown} />
				// </a>
				// <a className="hover:text-blue-50 mb-2" href="#a">
					// <FontAwesomeIcon className="text-lg pr-3" icon={faMoneyBill1Wave} />
				// Budget
			  // </a>
				// <a className="hover:text-blue-50 mb-2" href="#a">
					// <FontAwesomeIcon className="text-lg pr-3" icon={faChartLine} />
					// Reports
				// </a>
				// <a className="hover:text-blue-50 mb-2" href="#a">
					// <FontAwesomeIcon className="text-lg pr-3" icon={faBuildingColumns} />
					// All Accounts
				// </a>
				// <div className="mb-2 pl-4 bg-black">
					// {displayAccountMessage}
				// </div>
				// <a className="hover:text-blue-50 mb-2" href="#a">
					// <FontAwesomeIcon className="text-lg pr-3" icon={faCirclePlus} />
					// Add Accounts
				// </a>
			// </div>
		 // </React.Fragment>
	 // )
// }


export default Footer
