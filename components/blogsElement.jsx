import Image from "next/image";

const BlogsElement = (props) => {
    // console.log(props.props.title);
    return (
        <>
            <div className="flex flex-row justify-between mx-auto">
                <div className="space-y-2">
                    <h1 className="text-base text-[#444444]">
                        {props.props.title}
                    </h1>
                    <h3 className="text-sm w-3/4">
                        {props.props.desc}
                    </h3>
                </div>
                <div>
                    <Image
                        src={props.props.img}
                        width={77}
                        height={77}
                        alt={props.props.title}
                    />
                </div>
            </div>
            <hr className="border w-4/5 my-2 mx-auto"/>
        </>
    )
}

export default BlogsElement;