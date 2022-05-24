import Image from "next/image";
import { FiUser } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";

const DaoCard = (props) => {
    // console.log(props.data.img);
    return (
        <>
            <div className="bg-[#2C2F36] md:w-[304px] md:h-[350px] rounded-[11px] md:m-10 my-14">
                <div className="flex justify-center -mt-20">
                    <Image
                        src={props.data.img}
                        width={195}
                        height={195}
                        alt="dao"
                    />
                </div>
                <div className="mt-5">
                    <h1 className="uppercase font-semibold text-center text-[24px]">
                        {props.data.name}
                    </h1>
                    <div className="flex flex-row items-center justify-around mt-10">
                        <div className="flex flex-col justify-center items-center">
                            <FiUser className="w-[66px] h-[66px] text-[#625a5a]" />
                            <span className="text-[#84C883] text-[16px]">{props.data.members}</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <GiReceiveMoney className="w-[66px] h-[66px] text-[#625a5a]" />
                            <span className="text-[#84C883] text-[16px]">{props.data.money}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DaoCard;