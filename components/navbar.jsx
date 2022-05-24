// import { IoChevronBack } from "react-icons/io5";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import FLogo from "../public/common/f.svg";

const Navbar = () => {
	const { data: session } = useSession();

	return (
		<div className="w-11/12 mx-auto nav flex flex-row items-center my-5 py-3 px-5 justify-between  bg-[#131312] rounded-2xl shadow-3xl">
			{!session ? (
				<div className="flex flex-row items-center justify-between w-full">
					<div>
						<Image src={FLogo} width={50} height={30} alt="F" />
					</div>
					<Link href="/">
						<a className="text-3xl respct font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-800">
							respct
						</a>
					</Link>
					<div>
						<button className="text-[#03AFD0] border rounded-[12px] px-4 py-1 joinBtn">
							Join Discord
						</button>
					</div>
				</div>
			) : (
				<div className="flex flex-row items-center justify-between w-full">
					<div>
						<Image src={FLogo} width={50} height={25} alt="F" />
						<Link href="/">
							<a className="text-3xl respct font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-800">
								respct
							</a>
						</Link>
					</div>
					<div>
						<form className="text-center  flex justify-center">
							<div className="relative w-full">
								<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
									<svg
										width="27"
										height="27"
										viewBox="0 0 27 27"
										fill="none"
										className="w-5 h-5  text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M12.6897 0C19.6868 0 25.3782 5.69142 25.3782 12.6884C25.3782 15.9896 24.1113 19.0004 22.0382 21.2601L26.1175 25.3309C26.4993 25.7127 26.5006 26.3303 26.1188 26.712C25.9286 26.9049 25.6771 27 25.4269 27C25.178 27 24.9279 26.9049 24.7363 26.7146L20.6078 22.5976C18.436 24.3369 15.6823 25.3782 12.6897 25.3782C5.69273 25.3782 0 19.6854 0 12.6884C0 5.69142 5.69273 0 12.6897 0ZM12.6897 1.95447C6.77029 1.95447 1.95447 6.76899 1.95447 12.6884C1.95447 18.6079 6.77029 23.4237 12.6897 23.4237C18.6079 23.4237 23.4237 18.6079 23.4237 12.6884C23.4237 6.76899 18.6079 1.95447 12.6897 1.95447Z"
											fill="#9F9F9F"
										/>
									</svg>
								</div>
								<input
									type="text"
									id="simple-search"
									className="text-sm rounded-2xl block w-full pl-10 p-2.5  bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
									placeholder="Search"
									required
								/>
							</div>
						</form>
					</div>

					<div className="flex flex-row justify-between space-x-6">
						<Link href="/feed">
							<a>Home</a>
						</Link>
						<Link href="/profile/guild">
							<a>Guilds</a>
						</Link>
						<Link href="/home">
							<a>DAOs</a>
						</Link>
						<Link href="/home">
							<a>Wallet</a>
						</Link>
					</div>
					<div>
						<Link href="/profile/user">
							<a>
								<Image src="/common/user.png" width={30} height={30} alt="F" />
							</a>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
