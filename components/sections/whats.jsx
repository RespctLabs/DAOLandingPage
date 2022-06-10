import React from "react";

function whats() {
	return (
		<>
			<div className=" text-7xl text-[#aaaaaa]  text-center my-20 z-10">
				Our Offerings
			</div>
			<div className="flex flex-col  items-center justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center ">
					<div className="w-full h-full  overflow-hidden bg-[#17181e]  ">
						<iframe
							src="https://my.spline.design/untitled-277535cee14ae47e52e10ea156e8e816/"
							frameBorder="0"
							width="115%"
							height="125%"
						/>
					</div>
					<div className="h-full p-3">
						<h1 className=" mt-6 text-4xl md:text-6xl text-[#aaaaaa] ">
							Game<br></br> Discovery
						</h1>
						<p className=" my-4 md:my-10 md:w-3/4">
							Discover the trending metaverse projects and become a part of the
							community.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-20 md:mt-40">
					<div className=" h-full p-3 text-right ">
						<h1 className=" mt-6 text-4xl md:text-6xl text-[#aaaaaa] ">
							Respct<br></br>ID
						</h1>
						<p className=" my-4 md:my-10 md:w-3/4 md:float-right ">
							One click login and your passport to any game on any chain. Access
							INOs, NFTs, and more from any game
						</p>
					</div>
					<div className="w-full h-full order-first md:order-2  overflow-hidden bg-[#17181e]  ">
						<iframe
							src="https://my.spline.design/daftpunkcopy-4e88a64f9e5fe23d51fbb965f89e1a48/"
							frameBorder="0"
							className="w-3/4 h-full"
						/>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-20 md:mt-40">
					<div className="w-full h-full  overflow-hidden bg-[#17181e]  ">
						<iframe
							src="https://my.spline.design/untitled-fe48e256a216b95475e8a081d06c8038/"
							frameBorder="0"
							width="110%"
							height="100%"
						/>
					</div>
					<div className="  h-full p-3">
						<h1 className=" text-4xl md:text-6xl text-[#aaaaaa] ">
							NFT<br></br> Marketplace
						</h1>
						<p className="my-4 md:my-10 md:w-3/4">
							Cross game NFT marketplace where anyone can lend and borrow game
							assets. Get access to INO from early metaverse projects.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-20 md:mt-40 ">
					<div className=" h-full p-3 text-right">
						<h1 className=" mt-6 text-4xl md:text-6xl text-[#aaaaaa] ">
							Platform<br></br> Missions
						</h1>
						<p className="my-4 md:my-10 md:w-3/4 md:float-right ">
							Easy yet engaging Missions and Challenges for players to complete
							and get rewarded from games & guilds
						</p>
					</div>
					<div className="w-full h-full order-first md:order-2 overflow-hidden bg-[#17181e]  ">
						<iframe
							src="https://my.spline.design/untitled-277535cee14ae47e52e10ea156e8e816/"
							frameBorder="0"
							className="w-[150%] h-[150%]"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
export default whats;
