import React from "react";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import "../styles/landing.css";
import IntroSection from "../sections/introSection.jsx";
import TrustSection from "../sections/trustSection.jsx";
import BackingSection from "../sections/backingSection.jsx";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";

function landing() {
	return (
		<>
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
		</>
	);
}

export default landing;
