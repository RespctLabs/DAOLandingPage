import React from "react";
import Image from "next/image";
function Backing() {
	return (
		<div className="relative h-screen overflow-hidden ">
			<div id="backingImage" className="absolute -z-30" />
			<div className="flex flex-col md:flex-row justify-evenly backdrop-blur-sm p-6 overflow-hidden  h-full items-center ">
				<div className=" md:px-40">
					<h1 className="text-4xl md:text-6xl text-center md:text-left ">Backed</h1>
					<h1 className="text-4xl md:text-6xl text-center md:text-left">by the Giants</h1>
					<p className="mt-10 md:text-2xs text-center md:text-left">
						They are not just the backers, 
						<br />
						but believers of what we do, 
						<br />
						and how we aim to change the ecosystem and
						<br/>become the part of the change.
					</p>
				</div>
				<div className="flex flex-col justify-around flex-wrap  md:h-full  text-center items-center mb-10">
					<div className="w-1/2 md:w-full my-10">
						<Image src={"/images/mesh.png"} height={90} width={250} />
					</div>
					<div className="w-1/2 md:w-full my-10">
						<Image src={"/images/protocol.png"} height={150} width={350} />
					</div>
					<div className="w-1/2 md:w-full my-10">
						<Image src={"/images/tachyon.png"} height={130} width={350} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Backing;
