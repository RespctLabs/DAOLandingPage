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
			{process?.title === "browser" && (
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
