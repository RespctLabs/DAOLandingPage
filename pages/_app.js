import { useRouter } from "next/router";
import { useEffect } from "react";
import LayoutWrapper from "../layouts/LayoutWrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	// For google analytics
	useEffect(() => {
		const handleRouteChange = (url) => {
			window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
				page_path: url,
			});
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<LayoutWrapper {...pageProps}>
			<Component {...pageProps} />
		</LayoutWrapper>
	);
}

export default MyApp;
