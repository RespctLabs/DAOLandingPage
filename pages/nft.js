import Image from 'next/image';
import CircularSlider from '@fseehawer/react-circular-slider';
import { Swiper, SwiperSlide } from 'swiper/react';

import ContributorCard from '../components/card/contributor';

import 'swiper/css';

const EndCard = ({ children, heading }) => (
  <div className="relative z-30">
    {children}
    <h1 className="relative -mt-2 md:-mt-3 text-xl md:text-6xl text-center text-shadow font-bold -z-10">
      {heading}
    </h1>
  </div>
);

const NFT = ({ isMobile }) => {
  const settings = {
    slidesToShow: isMobile ? 1 : 4,
    speed: 500,
    cssEase: 'linear',
  };
  return (
    <div className="w-full h-full relative">
      <div className="container mx-auto md:p-0 p-5 overflow-hidden">
        <div className="grid md:grid-cols-2 w-full md:w-[80%] mx-auto my-16">
          <div
            className="relative mx-auto flex justify-center items-center"
            style={{
              width: isMobile ? 300 : 450,
              height: isMobile ? 300 : 450,
            }}
          >
            {/* Top */}
            <h1 className="absolute top-0 text-center text-shadow font-bold text-4xl md:text-6xl tracking-[0.2em] bottom-overflow-fade">
              LEVEL 3
            </h1>

            {/* Bottom */}
            <h1 className="absolute bottom-0 text-center text-shadow font-bold text-4xl md:text-6xl tracking-[0.2em] top-overflow-fade">
              #420
            </h1>

            {/* Left */}
            <h1 className="absolute left-0 text-center text-shadow font-bold text-4xl md:text-6xl tracking-[0.2em] left-overflow-fade vertical-rl">
              RESPCT
            </h1>

            {/* Right */}
            <h1 className="absolute right-0 text-center text-shadow font-bold text-4xl md:text-6xl tracking-[0.2em] left-overflow-fade vertical-lr">
              RESPCT
            </h1>

            <Image
              src="/images/demo.png"
              alt=""
              width={isMobile ? 220 : 350}
              height={isMobile ? 220 : 350}
              className="shadow-2xl shadow-white"
            />
          </div>
          <div className="relative flex flex-col w-full">
            <Image
              src="/images/axie-logo.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
            <div className="flex-1 flex flex-col justify-center mt-6 md:mt-0">
              <h1 className="text-5xl md:text-7xl text-center md:text-right font-medium text-[#ffffffb0]">
                GG x Axie
              </h1>
              <p className="text-[#0895B0] text-xl md:text-2xl text-center md:text-right">
                Utsav Singla
              </p>
            </div>
            <button className="hidden md:flex self-end border-2 border-[#0895B0] text-[#454545] rounded-2xl py-2 px-4 font-semibold text-xl w-fit mt-0">
              Need 200 pts to Upgrade
            </button>
          </div>
        </div>

        <div className="w-full md:w-[70%] mx-auto my-16">
          {isMobile ? (
            <div>
              <div className="flex justify-center">
                <CircularSlider
                  width={200}
                  label="level"
                  labelColor="#fff"
                  knobColor="#005a58"
                  progressColorFrom="#0895B0"
                  progressColorTo="#0895B0"
                  progressSize={20}
                  trackSize={20}
                  data={[2]}
                  dataIndex={10}
                  hideKnob={true}
                  trackColor={'#212127'}
                  min={270}
                  max={100}
                  knobPosition="left"
                />
              </div>
              <div className="flex shadow-xl p-5 justify-between">
                <div className="flex justify-center flex-col">
                  <h5 className="font-bold gradient-text text-sm">
                    1300 <span className="font-normal">MMR</span>
                  </h5>
                  <h5 className="font-bold gradient-text text-sm">
                    45 <span className="font-normal">Avg SLP</span>
                  </h5>
                </div>

                <button className="flex border-2 border-[#0895B0] text-[#454545] rounded-2xl py-2 px-4 font-semibold text-sm w-fit mt-0">
                  Upgrade
                </button>

                <div className="flex justify-center flex-col">
                  <h5 className="font-bold gradient-text text-sm">
                    1300 <span className="font-normal">MMR</span>
                  </h5>
                  <h5 className="font-bold gradient-text text-sm">
                    45 <span className="font-normal">Avg SLP</span>
                  </h5>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-between">
              <div className="flex justify-center flex-col">
                <h5 className="font-bold gradient-text text-3xl">
                  1300 <span className="font-normal">MMR</span>
                </h5>
                <h5 className="font-bold gradient-text text-3xl">
                  45 <span className="font-normal">Avg SLP</span>
                </h5>
              </div>
              <div>
                <CircularSlider
                  label="level"
                  labelColor="#fff"
                  knobColor="#005a58"
                  progressColorFrom="#0895B0"
                  progressColorTo="#0895B0"
                  progressSize={24}
                  trackSize={24}
                  data={[2]}
                  dataIndex={10}
                  hideKnob={true}
                  trackColor={'#212127'}
                  min={270}
                  max={180}
                  knobPosition="left"
                />
              </div>
              <div className="flex justify-center flex-col">
                <h5 className="font-bold text-[#454545] text-3xl">
                  1300 <span className="font-normal">MMR</span>
                </h5>
                <h5 className="font-bold text-[#454545] text-3xl">
                  45 <span className="font-normal">Avg SLP</span>
                </h5>
              </div>
            </div>
          )}
        </div>

        <div className="my-16 md:my-28 w-[90%] mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-left text-center font-bold gradient-heading mb-5">
            Other Players who own this NFT
          </h1>

          <div className="mx-auto">
            <Swiper
              effect="coverflow"
              slidesPerView={isMobile ? 1 : 3}
              centeredSlides={true}
              loop={true}
            >
              {[0, 1, 2, 3].map((item) => (
                <SwiperSlide key={item}>
                  <ContributorCard />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="my-16 md:my-28 w-full md:w-[90%] mx-auto flex flex-row justify-evenly md:justify-between">
          <EndCard heading="STATS">
            <div className="bg-[#212127] shadow-2xl flex md:flex-row flex-col p-10 rounded-3xl z-20">
              <div className="text-[#7A5BB1]">
                <h1 className="font-bold text-xl md:text-5xl">2,300</h1>
                <h3 className="text-base md:text-2xl">Scholars</h3>
              </div>
              <div className="text-[#04AFD0] mt-2 md:mt-0 md:ml-10">
                <h1 className="font-bold text-xl md:text-5xl">1,800</h1>
                <h3 className="text-base md:text-2xl">Avg MMR</h3>
              </div>
            </div>
          </EndCard>

          <EndCard heading="TOP GUILD">
            <div className="bg-[#212127] shadow-2xl flex flex-col md:flex-row p-4 rounded-3xl z-20">
              <div className="mx-auto">
                <Image
                  src="/images/demo-guild.png"
                  alt=""
                  width={isMobile ? 100 : 125}
                  height={isMobile ? 100 : 125}
                />
              </div>
              <div className="text-[#04AFD0] mx-auto  md:m-10">
                <h1 className="font-bold text-xl md:text-5xl">Faizan</h1>
              </div>
            </div>
          </EndCard>
        </div>
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

export default NFT;
