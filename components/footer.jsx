import Image from "next/image";
import React from "react";

export default function Footer() {
	return (
		<div className="absolute flex h-80 items-center flex-col w-full z-20 justify-between bg-[#17181e]">
			<div className="absolute -top-12 bg-slate-600 p-4 flex justify-between w-96  flex-row rounded-2xl ">
				<Image
					src={"/images/twitter.png"}
					height={50}
					width={50}
					alt={"twitter"}
				/>
				<Image src={"/images/insta.png"} height={50} width={50} alt={"insta"} />
				<Image
					src={"/images/linkedin.png"}
					height={50}
					width={50}
					alt={"linkedin"}
				/>
				<Image
					src={"/images/facebook.png"}
					height={50}
					width={50}
					alt={"facebook"}
				/>
			</div>
			<p className="font-extrabold text-center text-7xl mt-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-800">
				Reach out to Us
			</p>
			<input
				className=" text-center text-xs my-8 border border-cyan-500 rounded-2xl p-3 bg-black"
				placeholder="Enter your email address"
			/>
		</div>
	);
}
