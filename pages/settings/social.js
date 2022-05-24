import Link from "next/link";
import React from "react";
import Input from "../../components/Input";

function social() {
	return (
		<div className=" text-center mb-20">
			<div className="flex justify-around">
				<Link href="/settings/profile">
					<a className="bg-black py-3 px-6 rounded-2xl">Profile</a>
				</Link>
				<Link href="/settings">
					<a className="bg-black py-3 px-6 rounded-2xl">Settings</a>
				</Link>
				<Link href="/settings/scholarship">
					<a className="bg-black py-3 px-6 rounded-2xl">Manage NFT</a>
				</Link>
			</div>
			<h1 className="text-6xl font-bold bg-[url('/svg/logo.svg')] bg-no-repeat p-20 my-10 bg-center ">
				<span className=" text-blue-400">SOCIALS</span>
			</h1>
			<form className="bg-[url('/svg/settings-bg.svg')] bg-contain bg-no-repeat bg-center bg-origin-content p-4 px-6 md:px-80 ">
				<Input type="text" placeholder="Instagram" label="Instagram" />
				<Input type="text" placeholder="Youtube" label="Youtube" />
				<Input type="text" placeholder="Twitch" label="Twitch" />
				<Input type="text" placeholder="Twitter" label="Twitter" />
				<button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-800 py-3 px-20 rounded-2xl mt-10 text-2xl ">
					Save Changes
				</button>
			</form>
		</div>
	);
}

export default social;
