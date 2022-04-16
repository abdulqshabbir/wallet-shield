import React, { useState } from "react"
import Header from "../components/Header"
import SiteWrapper from "../components/SiteWrapper"
import { useCategories } from "../contexts/Categories"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

export default function AddTransaction() {
    const [ categories, setCategories] = useCategories()
    const [ isLeft, setIsLeft ] = useState(false)
    const [ isRed, setIsRed ] = useState(true)
    const [ transactionValue, setTransactionValue ] = useState("")
    const [ transactionDate, setTransactionDate ] = useState(getTodaysDate())
    const [ memo, setMemo ] = useState("")

    function handleClick() {
        setIsLeft(!isLeft)
        setIsRed(!isRed)
    }

	return (
        <SiteWrapper>
			<Header/>
            <header className="h-14 px-4 flex flex-wrap justify-center items-center border-b-[1px]">
				<h1 className="font-medium text-1xl">Add Transaction</h1>
			</header>	
            <section className="h-20 px-4 bg-primaryGray-100 flex flex-wrap justify-between items-center border-b-[1px]">
                <button
                    onClick={handleClick}
                    className={`h-[36px] w-16 ${isRed ? "bg-primaryRed" : "bg-green-600"} rounded-lg hover:cursor-pointer relative`}>
                    <div className={`h-[30px] w-8 bg-white text-center flex justify-center items-center rounded absolute top-[3px] ${isLeft ? "left-[3px]" : "right-[3px]"} `}>
                        <div className="w-[15px] h-[3px] bg-black"></div>
                    </div>
                </button>
                <input
                    autoFocus
                    placeholder="Amount"
                    className={`max-w-[50%] h-[70%] p-2 text-right text-3xl outline-none bg-slate-200 font-light ${isRed ? "text-primaryRed" : "text-green-600"} overflow-x-hidden`} type="text"
                    onChange={e => setTransactionValue(e.target.value)}
                    value={`${transactionValue}`} />
            </section>
            <div className="h-16 px-4 flex flex-wrap justify-between items-center border-b-[1px]">
                <label htmlFor="category">Category</label>
                <div className="categories-dropdown-container flex items-center">
                    <div className="select">
                        <select name="category" id="category" className="focus:outline-none">
                            {categories.map(c =>
                                <option key={c.id} value={c.name}>
                                    {c.name}
                                </option>)}
                        </select>
                    </div>
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>
            </div>
            <div className="h-16 px-4 flex flex-wrap justify-between items-center border-b-[1px]">
                <label htmlFor="repeat">Repeat</label>
                <div className="categories-dropdown-container flex items-center">
                    <div className="select">
                        <select className="focus:outline-none">
                            <option value="Never">Never</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Montly</option>
                        </select>
                    </div>
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>
            </div>
            <div className="h-16 px-4 flex flex-wrap justify-between items-center border-b-[1px]">
                <label htmlFor="date">Date</label>
                <input type="date" value={transactionDate} onChange={e => setTransactionDate(e.target.value)}/>
            </div>
            <div className="h-14 px-8 bg-primaryGray-100 flex flex-wrap justify-between items-center border-b-[1px]">
                Optional
            </div> 
            <input 
                placeholder="Enter a memo..."
                type="text"
                value={memo}
                onChange={e => setMemo(e.target.value)}
                className="w-full h-12 p-4 focus:border-[1px] focus:outline-none"
            />
            <div className="flex justify-center">
                <button className="w-[95%] h-14 m-2 font-normal text-[22px] rounded-lg text-white bg-primaryBlue">
                    Save Transaction
                </button>
            </div>
        </SiteWrapper>
	)
}

function getTodaysDate() {
    let today = new Date()

    return `${today.toISOString().substring(0, 10)}`
}
