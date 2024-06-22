import React from 'react'

const Schedule = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center py-4 px-2 my-2 gap-4">
            <h1 className="text-3xl font-semibold text-white">Events Schedule</h1>
            <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-3/4 gap-2 sm:gap-0" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <div className="flex flex-col justify-center items-center font-semibold bg-pink-700 px-4 py-2 hover:bg-slate-600 w-56 sm:w-auto">
                    <span className="text-lg text-white">June 22nd</span>
                    <span className="text-sm text-slate-500">Registration Begins</span>
                </div>
                <div className="flex flex-col justify-center items-center font-semibold bg-pink-700 px-4 py-2 hover:bg-slate-600 w-56 sm:w-auto">
                    <span className="text-lg text-white">June 30th - July 1st</span>
                    <span className="text-sm text-slate-500">Round 1</span>
                </div>
                <div className="flex flex-col justify-center items-center font-semibold bg-pink-700 px-4 py-2 hover:bg-slate-600 w-56 sm:w-auto">
                    <span className="text-lg text-white">July 9th-10th</span>
                    <span className="text-sm text-slate-500">Round 2</span>
                </div>
                <div className="flex flex-col justify-center items-center font-semibold bg-pink-700 px-4 py-2 hover:bg-slate-600 w-56 sm:w-auto">
                    <span className="text-lg text-white">Yet to disclose</span>
                    <span className="text-sm text-slate-500">Round 3</span>
                </div>
                <div className="flex flex-col justify-center items-center font-semibold bg-pink-700 px-4 py-2 hover:bg-slate-600 w-56 sm:w-auto">
                    <span className="text-lg text-white">Yet to disclose</span>
                    <span className="text-sm text-slate-500">Result</span>
                </div>
            </div>
        </div>
    )
}

export default Schedule
