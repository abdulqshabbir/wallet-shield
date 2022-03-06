import React from "react";
import Expense from "./Expense";

function ExpenseCategory({ categoryName }) {
    return(
        <React.Fragment>
            <div className="expense-category grid grid-cols-2 justify-items-center text-center py-3">
                <h2 className="font-semibold">{categoryName}</h2>
                <h2 className="font-semibold">Amount Spent</h2>
            </div>
            <Expense expenseName="Movies" amount="10" max="20"/>
            <Expense expenseName="Internet" amount="20" max="60"/>
            <Expense expenseName="Dining Out" amount="60" max="80"/>
        </React.Fragment>
    )
}

export default ExpenseCategory
