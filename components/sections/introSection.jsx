import React from "react";
import Tilt from "react-parallax-tilt";

function IntroSection() {
	const content = (
		<div className="inner-element">
			<span className="text-center text-7xl text-[#aaaaaa] font-bold">
				Revolution in
			</span>
			<span
				id="gradient"
				className="font-bold pb-4 text-center text-7xl bg-clip-text text-transparent"
			>
				Web3 Gaming
			</span>
			<p className="text-left text-xs text-[#a7a7a7] my-8" id="introtxt">
				Onboarding Games and Gamers to the Metaverse with Respct&apos;s
				Ecosystem
			</p>
			<button
				id="gradient"
				data-tally-open="3lbqpo"
				data-tally-layout="modal"
				className=" px-4 py-2 z-10  font-[100] rounded-2xl "
			>
				Early Access
			</button>
		</div>
	);
	return (
		<>
			<div className="md:hidden bg-[url('/images/controller.png')] bg-contain bg-no-repeat bg-center h-screen flex items-center justify-center">
				{content}
			</div>
			<div
				className=" hidden md:flex items-center flex-col justify-center h-[100vh] overflow-hidden bg-[#17181e]"
				id="mainI"
			>
				<Tilt
					className="parallax-effect "
					tiltMaxAngleX={10}
					tiltMaxAngleY={10}
					perspective={800}
					transitionSpeed={1500}
					scale={1.05}
					gyroscope={true}
				>
					<img src={"images/controller.png"} className="h-screen" />
					{content}
				</Tilt>
			</div>
		</>
	);
}

export default IntroSection;
