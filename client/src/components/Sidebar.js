import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown, faTree, faMoneyBill1Wave, faChartLine, faBuildingColumns, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Sidebar() {
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
				<a className="mb-2" href="#a">
					<FontAwesomeIcon className="text-lg pr-3" icon={faCirclePlus} />
					Add Accounts
				</a>
			</div>
		 </React.Fragment>
	 )
}

export default Sidebar
