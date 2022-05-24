import React from "react";

function CoverPhoto() {
	return (
		<div className="flex justify-center items-center px-10">
			<label
				htmlFor="dropzone-file"
				className=" relative flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
			>
				<div className="flex flex-col justify-center items-center pt-5 pb-6">
					<svg
						className="mb-3 w-10 h-10 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
						></path>
					</svg>
					<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
						<span className="font-semibold">Click to upload</span> or drag and
						drop
					</p>
					<p className="text-xs text-gray-500 dark:text-gray-400">
						SVG, PNG, JPG or GIF (MAX. 800x400px)
					</p>
				</div>

				<input
					id="dropzone-file"
					type="file"
					accept="image/*"
					className="hidden"
				/>
				<div className=" absolute right-0 bottom-0 space-x-3">
					<button className="bg-purple-600 px-2 py-1 rounded-full ">
						<svg
							width="10"
							height="18"
							viewBox="0 0 24 31"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M20.4811 10.9361C20.9973 10.9873 21.3823 11.5314 21.3411 12.1539C21.3336 12.2564 20.6561 22.3707 20.2661 26.6133C20.0236 29.2463 18.5811 30.8484 16.4035 30.8966C14.7372 30.9313 13.1297 30.9509 11.5584 30.9509C9.86466 30.9509 8.21338 30.9283 6.57961 30.8876C4.48957 30.8378 3.0433 29.2041 2.80705 26.6239C2.41329 22.3436 1.73953 12.2548 1.73328 12.1539C1.69078 11.5314 2.07578 10.9858 2.59204 10.9361C3.1008 10.9195 3.56081 11.3506 3.60206 11.9715C3.60605 12.0369 3.88149 16.1569 4.18165 20.2332L4.24193 21.0467C4.39311 23.0728 4.54636 25.0198 4.67083 26.3752C4.80458 27.8417 5.46084 28.5982 6.61836 28.6269C9.74341 28.7068 12.9322 28.7113 16.3698 28.6359C17.5998 28.6073 18.2648 27.8658 18.4023 26.3647C18.7898 22.1537 19.4648 12.074 19.4723 11.9715C19.5136 11.3506 19.9698 10.9165 20.4811 10.9361ZM14.182 0.808594C15.3295 0.808594 16.3383 1.74151 16.6345 3.07834L16.952 4.97884C17.0546 5.60185 17.5081 6.05683 18.0331 6.06683L22.1354 6.06699C22.6529 6.06699 23.0729 6.57339 23.0729 7.19735C23.0729 7.8213 22.6529 8.3277 22.1354 8.3277L18.0698 8.32747C18.0635 8.32762 18.0571 8.3277 18.0508 8.3277L18.0203 8.32619L5.05211 8.32752C5.04202 8.32764 5.03193 8.3277 5.02183 8.3277L5.00258 8.32619L0.937515 8.3277C0.420007 8.3277 0 7.8213 0 7.19735C0 6.57339 0.420007 6.06699 0.937515 6.06699L5.03883 6.06549L5.16511 6.05585C5.63548 5.98227 6.02639 5.55155 6.12185 4.97884L6.4256 3.14616C6.73436 1.74151 7.74313 0.808594 8.89065 0.808594H14.182ZM14.182 3.0693H8.89065C8.59064 3.0693 8.32689 3.31195 8.25063 3.6601L7.95938 5.42345C7.92236 5.6468 7.86846 5.86204 7.79948 6.0674H15.2735C15.2045 5.86204 15.1504 5.6468 15.1132 5.42345L14.8095 3.59077C14.7457 3.31195 14.482 3.0693 14.182 3.0693Z"
								fill="white"
							/>
						</svg>
					</button>
					<button className="bg-purple-600 px-2 py-1 rounded-full ">
						<svg
							width="10"
							height="18"
							viewBox="0 0 15 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.20711 1.04289C7.81658 0.652369 7.18342 0.652369 6.79289 1.04289L0.428932 7.40685C0.0384073 7.79738 0.0384073 8.43054 0.428932 8.82107C0.819456 9.21159 1.45262 9.21159 1.84315 8.82107L7.5 3.16421L13.1569 8.82107C13.5474 9.21159 14.1805 9.21159 14.5711 8.82107C14.9616 8.43054 14.9616 7.79738 14.5711 7.40685L8.20711 1.04289ZM8.5 27.25L8.5 1.75L6.5 1.75L6.5 27.25L8.5 27.25Z"
								fill="white"
							/>
						</svg>
					</button>
				</div>
			</label>
		</div>
	);
}

export default CoverPhoto;
