import React from "react";

function Slide3() {
	return (
		<div>
			<div className="flex justify-center mt-2">
				<svg
					width="145"
					height="145"
					viewBox="0 0 145 145"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M64.25 6.49519C69.3551 3.54775 75.6449 3.54775 80.75 6.49519L125.537 32.3529C130.642 35.3003 133.787 40.7474 133.787 46.6423V98.3577C133.787 104.253 130.642 109.7 125.537 112.647L80.75 138.505C75.6449 141.452 69.3551 141.452 64.25 138.505L19.4632 112.647C14.358 109.7 11.2132 104.253 11.2132 98.3577V46.6423C11.2132 40.7474 14.358 35.3003 19.4632 32.3529L64.25 6.49519Z"
						stroke="#03AFD0"
						strokeWidth="3"
					/>
					<circle
						cx="72.0863"
						cy="72.9143"
						r="49.8714"
						stroke="#03AFD0"
						strokeWidth="3"
					/>
				</svg>
			</div>
			<h2 className="text-3xl mt-10 font-extrabold text-cyan-500">
				Congratulations !
			</h2>
			<h4 className="mt-3 font-bold">
				You&apos;re now an Axie Infinity Scholar !
			</h4>
			<h4 className="mt-10 font-bold">Join Discord to continue</h4>
			<button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-800 py-2 px-20 rounded-2xl mt-2  font-bold ">
				Join Discord
			</button>
		</div>
	);
}

export default Slide3;
