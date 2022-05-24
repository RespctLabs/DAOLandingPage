import React from "react";
import Image from "next/image";

function Slide1({ IncSteps }) {
	return (
		<>
			<h4 className="mt-4 text-cyan-500 text-xl font-bold">SCHOLARSHIP</h4>
			<div className="grid grid-cols-2 gap-8 mt-20">
				<button
					onClick={IncSteps}
					className="bg-black hover:bg-gray-900 hover:text-cyan-800 p-6 rounded-2xl text-center text-cyan-500 "
				>
					<Image src="/common/nft-apply.svg" width={200} height={200} />
					<h4 className="mt-4  text-xl font-bold">Apply with NFT</h4>
				</button>
				<button
					onClick={IncSteps}
					className="bg-black hover:bg-gray-900 hover:text-cyan-800 p-6 rounded-2xl text-center text-cyan-500 "
				>
					<Image src="/common/another-apply.svg" width={200} height={200} />
					<h4 className="mt-4  text-xl font-bold">Take Discord Quiz</h4>
				</button>
			</div>
		</>
	);
}

export default Slide1;
