import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronDown, faTree, faMoneyBill1Wave, faChartLine, faBuildingColumns, faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
import React from "react"

function Sidebar() {
  const accounts = ["account1", "account2", "account3"]
	let displayAccountMessage
	if (accounts.length === 0) {
		displayAccountMessage = (
			<div>
				<h4 className="pt-3">No Accounts</h4>
				<p className="py-5">You can't budget without adding accounts first. How about adding one now?</p>
			</div>
		)
	} else {
		displayAccountMessage = (
			<div>
				<h4 className="pt-3">Your Accounts</h4>
				<ul className="py-5 pl-6">
					{ accounts.map((x, i) => <li className="list-disc py-2" key={i}>{x}</li>) }
				</ul>
			</div>
		)
	}

	 return (
		 <React.Fragment>
			<div className="sidebar sidenav invisible xl:visible bg-blue-200 ring-1 pt-3">
				<Link className="hover:text-blue-400 mb-2" href="#a" to="/">
					<FontAwesomeIcon className="pr-3" icon={faTree} />
						Abdul's Budget
					<FontAwesomeIcon className="pl-3" icon={faCircleChevronDown} />
				</Link>
				<a className="hover:text-blue-400 mb-2" href="#a">
					<FontAwesomeIcon className="pr-3" icon={faMoneyBill1Wave} />
					Budget
				</a>
				<a className="hover:text-blue-400 mb-2" href="#a">
					<FontAwesomeIcon className="pr-3" icon={faChartLine} />
					Reports
				</a>
				<a className="hover:text-blue-400 mb-2" href="#a">
					<FontAwesomeIcon className="pr-3" icon={faBuildingColumns} />
					All Accounts
				</a>
				<div className="mb-2 pl-4 bg-blue-300">
					{displayAccountMessage}
				</div>
				<a className="hover:text-blue-400 mb-2" href="#a">
					<FontAwesomeIcon className="pr-3" icon={faCirclePlus} />
					Add Accounts
				</a>
			</div>
		 </React.Fragment>
	 )
}

export default Sidebar
