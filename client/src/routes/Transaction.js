import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SiteWrapper from "../components/SiteWrapper"
import { useExpenses } from "../contexts/Expenses"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import createTransaction from "../services/createTransaction"
import getExpenses from "../services/getExpenses"
import { useNavigate } from "react-router-dom"

export default function AddTransaction() {
    // UI state
    const [ isLeft, setIsLeft ] = useState(false)
    const [ isRed, setIsRed ] = useState(true)
    const navigate = useNavigate()

    // transaction state
    const [ expenses, setExpenses ] = useExpenses()
    const [ amount, setAmount ] = useState("")
    const [ isOutflow, setIsOutflow ] = useState(true)
    const [ expenseId, setExpenseId] = useState(null)
    const [ repeat, setRepeat ] = useState("never")
    const [ date, setDate ] = useState(getTodaysDate())
    const [ memo, setMemo ] = useState("")

    function handleOutflowToggle() {
        setIsLeft(!isLeft)
        setIsRed(!isRed)
        setIsOutflow(!isOutflow)
    }

    function createNewTransaction() {
        console.log(amount)
        createTransaction(amount, isOutflow, expenseId, repeat, memo, date)
        .then(() => {
            getExpenses()
            .then(expenses => {
                setExpenses(expenses)
                navigate("/")
            })
            .catch(e => console.error(e))
        })
        .catch(e => console.error(e))
    }

    function handleExpenseChange(e) {
        const idx = e.target.selectedIndex
        const optionElement = e.target.childNodes[idx]
        const expenseId = optionElement.getAttribute("data-expenseid")

        setExpenseId(expenseId)
    }

	return (
        <SiteWrapper>
			<Header/>
            <header className="h-14 px-4 flex flex-wrap justify-center items-center border-b-[1px]">
				<h1 className="font-medium text-1xl">Add Transaction</h1>
			</header>	
            <section className="h-20 px-4 bg-primaryGray-100 flex flex-wrap justify-between items-center border-b-[1px]">
                <button
                    onClick={handleOutflowToggle}
                    className={`h-[36px] w-16 ${isRed ? "bg-primaryRed" : "bg-green-600"} rounded-lg hover:cursor-pointer relative`}>
                    <div className={`h-[30px] w-8 bg-white text-center flex justify-center items-center rounded absolute top-[3px] ${isLeft ? "left-[3px]" : "right-[3px]"} `}>
                        <div className="w-[15px] h-[3px] bg-black"></div>
                    </div>
                </button>
                <input
                    autoFocus
                    placeholder="Amount"
                    className={`max-w-[50%] h-[70%] p-2 text-right text-3xl outline-none bg-slate-200 font-light ${isRed ? "text-primaryRed" : "text-green-600"} overflow-x-hidden`} type="text"
                    onChange={e => setAmount(e.target.value)}
                    value={`${amount}`} />
            </section>
            <div className="h-16 px-4 flex flex-wrap justify-between items-center border-b-[1px]">
                <label htmlFor="category">Expense</label>
                <div className="categories-dropdown-container flex items-center">
                    <div className="select">
                        <select defaultValue={"DEFAULT"} onChange={handleExpenseChange} name="category" id="category" className="focus:outline-none">
                            <option value="DEFAULT" disabled>Choose an expense</option>
                            {expenses.map(e =>
                                <option key={e.id} data-expenseid={e.id}>{e.name}</option>)}
                        </select>
                    </div>
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>
            </div>
            <div className="h-16 px-4 flex flex-wrap justify-between items-center border-b-[1px]">
                <label htmlFor="repeat">Repeat</label>
                <div className="categories-dropdown-container flex items-center">
                    <div className="select">
                        <select value={repeat} onChange={e => setRepeat(e.target.value)} className="focus:outline-none">
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
                <input type="date" value={date} onChange={e => setDate(e.target.value)}/>
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
                <button onClick={createNewTransaction} className="w-[95%] h-14 m-2 font-normal text-[22px] rounded-lg text-white bg-primaryBlue">
                    Save Transaction
                </button>
            </div>
            <Footer/>
        </SiteWrapper>
	)
}

function getTodaysDate() {
    let today = new Date()

    return `${today.toISOString().substring(0, 10)}`
}
