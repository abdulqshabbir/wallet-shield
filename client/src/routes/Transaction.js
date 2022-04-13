import React, { useState } from "react"
import Header from "../components/Header"
import SiteWrapper from "../components/SiteWrapper"
import { useCategories } from "../contexts/Categories"

export default function Categories() {
    const [ categories, setCategories] = useCategories()
    const [ isLeft, setIsLeft ] = useState(false)
    const [ isRed, setIsRed ] = useState(true)
    const [ transactionValue, setTransactionValue ] = useState("")
    const [ transactionDate, setTransactionDate ] = useState()

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
            <section className="h-20 px-8 bg-primaryGray-100 flex flex-wrap justify-between items-center border-b-[1px]">
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
                    className={` w-40 text-right text-3xl outline-none bg-primaryGray-100 font-light ${isRed ? "text-primaryRed" : "text-green-600"} overflow-x-hidden`} type="text"
                    onChange={e => setTransactionValue(e.target.value)}
                    value={`${transactionValue}`} />
            </section>
            <section className="grid grid-cols-2">
                <label htmlFor="category">Category</label>
                <select name="category" id="category">
                    {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                </select>
                <label htmlFor="date">Date</label>
                <input type="date" value={transactionDate} onChange={e => setTransactionDate(e.target.value)}/>
            </section>
        </SiteWrapper>
	)
}

function getFormattedDate() {
    let dateObj = new Date()
    let year = dateObj.getFullYear()
    let monthIdx = dateObj.getMonth()
    let date = dateObj.getDate()

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "October", "November", "December"]

    return `${months[monthIdx]} ${date}, ${year}`
}
