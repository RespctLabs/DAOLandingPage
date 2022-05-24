import Image from "next/image";
import Link from "next/link";

const ReviewCard = ({ isOwnReview }) => (
	<div className="mb-6 bg-[#2C2F36] w-full h-fit flex py-4 px-10 rounded-2xl z-20">
		<Link href="/profile/guild">
			<a className="w-12 h-12 relative rounded-full overflow-hidden ">
				<Image src="/images/guild-demo.png" alt="guild" layout="fill" />
			</a>
		</Link>
		<div className="flex-1 mx-4">
			<Link href="/profile/guild">
				<a className="text-[#666666] text-base">Name XYZ</a>
			</Link>
			<p className="text-white text-lg mt-1">
				Absolutely amaxing acfsdas asdasdasdad cascsacsa asdas asfsadsads
				bdfbggdfgdf css ...
			</p>
			{isOwnReview && (
				<div className="flex mt-2">
					<div>
						<Image src="/svg/heart.svg" alt="like" width={20} height={20} />
					</div>
					<div className="mx-3">
						<Image src="/svg/pencil.svg" alt="edit" width={20} height={20} />
					</div>
				</div>
			)}
		</div>
	</div>
);

const ReviewCardMobile = ({ isOwnReview }) => (
	<div className="mb-6 bg-[#2C2F36] w-full h-fit flex py-4 px-6 rounded-2xl z-20">
		<div className="flex-1">
			<Link href="/profile/guild">
				<a className="text-[#666666] text-base">Name XYZ</a>
			</Link>
			<p className="text-white text-sm mt-1">
				This is just an amazing just wowowowowo
			</p>
			{isOwnReview && (
				<div className="flex mt-2">
					<div>
						<Image src="/svg/heart.svg" alt="like" width={20} height={20} />
					</div>
					<div className="mx-3">
						<Image src="/svg/pencil.svg" alt="edit" width={20} height={20} />
					</div>
				</div>
			)}
		</div>
		<div className="flex items-center justify-end ml-10">
			<Image
				src="/images/guild-demo.png"
				alt="guild"
				width={50}
				height={50}
				objectFit="contain"
				className="rounded-full"
			/>
		</div>
	</div>
);

export { ReviewCard, ReviewCardMobile };
