import Image from "next/image";
import BlogsElement from "../components/blogsElement";
import RelatedElement from "../components/relatedElement";
import BeTheGameImg from "../public/desktop/beTheGameImg.svg";
import BeTheGameImgM from "../public/mobile/beTheGameImgM.svg";
import GuildImg from "../public/mobile/guildImg.svg";

const Home = () => {
	const guildData = [
		"/common/guild/guild1.svg",
		"/common/guild/guild2.svg",
		"/common/guild/guild3.svg",
	];

	const relatedData = [
		{
			img: "/mobile/related/logoGuild.svg",
			name: "IndiGG",
			icon1: "/icons/arrow.svg",
			val1: "-0.2%",
			cash: "2B",
			icon2: "/icons/bottle.svg",
			val2: "65%",
		},
		{
			img: "/mobile/related/logoGuild.svg",
			name: "MeritCircle",
			icon1: "/icons/arrow.svg",
			val1: "-0.2%",
			cash: "2B",
			icon2: "/icons/bottle.svg",
			val2: "65%",
		},
		{
			img: "/mobile/related/logoGuild.svg",
			name: "YGG",
			icon1: "/icons/arrow.svg",
			val1: "-0.2%",
			cash: "2B",
			icon2: "/icons/bottle.svg",
			val2: "65%",
		},

		{
			img: "/mobile/related/logoGuild.svg",
			name: "BitDao",
			icon1: "/icons/arrow.svg",
			val1: "-0.2%",
			cash: "2B",
			icon2: "/icons/bottle.svg",
			val2: "65%",
		},

		{
			img: "/mobile/related/logoGuild.svg",
			name: "BitDao",
			icon1: "/icons/arrow.svg",
			val1: "-0.2%",
			cash: "2B",
			icon2: "/icons/bottle.svg",
			val2: "65%",
		},
	];

	const blogData = [
		{
			title: "Absolutely amazing",
			desc: "this is an amazing game just wowowowowow",
			img: "/mobile/blogs/skull.svg",
		},
		{
			title: "just wow",
			desc: "this is an amazing game just wowowowowow",
			img: "/mobile/blogs/skull.svg",
		},
		{
			title: "Absolutely amazing",
			desc: "this is an amazing game just wowowowowow",
			img: "/mobile/blogs/skull.svg",
		},
		{
			title: "Absolutely amazing",
			desc: "this is an amazing game just wowowowowow",
			img: "/mobile/blogs/lion.svg",
		},
	];
	return (
		<>
			<div className="w-2/3 mx-auto flex flex-row justify-between my-20">
				<div className="w-1/2">
					<div className="hidden md:flex">
						<Image
							src={BeTheGameImg}
							width={500}
							height={500}
							alt="BeTheGame"
						/>
					</div>
					<div className="md:hidden w-[150px] h-[260px]">
						<Image
							src={BeTheGameImgM}
							width={150}
							height={260}
							alt="BeTheGame"
						/>
					</div>
				</div>
				<div className="space-y-5 md:space-y-10 w-2/3 md:w-1/2 md:my-20">
					<p className="blueTxt text-[56px] md:text-[150px] leading-[4rem] md:leading-[8rem]">
						BE THE GAME
					</p>
					<button className="rounded bg-transparent border text-sm md:text-xl px-2 py-1 border-[#03AFD0]">
						Create Your Identity
					</button>
				</div>
			</div>
			<div className="mx-auto">
				<h1 className="hidden md:flex blueTxt text-[50px] font-bold">GUILD</h1>
				<div className="hidden md:flex flex-row justify-between">
					{guildData.map((data, index) => {
						return (
							<>
								<div>
									<Image
										src={data}
										width={380}
										height={250}
										alt="Guild Photo"
									/>
								</div>
							</>
						);
					})}
				</div>
				<div className="flex justify-center">
					<Image src={GuildImg} alt="Guild Image" />
				</div>
				<p className="md:mx-0 md:w-1/2 text-center mt-10 mx-auto">
					Axie Infinity is a game universe filled with fascinating creatures,
					called Axies, that players can collect as pets. Players aim to battle,
					breed, collect, raise, and build kingdoms for their Axies. It&apos;s
					developed by the gaming company Sky Mavies.
				</p>
			</div>
			<div>
				<h1 className="text-[24px] related">Related</h1>
				<div>
					{relatedData.map((data, index) => {
						return <RelatedElement props={data} key={index} />;
					})}
				</div>
			</div>
			<div>
				<h1 className="blueTxt text-[24px]">Blogs</h1>
				<div className="mx-auto mt-5">
					{blogData.map((data, index) => {
						return <BlogsElement props={data} key={index} />;
					})}
				</div>
			</div>
		</>
	);
};

export default Home;
