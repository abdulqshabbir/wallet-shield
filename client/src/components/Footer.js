import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Footer() {
	 return (
		 <React.Fragment>
				<div className="text-center pt-14">
					<FontAwesomeIcon className="text-xl sm:text-2xl md:text-3xl" icon={faCirclePlus} />
				</div>
		 </React.Fragment>
	 )
}

export default Footer
