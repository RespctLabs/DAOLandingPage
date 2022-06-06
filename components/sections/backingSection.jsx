import React from "react";
function Backing() {
	return (
		<div className="h-screen px-6 py-20 w-full">
			<div id="backingImage" className="-z-30 lg:z-10" />
			<div className="flex flex-col backdrop-blur-sm p-6 overflow-hidden lg:h-screen lg:bg-[#151f2c]">
				<div className="flex flex-col lg:absolute lg:bottom-20">
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
				<div className=" grid grid-cols-3 space-x-2  mt-20 lg:flex lg:flex-col lg:absolute lg:bottom-40 lg:right-20 lg:w-96">
					<img src={"/images/mesh.png"} />
					<img src={"/images/protocol.png"} />
					<img src={"/images/tachyon.png"} />
				</div>
			</div>
		</div>
	);
}

export default Backing;
