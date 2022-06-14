import React from "react";
import Image from "next/image";
function Backing() {
	return (
		<div className="relative h-screen overflow-hidden">
			<div id="backingImage" className="absolute -z-30 " />
			<div className="flex flex-col md:flex-row  backdrop-blur-sm p-6 overflow-hidden justify-around  h-full items-center ">
				<div className=" md:px-40">
					<h1 className="text-4xl md:text-6xl">Backed by the</h1>
					<h1 className="text-4xl md:text-6xl">Giants</h1>
					<p className="mt-10 md:text-2xl">
						They are not just the backers, but believers of what
						<br />
						we do, and how we aim to change the ecosystem
						<br />
						become the part of the change.
					</p>
				</div>
				<div className="flex flex-row md:flex-col justify-around flex-wrap  md:h-full  text-center items-center">
					<div className="w-1/3 md:w-full">
						<Image src={"/images/mesh.png"} height={130} width={250} />
					</div>
					<div className="w-1/3 md:w-full">
						<Image src={"/images/protocol.png"} height={150} width={350} />
					</div>
					<div className="w-1/3 md:w-full">
						<Image src={"/images/tachyon.png"} height={130} width={350} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Backing;
