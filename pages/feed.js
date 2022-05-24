import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Card = () => (
  <div className="my-24">
    <div className="relative mx-auto flex flex-col items-center justify-center w-full md:w-3/4 bg-[#2C2F36] py-10 px-10 md:px-20 rounded-xl">
      <div className="absolute -top-[4rem]">
        <Image
          src="/images/user-demo.png"
          alt="avatar"
          width={100}
          height={100}
        />
      </div>
      <h4 className="text-center text-base">XYZ User</h4>
      <h5 className="text-center text-sm text-[#AFAFAF]">2 hours ago</h5>

      <p className="text-base my-4">
        Absolutely amaxing acfsdas Absolutely amaxing acfsdas Absolutely amaxing
        acfsdas Absolutely amaxing acfsdasoely
      </p>

      <div className="flex h-[4rem] md:h-[10rem] w-full mt-5">
        <div className="relative flex-1 mr-5 rounded-xl">
          <Image src="/images/guild-main.png" alt="avatar" layout="fill" />
        </div>
        <div className="relative flex-1 ml-5 rounded-xl">
          <Image src="/images/guild-main.png" alt="avatar" layout="fill" />
        </div>
      </div>
    </div>
  </div>
);

const Feed = ({ isMobile }) => {
  return (
    <div className="w-full h-full relative">
      <div className="container mx-auto md:p-0 p-5">
        <div className="mt-16 mb-32">
          <h1 className="text-3xl md:text-5xl text-left md:text-center font-bold gradient-heading mb-5 md:mb-10 p-2">
            See what’s going on
          </h1>

          <div className="mx-auto flex items-center justify-center w-1/3">
            {['Edit Profile', 'People', 'Games'].map((item) => (
              <button
                key={item}
                className="text-[#4ED4FD] bg-[#131312] hover:bg-[#131312]/90 cursor-pointer font-bold py-2 px-4 rounded-2xl shadow-lg shadow-slate-700 hover:shadow-slate-600 flex-1 text-center mx-2 whitespace-nowrap"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <Card />
        <Card />
        <Card />
        <Card />
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

export default Feed;
