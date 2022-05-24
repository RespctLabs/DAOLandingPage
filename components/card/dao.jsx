import Image from 'next/image';
import { HiOutlineUser } from 'react-icons/hi';
import { FaHandHoldingUsd } from 'react-icons/fa';

const DaoCard = (props) => {
  return (
    <div
      className={
        'blackGlow h-full flex flex-col md:flex-row justify-center items-center rounded-3xl px-7 py-5 md:p-10 ' +
        props.className
      }
    >
      <div className="rounded-lg mx-3">
        <Image
          src={props.data.img}
          width={props.isMobile ? 100 : 150}
          height={props.isMobile ? 100 : 150}
          alt={props.data.name}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center flex-1 mx-3">
        <h1 className="text-sm md:text-xl flex-1">{props.data.name}</h1>
        <div className="flex flex-row justify-between w-full flex-1">
          <div className="flex flex-col items-center text-xs md:text-base">
            <HiOutlineUser size={props.isMobile ? 20 : 40} color="#a9a9a9" />
            {props.data.members}
          </div>
          {/* <div className="flex flex-col items-center text-xs md:text-base">
            <FaHandHoldingUsd size={props.isMobile ? 20 : 40} color="#a9a9a9" />
            {props.data.cash}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DaoCard;
