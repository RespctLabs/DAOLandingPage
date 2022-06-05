import React from "react";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import Footer from "../components/footer.jsx";
import NavBar from "../components/navbar.jsx";
import BackingSection from "../components/sections/backingSection.jsx";
import IntroSection from "../components/sections/introSection.jsx";
import TrustSection from "../components/sections/trustSection.jsx";

function Index() {
	console.log({ "process?.title": process?.title });
	return (
		<>
			<style global jsx>{`
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
			{typeof window !== "undefined" && (
				<ScrollContainer>
					<NavBar />
					<ScrollPage page="0">
						<IntroSection />
					</ScrollPage>
					<ScrollPage page="1">
						<TrustSection />
					</ScrollPage>
					<ScrollPage page="2">
						<BackingSection />
					</ScrollPage>
					<Footer />
				</ScrollContainer>
			)}
		</>
	);
}

export default Index;
