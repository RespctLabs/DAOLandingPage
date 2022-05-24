import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import GameCard from '../components/card/game';
import DaoCard from '../components/card/dao';
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';
import Footer from '../components/footer';

const offerData = [
  {
    img: '/desktop/landing/eth.svg',
    txt: 'Discover new guilds & games',
  },
  {
    img: '/desktop/landing/hash.svg',
    txt: 'Automate scholar onboarding and reduce time to minutes instead of days',
  },
  {
    img: '/desktop/landing/tick.svg',
    txt: 'Identify & track the performance of players over time through their profiles',
  },
];

const gameData = [
  {
    bg: '/images/cards/nyan.png',
    img: '/images/cards/robot.png',
    name: 'Nyan Heroes',
    members: '238',
    cash: '1.5M',
  },
  {
    bg: '/images/cards/nyan.png',
    img: '/images/cards/robot.png',
    name: 'Axie Infinity',
    members: '238',
    cash: '1.5M',
  },
  {
    bg: '/images/cards/neon.png',
    img: '/images/cards/horse.png',
    name: 'Pegaxy',
    members: '238',
    cash: '1.5M',
  },
];

const daoData = [
  {
    img: '/common/bcg_dark.png',
    name: 'Blockchain Gaming',
    members: '300',
    cash: '1.5M',
  },
];

const EmailWaitlist = () => (
  <div className="my-20 flex flex-col items-center md:items-start">
    {/* <input
      type="email"
      placeholder="Enter your email address"
      className="bg-transparent border border-[#03AFD0] rounded-3xl px-4 py-2 w-full md:w-4/5 outline-none"
    /> */}

<button className="bg-[#03AFD0] hover:bg-[#03AFD0]/90 cursor-pointer text-white font-bold py-2 px-4 rounded-xl shadow-lg shadow-[#03afd057] w-fit my-5" data-tally-open="3lbqpo" data-tally-layout="modal" data-tally-auto-close="0">Early Access</button>


    {/* <button className="bg-[#03AFD0] hover:bg-[#03AFD0]/90 cursor-pointer text-white font-bold py-2 px-4 rounded-xl shadow-lg shadow-[#03afd057] w-fit my-5" >
      Partner with us
    </button> */}
  </div>
);

const Landing = ({ isMobile }) => {
  return (
    <div className="w-full h-full relative">
      <div className="container mx-auto md:p-0 p-5">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col">
            <h1 className="text-center md:text-left text-5xl md:text-8xl font-bold blueTxt pb-2">
              Revolution
            </h1>
            <h1 className="text-center md:text-left text-5xl md:text-8xl font-bold pb-2">
              In Web3
            </h1>
            <h1 className="text-center md:text-left text-5xl md:text-8xl font-bold blueTxt pb-2 mb-10 md:mb-0">
              Gaming
            </h1>

            {!isMobile && <EmailWaitlist />}
          </div>

          <div className="w-full h-80 md:h-full relative">
            <Image
              src="/svg/landing.svg"
              alt="landing"
              layout="fill"
              priority={true}
            />
          </div>

          {isMobile && <EmailWaitlist />}
        </div>

        <div className="my-10 md:my-20">
          <h1 className="text-4xl md:text-7xl text-center font-bold pb-2">
            Our
          </h1>
          <h1 className="text-4xl md:text-7xl text-center font-bold pb-2 blueTxt">
            Offerings
          </h1>

          <div className="flex flex-col md:flex-row justify-between my-20">
            {offerData.map((item, index) => (
              <div
                className="blackGlow rounded-3xl flex  justify-center items-center relative flex-1 mx-5 mb-20 md:mb-0"
                key={index}
              >
                <div className="absolute -top-10">
                  <Image
                    src={item.img}
                    width={200}
                    height={100}
                    alt="Offerings"
                  />
                </div>
                <h1 className="text-center text-xl px-10 py-20">{item.txt}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="my-10 md:my-20">
          <h1 className="relative text-4xl md:text-7xl text-center text-shadow-white font-bold tracking-widest">
            GAMES
          </h1>

          <div className="mx-auto my-16">
            <Swiper
              effect="coverflow"
              slidesPerView={isMobile ? 1 : 2}
              centeredSlides={true}
              className="mySwiper"
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              modules={[EffectCoverflow, Autoplay]}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
            >
              {gameData.map((game, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <GameCard data={game} isMobile={isMobile} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="my-10 md:my-20">
          <h1 className="text-4xl md:text-7xl text-center font-bold pb-2">
            <span className="blueTxt">Guilds</span> That
          </h1>
          <h1 className="text-4xl md:text-7xl text-center font-bold pb-2 mb-10">
            Trust <span className="blueTxt">Us</span>
          </h1>

          <div className="flex">
            <DaoCard
              data={daoData[0]}
              isMobile={isMobile}
              className="mx-auto"
            />
          </div>
          {/* <div className="flex -mt-3 md:-mt-6 justify-evenly">
            <DaoCard data={daoData[0]} isMobile={isMobile} />
            <DaoCard data={daoData[0]} isMobile={isMobile} />
          </div> */}
        </div>

        <div className="my-20 relative">
          <h1 className="text-4xl md:text-7xl text-center font-bold pb-2">
            Backed By
          </h1>
          <h1 className="text-4xl md:text-7xl text-center font-bold pb-2">
            The <span className="blueTxt">Giants</span>
          </h1>

          <div className="w-full h-[40rem] md:h-[35rem] relative flex flex-col items-center">
            <Image
              src="/svg/controller.svg"
              alt="Controller"
              className="opacity-10"
              layout="fill"
            />
            <p className="text-center w-full md:w-1/3 text-base md:text-xl mx-auto my-10">
            We are solving for Discovery, onboarding and engagement at a single place
            </p>
            <div className="flex flex-col md:flex-row w-full h-72 md:h-28">
              {['protocol-labs', 'consensys', 'tachyon'].map((item) => (
                <div className="flex-1 relative my-4" key={item}>
                  <Image src={`/svg/${item}.svg`} alt={item} layout="fill" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10 md:my-20 relative">
          <h1 className="text-4xl md:text-6xl text-center font-bold pb-2 blueTxt">
            Powered by
          </h1>
          <h1 className="text-4xl md:text-6xl text-center font-bold pb-2 blueTxt">
            Polygon
          </h1>

          <div className="flex py-4 px-4 flex-row justify-around bg-[#2C2F36] rounded-full w-fit mx-auto my-10">
            {[FiTwitter, FiFacebook, FiInstagram, FiLinkedin].map(
              (Icon, index) => (
                <div
                  className="flex justify-center items-center rounded-xl bg-[#E8E9E9] p-2 mx-3 cursor-pointer hover:scale-110 transition-all hover:text-black text-[#6A6A6A]"
                  key={index}
                >
                  <Icon size={20} />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* <Footer /> */}
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

export default Landing;
