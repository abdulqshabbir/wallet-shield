import React from "react"
import { FiLogOut, FiPlus } from "react-icons/fi"
import {Link} from "react-router-dom"
import { clearTokensFromLocalStorage } from "../../services/auth"
import { useUser } from "../../contexts/User"
import logoutUser from "../../services/logoutUser"

function Footer() {
	const [ , setUser ] = useUser()
	async function handleLogout() {
		const res = await logoutUser()
		if (res.status === 204) {
			clearTokensFromLocalStorage()
			setUser(null)
		}
	}
	return (
		<React.Fragment>
			<div className="w-full max-w-5xl mx-auto h-14 flex items-center justify-center fixed bottom-0 z-10 bg-white border-t-[1px]">
				<Link to="/transaction">
					<FiPlus />
				</Link>
				<Link onClick={handleLogout} to="/login" className="pl-10">
					<FiLogOut />
				</Link>
			</div>
		</React.Fragment>
	)
}

export default Footer
