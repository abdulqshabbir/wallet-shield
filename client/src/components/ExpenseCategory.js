import React from "react";
import Expense from "./Expense";

function ExpenseCategory({ categoryName }) {

    // return(
    //     <React.Fragment>
    //         <header className='h-12 px-8 flex flex-row justify-between items-center bg-gray-300'>
    //             <h1 className='font-semibold'>{categoryName}</h1>
    //             <h2 className='font-semibold'>Amount Spent</h2>
    //         </header>
    //         <ul>
    //             <Expense expenseName="Movies"/>
    //             <Expense expenseName="Internet"/>
    //             <Expense expenseName="Dining Out"/>
    //         </ul>
    //     </React.Fragment>
    // )

    return(
        <React.Fragment>
						<div className="grid grid-cols-2 justify-items-center pt-10 pb-3 gap-y-4">
							<h2 className="text-xl font-semibold">{categoryName}</h2>
							<h2 className="text-xl font-semibold">Amount Spent</h2>
						</div>
						<Expense expenseName="Movies" amount="10" max="20"/>
						<Expense expenseName="Internet" amount="20" max="60"/>
						<Expense expenseName="Dining Out" amount="60" max="80"/>
        </React.Fragment>
    )
}

export default ExpenseCategory
