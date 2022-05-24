import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

function Login(props) {
	const { data: session } = useSession();
	return (
		<div className=" text-center my-20">
			<h1 className="text-6xl font-bold bg-[url('/common/login.svg')] bg-contain bg-no-repeat p-10 mb-10  bg-center "></h1>
			{session ? (
				<>
					{session.user.image && (
						<span style={{ backgroundImage: `url('${session.user.image}')` }} />
					)}
					<span>
						<small>Signed in as</small>
						<br />
						<strong>{session.user.email ?? session.user.name}</strong>
					</span>
					<br />
					<a
						href={`/api/auth/signout`}
						onClick={(e) => {
							e.preventDefault();
							signOut();
						}}
					>
						Sign out
					</a>
				</>
			) : (
				<a
					href={`/api/auth/signin`}
					onClick={(e) => {
						e.preventDefault();
						signIn("google");
					}}
				>
					<Image src="/logo/google.png" width={100} height={100} />
					<br />
					<span className="text-cyan-500 text-2xl font-bold">Google</span>
				</a>
			)}
			<div className=" bg-[url('/svg/logo.svg')] bg-contain bg-no-repeat p-10 mt-10  bg-center"></div>
		</div>
	);
}

export default Login;
