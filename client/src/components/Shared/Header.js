import { TbDotsCircleHorizontal } from "react-icons/tb"
import { FaHome } from "react-icons/fa"
import React from "react"
import { useModal } from "../../contexts/Modal"
import { Link } from "react-router-dom"
import useWindowDimensions from "../../contexts/useWindowDimensions"

function Header() {
	const [modal, setModal] = useModal()
	const { width, } = useWindowDimensions()
	return (
		<React.Fragment>
			<header className="header flex justify-between items-center px-4 py-4 border-b-[1px]">
				<Link to="/">
					<div className="flex justify-center items-center">
						<FaHome />
						<span className="ml-2 font-medium">April&nbsp;2022</span>
					</div>
				</Link>
				{
					width < 1024 &&
					<TbDotsCircleHorizontal
						className="cursor-pointer"
						onClick={() => setModal(true)}
					/>
				}
			</header>
		</React.Fragment>
	)
}

export default Header
