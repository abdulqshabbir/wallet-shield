import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown, faTree, faMoneyBill1Wave, faChartLine, faBuildingColumns, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Sidebar() {
  const accounts = ['account1', 'account2', 'account3']
	let displayAccountMessage
	if (accounts.length === 0) {
		displayAccountMessage = <div><h4 className="pt-3">No Accounts</h4><p className="text-sm py-5">You can't budget without adding accounts first. How about adding one now?</p></div>
	} else {
		const list = 
		displayAccountMessage = <div><h4 className="pt-3">Your Accounts</h4><ul className="text-sm py-5 pl-6">{
			accounts.map(x => <li className="list-disc py-2">{x}</li>)
		}</ul></div>
	}

	 return (
		 <React.Fragment>
			<div className="sidenav invisible xl:visible text-xl text-blue-200 bg-blue-900 pt-3">
				<a className="mb-2" href="#a">
					<FontAwesomeIcon className="text-lg pr-3" icon={faTree} />
					Abdul's Budget
					<FontAwesomeIcon className="text-lg pl-3" icon={faCircleChevronDown} />
				</a>
				<a className="mb-2" href="#a">
					<FontAwesomeIcon className="text-lg pr-3" icon={faMoneyBill1Wave} />
				Budget
			  </a>
				<a className="mb-2" href="#a">
					<FontAwesomeIcon className="text-lg pr-3" icon={faChartLine} />
					Reports
				</a>
				<a className="mb-2" href="#a">
					<FontAwesomeIcon className="text-lg pr-3" icon={faBuildingColumns} />
					All Accounts
				</a>
				<div className="mb-2 pl-4 bg-black">
					{displayAccountMessage}
				</div>
				<a className="mb-2" href="#a">
					<FontAwesomeIcon className="text-lg pr-3" icon={faCirclePlus} />
					Add Accounts
				</a>
			</div>
		 </React.Fragment>
	 )
}

export default Sidebar