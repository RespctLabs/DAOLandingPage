import React from "react";
function Backing() {
	return (
		<div className="relative h-screen overflow-hidden">
			<div id="backingImage" className="absolute -z-30 lg:z-10" />
			<div className="flex flex-col  backdrop-blur-sm p-6 overflow-hidden lg:h-screen lg:bg-[#17181E]">
				<div className="flex flex-col lg:absolute lg:bottom-20 ml-[10%] lg:mt-[10%]">
					<h className="backingTitle">Backed by the</h>
					<h className="backingTitle" id="bt">
						Giants
					</h>
					<p id="backingDescp">
						They are not just the backers, but believers of what
						<br />
						we do, and how we aim to change the ecosystem
						<br />
						become the part of the change.
					</p>
				</div>
				<div className=" grid grid-cols-3 space-x-2 lg:flex lg:flex-col lg:items-center lg:justify-evenly lg:h-screen lg:w-[30%] lg:relative lg:left-[65vw]">
					<img src={"/images/mesh.png"} />
					<img src={"/images/protocol.png"} />
					<img src={"/images/tachyon.png"} />
				</div>
			</div>
		</div>
	);
}

export default Backing;
