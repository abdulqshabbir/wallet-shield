import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Sidebar() {
	 return (
		 <React.Fragment>
			<div className="sidenav invisible xl:visible text-xl text-blue-200 bg-blue-900">
				<a href="#a">Abdul's Budget
					<FontAwesomeIcon className="text-lg pl-3" icon={faCircleChevronDown} />
				</a>
				<a href="#a">Budget</a>
				<a href="#a">Reports</a>
				<a href="#a">All Accounts</a>
				<a href="#a">Add Accounts</a>
			</div>
		 </React.Fragment>
	 )
}

export default Sidebar
