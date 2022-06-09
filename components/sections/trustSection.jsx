import React from "react";
import Image from "next/image";

function trustSection() {
	return (
		<div className="relative flex items-center flex-col px-10 justify-between h-screen bg-[#151F2C] overflow-hidden">
			<div
				id="moveLeft"
				style={{ width: "70%", marginTop: "5%", display: "flex" }}
			>
				<img src={"/images/panel.png"} style={{ marginRight: "3%" }} />
				<img src={"/images/panel.png"} style={{ marginRight: "3%" }} />
				<img src={"/images/panel.png"} style={{ marginRight: "3%" }} />
				<img src={"/images/panel.png"} style={{ marginRight: "3%" }} />
				<img src={"/images/panel.png"} style={{ marginRight: "3%" }} />
			</div>
			<div className="absolute right-3 md:top-[10%] w-1/2 md:w-max">
				<Image src={"/images/Games.png"} height="100" width="400" />
			</div>
			<div className=" flex flex-col p-3 font-bold pb-4 text-center text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-800">
				<span
					id="gradient"
					className="bg-clip-text text-transparent mr-[0.3em]"
				>
					Ecosystems
				</span>
				<span className=" text-[#616161] font-semibold"> That Trust Us</span>
			</div>
			<p>
				Respct is currently working on the best games and guilds in ecosystem.
				<br />
				Let&apos;s build the metaverse by empowering people to be a part of it.
			</p>
			<button
				id="gradient"
				data-tally-open="3lbqpo"
				data-tally-layout="modal"
				className=" px-4 py-2 z-10  font-[100] rounded-2xl "
			>
				Early Access
			</button>
			<div
				id="moveRight"
				style={{ width: "70%", marginBottom: "5%", display: "flex" }}
			>
				<img src={"/images/panel.png"} style={{ marginRight: "3%" }} />
				<img src={"/images/panel.png"} style={{ marginRight: "3%" }} />
				<img src={"/images/panel.png"} style={{ marginRight: "3%" }} />
				<img src={"/images/panel.png"} style={{ marginRight: "3%" }} />
				<img src={"/images/panel.png"} style={{ marginRight: "3%" }} />
			</div>
			<div className="absolute left-3 bottom-[2%] md:bottom-[10%] w-1/2 md:w-max">
				<Image src={"/images/Guilds.png"} height="100%" width="400%" />
			</div>
		</div>
	);
}

export default trustSection;
