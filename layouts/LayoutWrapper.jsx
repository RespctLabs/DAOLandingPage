import React from "react";
import Meta from "./Meta";

const LayoutWrapper = (params) => {
	const { children, ...props } = params;
	return (
		<div className="w-11/12 mx-auto text-white">
			<Meta />
			{React.cloneElement(children, { ...props })}
		</div>
	);
};

export default LayoutWrapper;
