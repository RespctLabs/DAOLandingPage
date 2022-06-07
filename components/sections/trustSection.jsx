import React from "react";
import Image from "next/image";

function trustSection() {
	return (
		<div className=" flex items-center flex-col px-10 justify-between h-screen w-screen bg-[#17181e] overflow-hidden">
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
			<div
				style={{ display: "flex" }}
				className="font-bold pb-4 text-center text-7xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-800"
			>
				<span id="titleColor" style={{ marginRight: "0.3em" }}>
					Ecosystem
				</span>
				<span id="title">that trusts us</span>
			</div>
			<div className="absolute right-3 top-3 lg:right-40 lg:top-28 opacity-80">
				<Image src={"/images/Games.png"} height="100" width="300" />
			</div>
			<div className="absolute left-3 bottom-3 lg:left-40 lg:bottom-28">
				<Image src={"/images/Guilds.png"} height="100" width="300" />
			</div>
			<p style={{ fontSize: "1.2rem" }}>
				Respct is currently working on the best games and guilds in ecosystem.
				<br />
				Let&apos;s build the metaverse by empowering people to be a part of it.
			</p>
			<button
				data-tally-open="3lbqpo"
				data-tally-layout="modal"
				className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-800 rounded-2xl hover:from-violet-800 hover:to-cyan-500 transform duration-200 ease-in"
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
		</div>
	);
}

export default trustSection;
