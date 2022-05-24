import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";

function Scholarship(props) {
	return (
		<div
			style={{ backgroundImage: `url('${props.data.bg}')` }}
			className={
				"flex mx-auto my-6 w-[300px] h-[150px] md:w-[600px] md:h-[300px] flex-row justify-center md:justify-between rounded-lg bg-center bg-no-repeat bg-contain text-white font-bold"
			}
		>
			<div className="-ml-14 w-[150px] h-[150px] md:w-[300px] md:h-[300px] ">
				<Image
					src={props.data.img}
					width={350}
					height={350}
					alt={props.data.name}
				/>
			</div>
			<div className="w-1/2 flex flex-col -ml-14 justify-center items-center">
				<h1 className="text-center text-2xl mb-10 text-pink-500 font-bold">
					{props.data.name}
				</h1>
				<div className="flex flex-row justify-around w-full">
					<div>
						<HiOutlineUser className="text-2xl" />
						{props.data.members}
					</div>
					<div>
						<FaHandHoldingUsd className="text-2xl" />
						{props.data.cash}
					</div>
				</div>
				<Link href="/scholarship/apply">
					<a className="bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-800 py-2 px-10 rounded-2xl  my-6  ">
						Apply
					</a>
				</Link>
			</div>
		</div>
	);
}

export default Scholarship;
