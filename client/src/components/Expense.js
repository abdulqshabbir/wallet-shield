import React from "react";

function Expense({ expenseName }) {

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

	return (
		<React.Fragment>
			<div className="grid grid-cols-2 justify-items-center py-3">
				<p className="text-lg">{expenseName}</p>
				<progress className="w-4/5 ring-2 rounded-lg ring-red-400" value="50" max="100"></progress>
			</div>
		</React.Fragment>
	)
}

export default Expense;
