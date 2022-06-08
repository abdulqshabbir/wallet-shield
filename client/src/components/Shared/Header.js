import { TbDotsCircleHorizontal } from "react-icons/tb"
import React from "react"
import { useModal } from "../../contexts/Modal"

function Header() {
	const [modal, setModal] = useModal()
	 return (
		 <React.Fragment>
				<header className="header flex justify-between items-center px-4 py-4 border-b-[1px]">
					<span className="font-medium">April&nbsp;2022</span>
					<TbDotsCircleHorizontal
						className="cursor-pointer"
						onClick={() => setModal(true)}
					/>
				</header>
		 </React.Fragment>
	 )
}

export default Header
