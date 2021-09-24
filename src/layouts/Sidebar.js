const Sidebar = () => {
	return (
		<div className="w-full bg-white rounded-lg shadow-md border-2">
			<ul className="divide-y-2 divide-gray-400">
				<li className="text-xl font-bold p-3">Categories</li>
				<li className="">
					<a
						className="flex items-center justify-between p-3 hover:text-gray-800 hover:bg-gray-100 text-gray-600 rounded-lg"
						href="#!"
					>
						TailwindCSS
						<span className="px-2 text-sm text-white bg-gray-500 rounded-full">666</span>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
