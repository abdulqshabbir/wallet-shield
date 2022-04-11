export default function SiteWrapper({ children }) {
	return (
		<div className=" bg-blue-50">
			<div className="min-w-content max-w-5xl mx-auto bg-white">
				<div className="h-screen">
					{ children }
				</div>
			</div>
		</div>
	)
}