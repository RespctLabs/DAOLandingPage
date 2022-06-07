import Image from "next/image";
import React, { useState } from "react";

function What() {
	const [value, setValue] = useState(0);

	const data = [
		{
			id: 1,
			head1: "Respct",
			head2: "Id",
			desc: "One click login & your passport to any game on any chain. Access INOs, NFTs, and more from any game",
			img: "/images/gd.png",
			height: 300,
			width: 500,
		},
		{
			id: 2,
			head1: "Platform",
			head2: "Missions",
			desc: "Easy yet engaging Missions & Challenges for players to complete and get rewarded from games & guilds",
			img: "/images/el.png",
			height: 400,
			width: 350,
		},
		{
			id: 3,
			head1: "Game",
			head2: "Discovery",
			desc: "Discover the trending metaverse projects and become a part of the community",
			img: "/images/idd.png",
			height: 300,
			width: 300,
		},
		{
			id: 4,
			head1: "NFT",
			head2: "Marketplace",
			desc: "Cross game NFT marketplace where anyone can lend and borrow game assets. Get access to INO from early metaverse projects.",
			img: "/images/reflect.png",
			height: 300,
			width: 300,
		},
	];

	return (
		<div className="flex flex-col md:flex-row px-10 md:px-20 items-center justify-center space-y-9  h-screen">
			<div className="self-center md:px-20">
				<h2 className="mb-3">{data[value].head1}</h2>
				<h1>{data[value].head2}</h1>
				<p>{data[value].desc}</p>
				<div className="mt-2 text-center ">
					<Image
						src={data[value].img}
						alt="respct"
						height={data[value].height ?? 300}
						width={data[value].width ?? 500}
						layout="intrinsic"
					/>
				</div>
			</div>
			<div className=" flex flex-row md:flex-col relative md:w-6/12 justify-center items-center p-6">
				<Image
					src="/images/tri.png"
					onClick={() => setValue(0)}
					className="hover:rotate-360 hover:scale-110 hover:translate-z transform duration-1000 ease-in-out"
					height={100}
					width={100}
					alt="tri"
				/>
				<Image
					src="/images/circle.png"
					onClick={() => setValue(1)}
					className="hover:rotate-360 hover:scale-110 hover:translate-z transform duration-1000 ease-in-out"
					height={100}
					width={100}
					alt="circle"
				/>
				<Image
					src="/images/square.png"
					className="hover:rotate-360 hover:scale-110 hover:translate-z transform duration-1000 ease-in-out"
					onClick={() => setValue(2)}
					height={100}
					width={100}
					alt="square"
				/>
				<Image
					src="/images/cross.png"
					className="hover:rotate-360 hover:scale-110 hover:translate-z transform duration-1000 ease-in-out"
					onClick={() => setValue(0)}
					height={100}
					width={100}
					alt="cross"
				/>
			</div>
		</div>
	);
}

export default What;
