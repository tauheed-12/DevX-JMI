import React from "react";
import tracksData from '../Data/tracks';
import TrackCard from "./Card";

function FeaturesBlocks() {
	return (
		<section className="relative">
			{/* <div
				className="hidden absolute inset-0 top-1/2 md:mt-15 lg:mt-0 bg-orange-600/20 pointer-events-none"
				aria-hidden="true"></div> */}

			<div className="relative max-w-[92rem] mx-auto px-4 sm:px-6">
				<div className="py-6 md:py-10">
					<div className="mx-auto text-center pb-6 md:pb-10">
						<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
							TRACKS
						</h1>
						<div className="py-8 flex flex-wrap justify-center">
							{tracksData.map((track, index) => {
								return <TrackCard key={index} track={track} index={index} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FeaturesBlocks;
