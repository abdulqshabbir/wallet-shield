import React, { useState } from "react"
import Header from "../components/Header"

export default function Categories() {
    const [ isLeft, setIsLeft ] = useState(false)
    const [ isRed, setIsRed ] = useState(true)

    function handleClick() {
        setIsLeft(!isLeft)
        setIsRed(!isRed)
    }

	return (
		<div className="min-w-content max-w-5xl mx-auto">
			{/* <Sidebar/> */}
			<Header/>
            <header className="h-14 px-4 flex flex-wrap justify-center items-center border-b-[1px]">
				<h1 className="font-medium text-1xl">Add Transaction</h1>
			</header>	
            <section className="h-20 px-8 bg-primaryGray-100 flex flex-wrap justify-between items-center border-b-[1px]">
                <div onClick={handleClick} className={`h-[36px] w-16 ${isRed ? "bg-primaryRed" : "bg-green-600"} rounded-lg hover:cursor-pointer relative`}>
                    <div className={`h-[30px] w-8 bg-white text-center flex justify-center items-center rounded absolute top-[3px] ${isLeft ? "left-[3px]" : "right-[3px]"} `}>
                        <div className="w-[15px] h-[3px] bg-black"></div>
                    </div>
                </div>
                <span className={`text-4xl font-light ${isRed ? "text-primaryRed" : "text-green-600"}`}>-0.00 CAD</span>
            </section>
		</div>
	)
}
