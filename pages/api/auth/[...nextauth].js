import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const clientId =
	"382143491732-q51dr2epoal73ac4ub9hdl1d496k8bql.apps.googleusercontent.com";
const clientSecret = "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";

export default NextAuth({
	site: process.env.NEXTAUTH_URL,
	providers: [
		GoogleProvider({
			clientId: clientId,
			clientSecret: clientSecret,
		}),
	],
	secret: "3a9cf8be14a34a9214e2e39ee049b27a",
});
