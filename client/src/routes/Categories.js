import React, { useState } from "react"
import Header from "../components/Header"
import { useCategories } from "../contexts/Categories"
import SiteWrapper from "../components/SiteWrapper"
import AddCategoryButton from "../components/Categories/AddCategoryButton"
import AddCategoryField from "../components/Categories/AddCategoryField"
import Footer from "../components/Footer"
import Category from "../components/Categories/Category"

export default function Categories() {
	const [renderAddCategory, setRenderAddCategory] = useState(false)
	return (
		<SiteWrapper>
			<Header/>
			<AddCategoryButton setRenderAddCategory={setRenderAddCategory} />
			<AddCategoryField renderAddCategory={renderAddCategory} setRenderAddCategory={setRenderAddCategory} />
			<RenderCategories/>
			<Footer/>
		</SiteWrapper>
	)
}

function RenderCategories() {
	const [categories, _] = useCategories()
	return categories.map(c => <Category key={c.id} category={c} /> )
}