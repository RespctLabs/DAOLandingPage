import Image from 'next/image';
import { FiYoutube, FiTwitch, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';

import ContributorCard from '../../components/card/contributor';
import { GuildCard, GuildHeading } from '../../components/card/guild';
import { ReviewCard, ReviewCardMobile } from '../../components/card/review';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const GameProfile = ({ isMobile }) => {
  const description = [
    { name: 'Ranking', value: 'TOP #10', color: '#03AFD0' },
    { name: 'Game currency', value: 'Smooth Love Potion', color: '#FFAFBC' },
    { name: 'Cost to play', value: '$150 Upfront', color: '#4BC985' },
    { name: 'Wallet compatible', value: 'Platforms', color: '#FFAFBC' },
  ];

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-48 md:h-72 relative top-0">
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <Image src="/images/guild-main.png" alt="guild" layout="fill" />
        </div>
        <div className="absolute -bottom-12 h-fit w-full flex justify-center">
          <Image src="/images/axie.png" alt="guild" width={300} height={150} />
        </div>
      </div>

      <div className="container mx-auto md:p-0 p-5">
        <div className="grid grid-cols-1 mt-12 md:mt-18">
          <h1 className="text-3xl text-center md:text-6xl font-normal md:font-bold my-3 md:my-0">
            Axie Infinity
          </h1>

          {!isMobile && (
            <div className="flex items-center justify-center my-6 md:my-10">
              <button className="bg-[#03AFD0] hover:bg-[#03AFD0]/90 cursor-pointer text-white font-bold py-2 px-4 rounded-2xl shadow-lg shadow-[#03afd057]">
                Start Playing
              </button>
            </div>
          )}

          <div className="flex w-full md:w-1/2 mx-auto justify-evenly items-center">
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

          <p className="font-light text-base mt-5 mx-5 md:w-3/5 md:mx-auto my-5">
            Axie Infinity is a game universe filled with fascinating creatures,
            called Axies, that players can collect as pets. Players aim to
            battle, breed, collect, raise, and build kingdoms for their Axies.
            It&apos;s developed by the gaming company Sky Mavis.
          </p>

          {isMobile && (
            <div className="flex items-center justify-center my-6 md:my-10">
              <button className="bg-[#03AFD0] hover:bg-[#03AFD0]/90 cursor-pointer text-white font-bold py-2 px-4 rounded-2xl shadow-lg shadow-[#03afd057]">
                Start Playing
              </button>
            </div>
          )}
        </div>

        <div className="mx-auto bg-[#2C2F36] rounded-xl w-full md:w-4/6 grid grid-cols-2 md:grid-cols-3 p-4 md:p-[3rem] my-16">
          <div className="col-span-1 md:col-span-2">
            {description.map((item) => (
              <div
                className="flex flex-col md:flex-row my-4 md:my-6"
                key={item.name}
              >
                <h6 className="mx-5 flex-1 text-base">{item.name}</h6>
                <p className={`flex-1 mx-5 text-[${item.color}] text-base`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="relative block">
            <Image src="/svg/eth.svg" alt="ethereum" layout="fill" />
          </div>
        </div>

        <div className="my-16">
          <h1 className="text-3xl md:text-5xl font-bold text-left md:text-center gradient-heading p-2">
            Games Play
          </h1>
          <div className="h-[15rem] md:h-72 mt-3">
            <div className="mx-auto h-full w-full">
              <Swiper
                slidesPerView={isMobile ? 1 : 3}
                centeredSlides={true}
                loop={true}
                className="h-full w-full"
              >
                {[0, 1, 2].map((item) => (
                  <SwiperSlide key={item} className="flex justify-center">
                    <div className="relative w-[90%]  my-2 h-full">
                      <Image
                        src="/svg/bg-axie.svg"
                        alt="Axie-1"
                        layout="fill"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {!isMobile && (
          <div className="my-16">
            <h1 className="text-3xl md:text-5xl text-center font-bold gradient-heading mb-10 p-2">
              Top Players
            </h1>

            <div className="mx-auto">
              <Swiper
                effect="coverflow"
                slidesPerView={3}
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
        )}

        <div className="my-16 md:w-4/6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl text-left md:text-center font-bold gradient-heading mb-8">
            Top Guilds
          </h1>

          <div>
            {!isMobile && <GuildHeading />}
            {[0, 1, 2, 3, 4].map((item) => (
              <GuildCard key={item} isMobile={isMobile} />
            ))}
          </div>
        </div>

        <div className="my-16 relative z-10 md:w-4/6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl text-left md:text-center font-bold gradient-heading mb-8">
            Reviews
          </h1>

          {/* <div className="w-full -z-1" style={{ height: 500 }}>
            <Image
              src="/svg/guild-bg.svg"
              alt="review-1"
              layout="fill"
              objectFit="contain"
              className="-z-10"
            />
          </div> */}

          <div>
            {isMobile ? (
              <>
                <ReviewCardMobile isOwnReview={true} />
                <ReviewCardMobile />
                <ReviewCardMobile />
                <ReviewCardMobile />
              </>
            ) : (
              <>
                <ReviewCard isOwnReview={true} />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
              </>
            )}
          </div>
        </div>

        {isMobile && (
          <div className="my-16">
            <h1 className="text-3xl md:text-5xl font-bold gradient-heading mb-8">
              Top Players
            </h1>

            <div>
              {[0, 1, 2, 3, 4].map((item) => (
                <GuildCard key={item} isMobile={isMobile} />
              ))}
            </div>
          </div>
        )}
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

export default GameProfile;
