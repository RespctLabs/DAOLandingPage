import React from "react";
import Scholarship from "../../components/card/Scholarship";

function scholarship() {
	const gameData = [
		{
			bg: "/images/cards/nyan.png",
			img: "/images/cards/robot.png",
			name: "Sky Weavers",
			members: "238",
			cash: "1.5M",
		},

		{
			bg: "/images/cards/neon.png",
			img: "/images/cards/horse.png",
			name: "Sky Weavers",
			members: "238",
			cash: "1.5M",
		},
	];

	return (
		<div>
			<div className="text-center">
				<h1 className="p-2 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-800">
					Want to apply for scholarship?
				</h1>
				<p className="font-bold text-xl text-white mb-4 mt-10">
					Select Game for scholarship
				</p>

				<form className="text-center  flex justify-center">
					<div className="relative w-7/12">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<svg
								width="27"
								height="27"
								viewBox="0 0 27 27"
								fill="none"
								className="w-5 h-5  text-gray-400"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12.6897 0C19.6868 0 25.3782 5.69142 25.3782 12.6884C25.3782 15.9896 24.1113 19.0004 22.0382 21.2601L26.1175 25.3309C26.4993 25.7127 26.5006 26.3303 26.1188 26.712C25.9286 26.9049 25.6771 27 25.4269 27C25.178 27 24.9279 26.9049 24.7363 26.7146L20.6078 22.5976C18.436 24.3369 15.6823 25.3782 12.6897 25.3782C5.69273 25.3782 0 19.6854 0 12.6884C0 5.69142 5.69273 0 12.6897 0ZM12.6897 1.95447C6.77029 1.95447 1.95447 6.76899 1.95447 12.6884C1.95447 18.6079 6.77029 23.4237 12.6897 23.4237C18.6079 23.4237 23.4237 18.6079 23.4237 12.6884C23.4237 6.76899 18.6079 1.95447 12.6897 1.95447Z"
									fill="#9F9F9F"
								/>
							</svg>
						</div>
						<input
							type="text"
							id="simple-search"
							className="text-sm rounded-2xl block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
							placeholder="Search"
							required
						/>
					</div>
				</form>
			</div>
			<div className="mt-20">
				{gameData.map((game, index) => (
					<Scholarship data={game} key={index} />
				))}
			</div>
		</div>
	);
}

export default scholarship;
