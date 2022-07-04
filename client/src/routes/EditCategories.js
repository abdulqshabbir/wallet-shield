import React, { useState } from "react"
import Header from "../components/Shared/Header"
import { useCategories } from "../contexts/Categories"
import SiteWrapper from "../components/Shared/SiteWrapper"
import AddCategoryButton from "../components/Categories/AddCategoryButton"
import AddCategoryField from "../components/Categories/AddCategoryField"
import Category from "../components/Categories/EditCategories"
import Protected from "../components/Shared/Protected"

export default function EditCategories() {
	const [renderAddCategory, setRenderAddCategory] = useState(false)
	return (
		<Protected>
			<SiteWrapper>
				<Header/>
				<AddCategoryButton
					setRenderAddCategory={setRenderAddCategory}
					renderAddCategory={renderAddCategory}
				/>
				<AddCategoryField
					renderAddCategory={renderAddCategory}
					setRenderAddCategory={setRenderAddCategory}
				/>
				<RenderCategories/>
			</SiteWrapper>
		</Protected>
	)
}

function RenderCategories() {
	const [categories, ] = useCategories()
	return (
		<React.Fragment>
			{categories.map(c => <Category key={c.id} category={c} /> )}

			{/* div underneath is needed because footer is position-fixed and hides content at the end of the list */}
			<div className='w-full h-14'></div>
		</React.Fragment>
	)
}