import Link from "next/link";
import Input from "../components/Input";

const Login = () => {
	return (
		<div className=" text-center mb-20">
			<h1 className="text-6xl font-bold bg-[url('/svg/logo.svg')] bg-no-repeat p-20 my-10 bg-center ">
				SIGN <span className=" text-blue-500">UP</span>
			</h1>
			<form className="bg-[url('/svg/guild-bg.svg')] bg-no-repeat bg-center bg-origin-content p-4 px-6 md:px-80 ">
				<Input type="text" placeholder="Name" label="Name" />
				<Input type="text" placeholder="Username" label="Username" />
				<Input type="email" placeholder="Email" label="Email" />
				<Input type="password" placeholder="Password" label="Password" />
				<Input
					type="password"
					placeholder="Confirm Password"
					label="Confirm Password"
				/>
				<Input type="select" placeholder="Country" label="Country" />

				<h4 className="text-xl text-gray-400 font-semibold">Interests</h4>
				<div className=" my-3 flex flex-row justify-between">
					<button className="bg-black py-2 px-8 rounded-full  hover:bg-slate-800 ">
						DAOs
					</button>
					<button className="bg-black py-2 px-8 rounded-full hover:bg-slate-800  ">
						Games
					</button>
					<button className="bg-black py-2 px-8 rounded-full hover:bg-slate-800 ">
						Guilds
					</button>
				</div>

				<h4 className="text-xl text-gray-400 font-semibold mt-6">Why Here</h4>
				<div>
					<div className="bg-gray-800 rounded-2xl p-2 my-6 font-bold text-xl">
						Find like <span className=" text-blue-400">minded</span> individuals
					</div>
					<div className="bg-gray-800 rounded-2xl p-2 my-6 font-bold text-xl">
						Find more <span className=" text-blue-400">games</span> to play
					</div>
					<div className="bg-gray-800 rounded-2xl p-2 my-6 font-bold text-xl">
						Create Web3 <span className=" text-blue-400">respct</span> profile
					</div>
					<div className="bg-gray-800 rounded-2xl p-2 my-6 font-bold text-xl">
						Find interesting <span className=" text-blue-400">DAOs</span>
					</div>
				</div>
				<button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-800 py-3 px-20 rounded-2xl mt-10 text-2xl ">
					Create
				</button>
			</form>

			<div className="mt-10 text-2xl text-gray-400">
				<Link href="/login">Login</Link> | <Link href="/help">Help</Link>
			</div>
		</div>
	);
};

export default Login;
