// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
const { Router } = require("@layer0/core/router");
const { nextRoutes } = require("@layer0/next");

const foreverEdge = {
	browser: false,
	edge: {
		staleWhileRevalidateSeconds: 1,
		maxAgeSeconds: 60 * 60 * 60 * 365,
	},
};

const assetCache = {
	edge: {
		maxAgeSeconds: 60 * 60 * 60 * 365,
		forcePrivateCaching: true,
	},
	browser: {
		maxAgeSeconds: 0,
		serviceWorkerSeconds: 60 * 60 * 24,
	},
};

let prerenderPages = [
	"/",
	"/home",
	"/nft",
	"/signup",
	"/login",
	"/nft",
	"/feed",
	"/profile/dao",
	"/profile/guild",
	"/profile/user",
	"/profile/game",
	"/settings",
	"/settings/scholarship",
	"/settings/scholarship/apply",
];

module.exports = new Router()
	.prerender(prerenderPages.map((page) => ({ path: page })))
	.match("/styles/:file", ({ cache, serveStatic }) => {
		cache(assetCache);
		serveStatic("styles/:file");
	})
	.match("/_next/image/:path*", ({ cache, removeUpstreamResponseHeader }) => {
		removeUpstreamResponseHeader("set-cookie");
		cache(foreverEdge);
	})
	.match("/service-worker.js", ({ serviceWorker }) => {
		return serviceWorker(".next/static/service-worker.js");
	})
	.use(nextRoutes); // automatically adds routes for all files under /pages
