import Head from "next/head";
import React from "react";

const defaultImage = "https://app.respct.fun/favicon.ico";

const Meta = ({ title, keywords, description, url, image }) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="language" content="English" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

				<title>{title}</title>
				<meta name="title" content={title} />
				<meta name="keywords" content={keywords} />
				<meta name="description" content={description} />

				<link rel="icon" href="/favicon.ico" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/assets/logo/apple-touch-icon.png" />

				<meta name="twitter:card" content="summary" />
				<meta property="twitter:url" content={url} />
				<meta property="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image || defaultImage} />
				<meta name="twitter:site" content={url} />
				<meta name="twitter:creator" content="@RespctClub" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content={url} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={image || defaultImage} />
				<meta property="og:site_name" content="Respct" />
			</Head>
		</>
	);
};

Meta.defaultProps = {
	title: "Game Guild | Respct",
	keywords: "respct, creators, artists",
	description: "",
	url: "https://respct.fun/",
	image: defaultImage,
};

export default React.memo(Meta);
