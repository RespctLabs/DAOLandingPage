import React from "react";
import Countries from "../lib/Countries.json";

function Input({ label, placeholder, type }) {
	return (
		<div className="flex flex-col align-middle items-center space-y-3 my-10">
			<label className="text-xl text-gray-400 font-semibold">{label}</label>
			{type === "select" ? (
				<select
					id="default"
					className="w-full p-4 rounded-2xl text-gray-400  border-black  placeholder-gray-400 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 focus:border-blue-500 focus:ring-blue-500 "
				>
					{Countries.map((country, index) => (
						<option value={country.value} key={index}>
							{country.title}
						</option>
					))}
				</select>
			) : type == "textarea" ? (
				<textarea
					rows="4"
					className="w-full p-4 rounded-xl text-gray-400  border-black  placeholder-gray-400 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 focus:border-blue-500 focus:ring-blue-500"
					// placeholder={placeholder}
				/>
			) : (
				<input
					type={type}
					// placeholder={placeholder}
					className="w-full p-4 rounded-2xl text-gray-400  border-black  placeholder-gray-400 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 focus:border-blue-500 focus:ring-blue-500 "
				/>
			)}
		</div>
	);
}

export default Input;
