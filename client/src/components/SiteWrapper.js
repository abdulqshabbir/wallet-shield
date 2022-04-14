export default function SiteWrapper({ children }) {
	return (
		<div className=" bg-gray-300">
			<div className="min-w-content max-w-5xl mx-auto bg-white">
				<div className=" min-h-screen">
					{ children }
				</div>
			</div>
		</div>
	)
}