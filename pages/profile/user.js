import Image from 'next/image';
import {
  FiYoutube,
  FiTwitch,
  FiTwitter,
  FiInstagram,
  FiSettings,
  FiPlusSquare,
} from 'react-icons/fi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';

import ContributorCard from '../../components/card/contributor';
import { GuildCard } from '../../components/card/guild';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Link from 'next/link';

const UserProfile = ({ isMobile }) => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-48 md:h-72 relative top-0">
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <Image src="/images/user-bg.png" alt="guild" layout="fill" />
        </div>
        <div className="absolute -bottom-12 h-fit w-full flex justify-center">
          <Image
            src="/images/user-demo.png"
            alt="guild"
            width={150}
            height={150}
          />
        </div>
      </div>

      <div className="container mx-auto md:p-0 p-5">
        <div className="grid grid-cols-1 mt-10 md:mt-18">
          <h1 className="text-3xl text-center md:text-6xl font-normal md:font-bold">
            Name XYZ
          </h1>

          {!isMobile && (
            <div className="flex items-center justify-center my-10">
              <Link href="/settings">
                <a className="bg-[#03AFD0] hover:bg-[#03AFD0]/90 cursor-pointer text-white font-bold py-2 px-4 rounded-2xl shadow-lg shadow-[#03afd057] flex items-center mx-2">
                  <FiSettings className="mr-2" size={18} />
                  Edit Profile
                </a>
              </Link>
              <Link href="/settings/posts">
                <a className="bg-[#03AFD0] hover:bg-[#03AFD0]/90 cursor-pointer text-white font-bold py-2 px-4 rounded-2xl shadow-lg shadow-[#03afd057] flex items-center mx-2">
                  <FiPlusSquare className="mr-2 rounded-xl" size={18} />
                  Add Posts
                </a>
              </Link>
            </div>
          )}

          {isMobile && (
            <p className="font-light text-base mt-5 mx-5 md:w-3/5 md:mx-auto my-5">
              Azuki starts with a collection of 10,000 avatars that give you
              membership access to The Garden: a corner of the internet where
              artists, builders, and web3 enthusiasts meet to create a
              decentralized future. Azuki holders receive access to exclusive
              drops, experiences, and more. Visit azuki.com for more details.
            </p>
          )}

          <div className="flex w-full md:w-1/2 mx-auto justify-evenly items-center mt-5">
            <div>
              <FiTwitter
                size={30}
                color="#3672C2"
                className="my-2 hover:scale-125 transition-all delay-125 ease-in cursor-pointer"
              />
              63.2k
            </div>
            <div>
              <FiYoutube
                size={30}
                color="#FF0000"
                className="my-2 hover:scale-125 transition-all delay-125 ease-in cursor-pointer"
              />
              2.3k
            </div>
            <div>
              <FiInstagram
                size={30}
                color="#C01F9D"
                className="my-2 hover:scale-125 transition-all delay-125 ease-in cursor-pointer"
              />
              2.3k
            </div>
            <div>
              <FiTwitch
                size={30}
                color="#691FC0"
                className="my-2 hover:scale-125 transition-all delay-125 ease-in cursor-pointer"
              />
              2.3k
            </div>
          </div>

          {!isMobile && (
            <p className="font-light text-base mt-5 mx-5 md:w-3/5 md:mx-auto my-5">
              Azuki starts with a collection of 10,000 avatars that give you
              membership access to The Garden: a corner of the internet where
              artists, builders, and web3 enthusiasts meet to create a
              decentralized future. Azuki holders receive access to exclusive
              drops, experiences, and more. Visit azuki.com for more details.
            </p>
          )}

          {isMobile && (
            <div className="mt-8 mx-5">
              <p className="text-[#03AFD0] border-[1px] w-fit py-2 px-4 border-[#03AFD0] rounded-2xl">
                Top #50 Cyanball Player
              </p>
              <p className="text-[#03D00B] mt-2 border-[1px] w-fit py-2 px-4 border-[#03D00B] rounded-2xl">
                Top #100 Axie Player
              </p>
            </div>
          )}
        </div>

        <div className="my-16">
          <h1 className="text-3xl md:text-5xl text-left md:text-center font-bold gradient-heading md:mb-10">
            Respct NFTs
          </h1>

          <div className="mx-auto">
            <Swiper
              effect="coverflow"
              slidesPerView={isMobile ? 1 : 3}
              centeredSlides={true}
              loop={true}
              modules={[EffectCoverflow]}
              coverflowEffect={{
                slideShadows: false,
                zoom: 1.2,
              }}
            >
              {[0, 1, 2, 3].map((item) => (
                <SwiperSlide key={item}>
                  <ContributorCard />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="my-16 md:w-4/6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl text-left md:text-center font-bold gradient-heading mb-8">
            Guilds Joined
          </h1>

          <div>
            {[0, 1, 2, 3, 4].map((item) => (
              <GuildCard key={item} isMobile={isMobile} />
            ))}
          </div>
        </div>

        <div className="my-16 md:w-4/6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl text-left md:text-center font-bold gradient-heading mb-8">
            DAOs Joined
          </h1>

          <div>
            {[0, 1, 2, 3, 4].map((item) => (
              <GuildCard key={item} isMobile={isMobile} />
            ))}
          </div>
        </div>

        {/* {!isMobile && (
          <div className="my-20 md:w-4/6 md:mx-auto">
            <h1 className="text-5xl text-center font-bold gradient-heading mb-6 py-2">
              Blogs
            </h1>

            <div>
              <Blog />
              <Blog />
              <Blog />
            </div>

            <div className="w-full flex justify-center">
              <FiArrowDownCircle color="#11A6C3" size={46} />
            </div>
          </div>
        )} */}

        {/* <div className="my-16 md:w-4/6 md:mx-auto">
					<h1 className="text-3xl md:text-5xl text-left md:text-center font-bold gradient-heading mb-6 py-2">
						Tweets
					</h1>

					<div>
						{isMobile ? (
							<>
								<BlogMobile />
								<BlogMobile />
								<BlogMobile />
							</>
						) : (
							<>
								<Blog />
								<Blog />
								<Blog />
							</>
						)}
					</div>

					<div className="w-full flex justify-center mt-5">
						<FiArrowDownCircle
							color="#11A6C3"
							size={46}
							className="hover:scale-110 cursor-pointer"
						/>
					</div>
				</div> */}
      </div>
    </div>
  );
};

export async function getServerSideProps({ req }) {
  let userAgent;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }
  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return {
    props: {
      isMobile: isMobile,
    },
  };
}

export default UserProfile;
