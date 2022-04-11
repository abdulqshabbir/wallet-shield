import React from "react";

export default function TableHeader() {
    return(
        <React.Fragment>
            <div className="h-14 px-4 flex flex-wrap justify-between items-center border-y-[1px]">
				<h3 className="text-base text-gray-500">CATEGORY</h3>
				<h3 className="text-base text-gray-500">AVAILABLE</h3>
			</div>	
        </React.Fragment>
    )
}