import React from "react";

function Expense({ expenseName, amount, max }) {

    // return(
    //     <React.Fragment>
    //         <li className='flex justify-between items-center pl-8 h-12 border-b border-gray-100'>
    //             <div> {expenseName} </div>
    //             <div className='h-6 w-1/3 bg-gray-100 rounded-'>
    //                 <div className='w-1/3 h-full bg-green-500'>
    //                 </div>
    //             </div>
    //         </li>
    //     </React.Fragment>
    // )

	const width = (amount / max * 100) + '%'

	return (
		<React.Fragment>
			<div className="grid grid-cols-2 py-3 justify-items-center">
				<p className="text-lg justify-self-center">{expenseName}</p>
				<div className="w-5/6 bg-yellow-200 ring-2 rounded-lg ring-red-400">
						<div style={{width: width}} className="w-1/3 h-full py-1 pl-1 ring-2 rounded-lg bg-green-400 text-green-800">${amount}/${max}</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Expense;
