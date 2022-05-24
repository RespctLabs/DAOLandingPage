import Link from "next/link";
import CoverPhoto from "../../components/CoverPhoto";
import Input from "../../components/Input";

const Settings = () => {
	return (
		<div className=" text-center mb-20">
			<div className="flex justify-around">
				<Link href="/profile/user">
					<a className="bg-black py-3 px-6 rounded-2xl">Profile</a>
				</Link>
				<Link href="/settings/social">
					<a className="bg-black py-3 px-6 rounded-2xl">Social</a>
				</Link>
				<Link href="/settings/scholarship">
					<a className="bg-black py-3 px-6 rounded-2xl">Manage NFT</a>
				</Link>
			</div>
			<h1 className="text-6xl font-bold bg-[url('/svg/logo.svg')] bg-contain bg-no-repeat p-20 my-10 bg-center ">
				PROFILE <span className=" text-blue-400">SETTINGS</span>
			</h1>
			<CoverPhoto />
			<form className="bg-[url('/svg/settings-bg.svg')] bg-contain bg-no-repeat bg-center bg-origin-content p-4 px-6 lg:px-80 ">
				<Input type="text" placeholder="Name" label="Name" />
				<Input type="textarea" placeholder="Description" label="Description" />
				<Input type="email" placeholder="Email" label="Email" />
				<Input type="select" placeholder="Country" label="Country" />

				<button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-800 py-3 px-20 rounded-2xl mt-10 text-xl ">
					Save Changes
				</button>
			</form>
		</div>
	);
};

export default Settings;
