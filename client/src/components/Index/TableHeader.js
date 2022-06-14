import React, { useState } from "react"
import { FiPlusSquare } from "react-icons/fi"
import AddCategoryField from "./AddCategoryField"

export default function TableHeader() {
    const [showCategoryField, setShowCategoryField] = useState(false)

    return(
        <React.Fragment>
            <div className="h-14 px-4 flex flex-wrap justify-between items-center border-y-[1px]">
				<div className="flex items-center flex-wrap text-base text-gray-500 relative">
                    <span>CATEGORY</span>
                    <FiPlusSquare
                        className="mx-4 cursor-pointer hover:scale-125"
                        size="20px"
                        onClick={() => setShowCategoryField(!showCategoryField)}
                    />
                    <AddCategoryField render={showCategoryField} setRender={setShowCategoryField} />
                </div>
				<h3 className="text-base text-gray-500">AVAILABLE</h3>
			</div>	
        </React.Fragment>
    )
}