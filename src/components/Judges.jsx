import React from 'react'
import './Judges.css'
import { judgeData } from '../Data/Judge'
const Judges = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-8 py-8" data-aos="fade-up">
            <h1 className="text-4xl font-bold text-white">Our Judges</h1>
            <div className="flex flex-row flex-wrap justify-center items-center gap-8">
                {judgeData.map((judge, id) => {
                    return (
                        <article className="card" key={id}>
                            <div className="thumb">
                                <img src={judge.imag} alt="Meaningful description" />
                            </div>
                            <div className="infos">
                                <h2 className="title">{judge.name}</h2>
                                <p className="txt">
                                    {judge.qualifications}
                                </p>
                            </div>
                        </article>
                    )
                })}

            </div>
        </div>
    )
}

export default Judges
