import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [activeRound, setActiveRound] = useState(null);

    const handleRoundClick = (round) => {
        setActiveRound(round);
    };

    const renderRoundDetails = () => {
        switch (activeRound) {
            case 1:
                return (
                    <div>
                        <h2 className="text-2xl text-white font-semibold mb-4">Round 1: PDF Submission</h2>
                        <p className="text-gray-600 mb-4">Description: Detailed explanation about the problem and solution.</p>
                        <p className="text-gray-600 mb-4">Rules: Submit a PDF document outlining your approach.</p>
                        <p className="text-gray-600 mb-4">Date: Submission deadline is June 30th, 2024.</p>
                        <div className="mt-4">
                            <label className="block mb-2 text-gray-200 font-semibold" htmlFor="round1File">Upload PDF:</label>
                            <input type="file" id="round1File" accept=".pdf" className="w-full p-2 border text-gray-300 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            <button className="mt-4 py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200">Submit</button>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h2 className="text-2xl text-white font-semibold mb-4">Round 2: Video Submission</h2>
                        <p className="text-gray-600 mb-4">Description: Create a video explaining your solution.</p>
                        <p className="text-gray-600 mb-4">Rules: The video should be no longer than 5 minutes.</p>
                        <p className="text-gray-600 mb-4">Date: Submission deadline is July 15th, 2024.</p>
                        <div className="mt-4">
                            <label className="block mb-2 text-gray-200 font-semibold" htmlFor="round2File">Upload Video:</label>
                            <input type="file" id="round2File" accept="video/*" className="w-full text-gray-300 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            <button className="mt-4 py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200">Submit</button>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h2 className="text-2xl text-white font-semibold mb-4">Round 3: .zip File Submission</h2>
                        <p className="text-gray-600 mb-4">Description: Submit a .zip file containing all project files.</p>
                        <p className="text-gray-600 mb-4">Rules: Ensure all files are included and properly organized.</p>
                        <p className="text-gray-600 mb-4">Date: Submission deadline is July 30th, 2024.</p>
                        <div className="mt-4">
                            <label className="block mb-2 text-gray-200 font-semibold" htmlFor="round3File">Upload .zip File:</label>
                            <input type="file" id="round3File" accept=".zip" className="w-full text-gray-300 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            <button className="mt-4 py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200">Submit</button>
                        </div>
                    </div>
                );
            default:
                return <p className="text-gray-700">Please select a round to view the details.</p>;
        }
    };

    return (
        <div className="flex flex-col lg:flex-row font-sans h-screen">
            <div className="flex-1 flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-purple-100 lg:h-screen items-start py-4 px-4 justify-between">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-purple-700">Team Name</h1>
                    <div className="text-left text-gray-100">
                        <p>Member1 (Leader)</p>
                        <p>Member2</p>
                        <p>Member3</p>
                        <p>Member4</p>
                    </div>
                    <div className="mt-4">
                        <p><button onClick={() => handleRoundClick(1)} className="py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200 w-full">Round 1</button></p>
                        <p><button onClick={() => handleRoundClick(2)} className="py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200 mt-2 w-full">Round 2</button></p>
                        <p><button onClick={() => handleRoundClick(3)} className="py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200 mt-2 w-full">Round 3</button></p>
                    </div>
                </div>
                <div className="text-left text-gray-200 mt-4 lg:mt-0">
                    <Link to='/logout'><p><button className="py-2 px-4 text-purple-500 hover:text-purple-600 transition duration-200 w-full lg:w-auto">LogOut</button></p></Link>
                    <Link to='/changePassword'><p><button className="py-2 px-4 text-purple-500 hover:text-purple-600 transition duration-200 mt-2 w-full lg:w-auto">Change Password</button></p></Link>
                </div>
            </div>
            <div className="flex-[5] p-4 overflow-y-auto">
                {renderRoundDetails()}
            </div>
        </div>
    );
};

export default Dashboard;
