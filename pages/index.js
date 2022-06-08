import React from "react";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import Footer from "../components/footer.jsx";
import NavBar from "../components/navbar.jsx";
import BackingSection from "../components/sections/backingSection.jsx";
import IntroSection from "../components/sections/introSection.jsx";
import TrustSection from "../components/sections/trustSection.jsx";
import WhatSection from "../components/sections/what.jsx";

function Index() {
	return (
		<>
			{typeof window !== "undefined" && (
				
				// <ScrollContainer>
				// 	<NavBar />
				// 	<ScrollPage page="0">
				// 		<IntroSection />
				// 	</ScrollPage>

				// 	<WhatSection />

				// 	<ScrollPage page="5">
				// 		<TrustSection />
				// 	</ScrollPage>
				// 	<ScrollPage page="6">
				// 		<BackingSection />
				// 	</ScrollPage>
				// 	<Footer />
				// </ScrollContainer>
				<>
					<NavBar/>
					<div className="h-screen overflow-hidden">
						<IntroSection />
					</div>
					<div className="h-screen overflow-hidden">
						<WhatSection/>
					</div>
					<div className="h-screen overflow-hidden">
						<TrustSection />
					</div>
					<div className="h-screen overflow-hidden">
						<BackingSection />
					</div>
					<Footer/>
				</>
			)}
		</>
	);
}

export default Index;
