import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import classnames from "classnames";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

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
			btnimg: "/images/tri.png",
		},
		{
			id: 2,
			head1: "Platform",
			head2: "Missions",
			desc: "Easy yet engaging Missions & Challenges for players to complete and get rewarded from games & guilds",
			img: "/images/el.png",
			height: 400,
			width: 350,
			btnimg: "/images/circle.png",
		},
		{
			id: 3,
			head1: "Game",
			head2: "Discovery",
			desc: "Discover the trending metaverse projects and become a part of the community",
			img: "/images/idd.png",
			height: 300,
			width: 300,
			btnimg: "/images/square.png",
		},
		{
			id: 4,
			head1: "NFT",
			head2: "Marketplace",
			desc: "Cross game NFT marketplace where anyone can lend and borrow game assets. Get access to INO from early metaverse projects.",
			img: "/images/reflect.png",
			height: 300,
			width: 300,
			btnimg: "/images/cross.png",
		},
	];

	return (
		<>
			<Parallax pages={4} className="bg-[#17181E]">
				{data.map((item, index) => (
					<div id={`what${index}`} key={index}>
							<ParallaxLayer className="h-screen" offset={index}>
							<div className="flex flex-col md:flex-row px-10 md:px-20 items-center  space-y-9  w-screen">
								<div className=" md:px-16 md:w-7/12">
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
							</div>
                	</ParallaxLayer>
						</div>
				))}
				<ParallaxLayer sticky={{ start: 0, end: 4 }}>
									

				
								
									
                </ParallaxLayer>
            </Parallax>
		</>
	);
}

export default What;
