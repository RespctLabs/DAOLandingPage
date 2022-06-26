import Image from "next/image";
import React from "react";

export default function Footer() {
	return (
		<div className="absolute flex h-80 items-center flex-col w-full z-20 justify-center bg-[#151F2C] ">
			<div className="absolute -top-12 bg-slate-600 p-4 flex justify-between w-96  flex-row rounded-2xl ">
				<a href="https://twitter.com/respctClub" className="hover:scale-110 transform duration-200">
					<Image
						src={"/images/twitter.png"}
						height={50}
						width={50}
						alt={"twitter"}
					/>
				</a>
				<a href="https://www.linkedin.com/company/respct-club/" className="hover:scale-110 transform duration-200">
					<Image
						src={"/images/linkedin.png"}
						height={50}
						width={50}
						alt={"linkedin"}
					/>
				</a>
				<a  href="https://discord.gg/rPWpu3rTeZ" className="hover:scale-110 transform duration-200">
					<Image
						src={"/images/discord.png"}
						height={50}
						width={50}
						alt={"discord"}
					/>
				</a>
			</div>
			<div className="w-[80%] h-[0.5%] bg-[#ADADAD] my-10" ></div>
			<p> © All rights reserved Gamut Incorporate </p>
		</div>
		// need to fix the icon box
	);
}
