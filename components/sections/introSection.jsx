import React from "react";

function IntroSection() {
	return (
		<>
			<style global jsx>{`
				@import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");
				#introductionBody {
					display: flex;
					align-items: center;
					flex-direction: column;
					justify-content: center;
					background-color: #17181e;
					height: 100vh;
					overflow: hidden;
				}

				#title {
					text-align: center;
					font-size: 5vw;
					color: #aaaaaa;
					font-family: "Mulish", sans-serif;
					font-weight: bold;
				}
				#titleColor {
					text-align: center;
					font-weight: bold;
					font-size: 5vw;
					background: -webkit-linear-gradient(45deg, #03afd0, #812dc1, #812dc1);
					background-clip: text;
					-webkit-text-fill-color: transparent;
					font-family: "Mulish", sans-serif;
				}
				#descp {
					text-align: center;
					margin-top: 2%;
					margin-bottom: 2%;
					font-size: 70%;
					font-family: "Mulish", sans-serif;
					color: #a7a7a7;
					font-weight: 200;
				}

				#btn {
					font-size: 100%;
					padding: 0.5em;
					border-radius: 1em;
					font-weight: regular;
					font-family: "Mulish", sans-serif;
					color: #ffffff;
					font-weight: 200;
					background: linear-gradient(
						90deg,
						#00d6ff,
						#00d6ff,
						#eb00ff,
						#eb00ff
					);
				}

				#backingBody {
					display: flex;
					height: 100vh;
					width: 100vw;
					background-color: #17181e;
					overflow: hidden;
				}

				#backingContent {
					display: flex;
					flex-direction: column;
					margin-left: 12%;
					margin-top: 30%;
				}
				#backingTitle {
					text-align: left;
					font-weight: bold;
					font-size: 5vw;
					background: -webkit-linear-gradient(
						-50deg,
						rgba(3, 174, 208, 0.112),
						rgba(3, 174, 208, 0.112),
						#a658e1,
						#a658e1,
						rgba(3, 174, 208, 0.112),
						rgba(3, 174, 208, 0.112)
					);
					background-clip: text;
					-webkit-text-fill-color: transparent;
					font-family: "Mulish", sans-serif;
				}
				#backingDescp {
					text-align: left;
					font-size: 80%;
					font-family: "Mulish", sans-serif;
					color: #c9c9c9;
					font-weight: 200;
				}
				#backings {
					margin-left: 20%;
					display: flex;
					justify-content: center;
					flex-direction: column;
					width: 20%;
				}
				#backingImage {
					transform: rotate(14deg);
					position: absolute;
					width: 100vw;
					left: -15vw;
					top: -15vw;
					height: 100vh;
					background-image: url("../images/starsBG.png");
					background-size: cover;
					background-position: center;

					mask-image: url("../images/bigF.svg");
					mask-size: 80%;
					mask-repeat: no-repeat;

					background-position-x: 0;
					animation: clip-fade 50s infinite alternate;
				}

				@keyframes clip-fade {
					100% {
						background-position: 100vh;
					}
				}

				#trustBody {
					display: flex;
					align-items: center;
					flex-direction: column;
					justify-content: space-between;
					height: 100vh;
					width: 100vw;
					background-color: #151f2c;
					overflow: hidden;
				}
				#movingTitle {
					position: relative;
					min-width: 100%;
					left: -100vw;
					animation: moveSide 10s infinite alternate;
				}
				#moveLeft {
					position: relative;
					right: -50vw;
					animation: moveLeft 50s infinite alternate;
				}
				#moveRight {
					position: relative;
					left: -50vw;
					animation: moveRight 50s infinite alternate;
				}
				@keyframes moveRight {
					100% {
						left: 100vw;
					}
				}
				@keyframes moveLeft {
					100% {
						right: 100vw;
					}
				}
			`}</style>
			<img
				src={"/images/controller.png"}
				style={{ position: "absolute", width: "50%", left: "25vw", top: "5vw" }}
			/>
			<div id="introductionBody">
				<span id="title">Revolution in</span>
				<span id="titleColor">Web3 Gaming</span>
				<p id="descp">
					We are a decentralized autonomous organization on a mission to
					revolutionize gaming.
					<br />
					Let's build the metaverse by empowering people to be a part of it.
				</p>
				<div id="btn">Early Access</div>
			</div>
		</>
	);
}

export default IntroSection;
