import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { batch, Fade, MoveOut, ScrollPage, Sticky } from "react-scroll-motion";
const Animator = dynamic(
	import("react-scroll-motion").then((it) => it.Animator),
	{ ssr: false }
);
const FadeUp = batch(Fade(), MoveOut(), Sticky());

function What() {
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
		<>
			{data.map((item, index) => (
				<ScrollPage page={index + 1} on>
					<Animator animation={FadeUp}>
						<div className=" md:px-20">
							<h2 className="mb-3">{item.head1}</h2>
							<h1>{item.head2}</h1>
							<p>{item.desc}</p>
							<div className="mt-2 text-center ">
								<Image
									src={item.img}
									alt="respct"
									height={item.height ?? 300}
									width={item.width ?? 500}
									layout="intrinsic"
								/>
							</div>
						</div>
					</Animator>
				</ScrollPage>
			))}
		</>
	);
}

export default What;
