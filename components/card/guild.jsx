import Image from "next/image";
import Link from "next/link";
import { FiArrowDownRight } from "react-icons/fi";

const GuildCard = ({ isMobile }) => (
	<div className="mb-6 bg-[#2C2F36] w-full h-fit grid grid-cols-5 md:grid-cols-6 py-4 px-10 rounded-2xl">
		<Link href="/profile/guild">
			<a className="col-span-2 flex items-center">
				<Image
					src="/images/guild-demo.png"
					alt="guild"
					width={30}
					height={30}
					className="rounded-full"
				/>
				<p className="mx-4">IndiGG</p>
			</a>
		</Link>

		<div className="flex items-center justify-center">
			<FiArrowDownRight
				size={isMobile ? 25 : 20}
				color="#03AFD0"
				className="rotate"
			/>
			<p className="text-[#03AFD0] mx-2">-2%</p>
		</div>

		<div className="flex items-center justify-center">
			<p className="text-[#4BC985]">$2B</p>
		</div>

		<div className="items-end justify-center hidden md:flex">
			<Image
				src="/images/demo-token.png"
				alt="demo-token"
				width={35}
				height={35}
			/>
			<Image
				src="/images/demo-token.png"
				alt="demo-token"
				width={35}
				height={35}
			/>
			<Image
				src="/images/demo-token.png"
				alt="demo-token"
				width={35}
				height={35}
			/>
		</div>

		<div className="flex items-center justify-center">
			<p className="text-[#4BC985]">2300</p>
		</div>
	</div>
);

const GuildHeading = () => (
	<div className="w-full h-fit grid grid-cols-6 px-10 my-2">
		<div className="col-span-2 flex items-center">
			{" "}
			<p className="text-[#666666] mx-2 break-all text-center">name</p>
		</div>

		<div>
			<p className="text-[#666666] mx-2 break-all text-center">last week</p>
		</div>

		<div>
			<p className="text-[#666666] mx-2 break-all text-center">treasury</p>
		</div>

		<div>
			<p className="text-[#666666] mx-2 break-all text-center">tokens</p>
		</div>

		<div>
			<p className="text-[#666666] mx-2 break-all text-center">members</p>
		</div>
	</div>
);

export { GuildCard, GuildHeading };
