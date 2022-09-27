import Image from "next/image";
import { useEffect } from "react";

export default function NavBar() {
	const scrollFunction = () => {
		if (
			document.body.scrollTop > 80 ||
			document.documentElement.scrollTop > 80
		) {
			document.getElementById("navbar").classList.add("shadow-2xl");
			document.getElementById("navbar").classList.add("bg-transparent");
		} else {
			document.getElementById("navbar").classList.remove("shadow-2xl");
			document.getElementById("navbar").classList.remove("bg-transparent");
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", scrollFunction);
		return () => {
			window.removeEventListener("scroll", scrollFunction);
		};
	}, []);
	return (
		<div
			id="navbar"
			className=" flex  items-center justify-between w-full px-5 py-3 sticky top-0 z-50 transition-all  transform duration-1000 ease-in-out backdrop-blur-sm backdrop-filter"
		>
			<Image src={"/images/respct.svg"} height="50" width="100" alt="logo" />
			<div className="flex flex-row">
				<div className="flex flex-row items-center rounded-xl mx-3 border px-2 border-[#04afd0] text-white">
					<div className="h-3 w-3  mr-2 bg-green-500 rounded-full" />
					<p>Testnet</p>
				</div>
			</div>
		</div>
	);
}
