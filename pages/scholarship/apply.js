import Image from "next/image";
import React, { useState } from "react";
import Slide1 from "../../components/Scholarship/Slide1";
import Slide2 from "../../components/Scholarship/Slide2";
import Slide3 from "../../components/Scholarship/Slide3";

function Apply() {
	const [steps, setSteps] = useState(0);
	const IncSteps = () => {
		setSteps(steps + 1);
	};
	const slides = [
		<Slide1 key={1} IncSteps={IncSteps} />,
		<Slide2 key={2} IncSteps={IncSteps} />,
		<Slide3 key={3} IncSteps={IncSteps} />,
	];
	return (
		<div className="lg:px-80 ">
			<div className="bg-slate-700 p-6 rounded-2xl text-center">
				<Image src="/common/axie.png" width={200} height={100} />
				{slides[steps]}
			</div>
		</div>
	);
}

export default Apply;
