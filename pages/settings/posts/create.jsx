import React from "react";
import CoverPhoto from "../../../components/CoverPhoto";
import Input from "../../../components/Input";

function Create() {
	return (
		<div className="text-center my-20">
			<form className="bg-[url('/svg/settings-bg.svg')] bg-contain bg-no-repeat bg-center bg-origin-content p-4 px-6 lg:px-80 ">
				<h1 className="text-4xl font-extrabold">Create Post</h1>
				<Input type="text" placeholder="Title" label="Title" />
				<Input type="textarea" placeholder="Description" label="Description" />
				<CoverPhoto />
				<button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-800 py-2 px-20 rounded-2xl mt-10 text-2xl ">
					Create
				</button>
			</form>
		</div>
	);
}

export default Create;
