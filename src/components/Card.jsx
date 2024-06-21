import React from "react";

function TrackCard({ index, track }) {
	return (
		<div className="w-full md:w-1/3 p-2" key={index} data-aos="fade-up">
			<div className="">
				<div className="flex gap-2">
					<img src={track.icon} alt={track.title} className="w-[120px] h-[120px] self-center" />
					<h1 className="py-2 self-center text-xl font-bold text-white transition-colors duration-300 ease-in-out hover:text-pink-700">
						{track.title}
					</h1>
				</div>
				<div className="flex flex-col">
					<div
						className="text-justify text-gray-500 track-description font-serif ml-10"
						dangerouslySetInnerHTML={{
							__html: track.description,
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default TrackCard;
