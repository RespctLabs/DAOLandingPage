import React from "react";

function Slide2({ IncSteps }) {
	return (
		<div>
			<div className="grid md:grid-cols-4 gap-5 mt-10">
				{Array.from(Array(8).keys()).map((item, index) => (
					<button
						key={index}
						className="p-20 bg-black hover:bg-slate-900 rounded-2xl"
					/>
				))}
			</div>
			<button
				onClick={IncSteps}
				className="bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-800 py-2 px-20 rounded-2xl mt-10 text-2xl "
			>
				Apply
			</button>
		</div>
	);
}

export default Slide2;
