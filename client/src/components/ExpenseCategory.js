import React, { useEffect, useState } from "react"
import Expense from "./Expense"

function ExpenseCategory({ categoryName, expenses }) {
    return(
        <React.Fragment>
						<div className="expense-category xl:pl-56 xl:pr-10 grid grid-cols-2 justify-items-center pt-6 pb-3 gap-y-4">
							<h2 className="font-semibold">{categoryName}</h2>
							<h2 className="font-semibold">Amount Spent</h2>
						</div>
						{
							expenses.map((e, i) => 
								<Expense
									key={i}
									expenseName={e.expenseName}
									expenseAmount={e.expenseAmount}
									expenseMax={e.expenseMax} />
							)
						}
        </React.Fragment>
    )
}

export default ExpenseCategory
