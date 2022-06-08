import Image from "next/image";

export default function NavBar() {
	return (
		<div className="fixed z-50 flex  items-center justify-between w-full px-5">
			<Image src={"/images/respct.svg"} height="100" width="100" />
			<div className="flex flex-row">
				<div className="flex flex-row items-center rounded-xl mx-3 border px-2 border-[#04afd0] text-white">
					<div className="h-3 w-3  mr-2 bg-green-500 rounded-full" />
					<p>Testnet</p>
				</div>
			</div>
		</div>
	);
}
