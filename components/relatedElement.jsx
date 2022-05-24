import Image from "next/image";

const RelatedElements = (props) => {
    return (
        <>
            <div className="flex flex-row justify-between items-center my-5 px-2 py-3 bg-[#2C2F36] rounded-[11px]">
                <div className="flex items-center justify-around">
                    {/* <div> */}
                        <Image
                            src={props.props.img}
                            width={30}
                            height={30}
                            alt={props.props.name}
                        />
                    {/* </div> */}
                    <h3>
                        {props.props.name}
                    </h3>
                </div>
                <div className="flex flex-row items-center space-x-5 justify-around">
                    <div className="flex items-center text-[#03AFD0]">
                        <Image
                            src={props.props.icon1}
                            width={9}
                            height={9}
                            alt="Icon 1"
                        />
                        <h3>
                            {props.props.val1}
                        </h3>
                    </div>
                    <h3 className="text-[#4BC985}">
                        ${props.props.cash}
                    </h3>
                    <div className="flex items-center text-[#FFAFBC]">
                        <Image
                            src={props.props.icon2}
                            width={17}
                            height={17}
                            alt="Icon 2"
                        />
                        <h3>
                            {props.props.val2}
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelatedElements;