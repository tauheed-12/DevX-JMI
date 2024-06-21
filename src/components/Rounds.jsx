import React from 'react'

const Rounds = () => {
    return (
        <div className="flex flex-col justify-center items-center p-4 m-2 gap-8 text-white">
            <h1 className="text-3xl font-semibold">Rounds Details</h1>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center p-4 m-2 gap-8 text-white">
                <div className="flex-1 relative flex flex-col justify-center items-center p-6 border-2 border-pink-500 min-h-[218px] gap-4">
                    <div className="border-2 border-pink-600 border-dashed absolute -top-5 w-2/6 z-10 bg-violet-950 py-2"><span>Round 1</span></div>
                    <p>In this round, all the teams have to submit their idea related to the themes of the hackathon. They will submit their idea in form of PDF whose format is given in the website.
                        The teams will be judged based upon the creativity, uniqueness and usefulness of their project or idea.
                        Teams selected in this round will go to the next round</p>
                </div>
                <div className="flex-1 relative flex flex-col p-6 justify-center items-center border-2 border-pink-500 min-h-[218px] gap-4">
                    <div className="border-2 border-pink-600 border-dashed absolute -top-5 w-2/6 z-10 bg-violet-950 py-2"><span>Round 2</span></div>
                    <p>In this round, (which is suppose to take place after about 20 days of first round) the
                        teams need to submit a Demo of their project.All the selected teams have to upload a video
                        file showing the clear working of their demo.Teams selected in this round will go to the
                        finals. </p>
                </div>
                <div className="flex-1 relative flex flex-col justify-center items-center p-6 border-2 border-pink-500 min-h-[218px] gap-4">
                    <div className="border-2 border-pink-600 border-dashed absolute -top-5 w-2/6 z-10 bg-violet-950 py-2"><span>Round 3</span></div>
                    <p>All the finalist teams have to implement their proposed idea in this round in person.
                        A review committee of experienced judges will look over this round so that there is no discrepancy and biasness.
                        After the implementation, the teams are required to submit their codebase inside a .zip file, on our platform.
                        The results will be declared about 20 days after the final round</p>
                </div>
            </div>
        </div>
    )
}

export default Rounds
