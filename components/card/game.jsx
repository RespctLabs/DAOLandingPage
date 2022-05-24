import Image from 'next/image';
import { HiOutlineUser } from 'react-icons/hi';
import { FaHandHoldingUsd } from 'react-icons/fa';

const GameCard = (props) => (
  <div
    style={{ backgroundImage: `url('${props.data.bg}')` }}
    className="flex mx-auto w-full h-full flex-row justify-center md:justify-between rounded-lg bg-center bg-no-repeat bg-contain text-white font-bold"
  >
    <div className="w-full h-full -ml-0 md:-ml-10">
      <Image
        src={props.data.img}
        width={props.isMobile ? 200 : 350}
        height={props.isMobile ? 200 : 350}
        alt={props.data.name}
      />
    </div>
    <div className="w-1/2 flex flex-col justify-center items-center">
      <h1 className="text-center text-xl md:text-3xl">{props.data.name}</h1>

      <div className="flex flex-row justify-around w-full mt-4">
        <div className="flex flex-col items-center text-base">
          <HiOutlineUser size={props.isMobile ? 20 : 40} />
          {props.data.members}
        </div>
        <div className="flex flex-col items-center text-base">
          <FaHandHoldingUsd size={props.isMobile ? 20 : 40} />
          {props.data.cash}
        </div>
      </div>
    </div>
  </div>
);

export default GameCard;
