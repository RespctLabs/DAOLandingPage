import Image from "next/image";
import Link from "next/link";

const ContributorCard = () => (
	<Link href="/nft">
		<a className="w-full md:w-4/5 mx-0 mb-10 md:mb-0 md:mx-5 py-10">
			<div className="shadow-lg bg-[#27272e] rounded-3xl p-2">
				<div className="w-full mx-auto rounded-3xl overflow-hidden relative h-60">
					<Image
						alt="demo"
						src="/images/demo.png"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="grid grid-cols-2 relative p-2">
					<div className="flex flex-col">
						<p>IGGxAxie</p>
						<p>#2789</p>
					</div>

					<div className="absolute -bottom-10 left-[35%] flex flex-col bg-black rounded-full w-fit p-5 text-center">
						<p className="text-bold">Level</p>
						<p>4</p>
					</div>

					<div className="text-right">
						<p>Rahul</p>
						<p>Bansal</p>
					</div>
				</div>
			</div>
		</a>
	</Link>
);

export default ContributorCard;
