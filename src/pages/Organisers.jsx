import React from 'react';
import OrganisersCard from '../components/OrganisersCard';
import { Tech_Team, Organiser } from '../Data/oragniser';

const Organisers = () => {
    return (
        <div className="flex flex-col p-4 gap-8 justify-center items-center">
            <div className="flex flex-col p-2 gap-4 justify-center items-center">
                <h1 className="top-0 h-auto py-4 justify-center flex flex-col bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent text-center select-auto">
                    Heads
                </h1>
                <div className="flex flex-row justify-center items-center gap-8 flex-wrap">
                    {Organiser.map((member, index) => (
                        <OrganisersCard img={member.img} name={member.name} role={member.role} society={member.society} />
                    ))}
                </div>
            </div>
            <div>
                <h1 className="top-0 h-auto py-4 justify-center flex flex-col bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent text-center select-auto">
                    Tech Team
                </h1>
                <div className="flex flex-row justify-center items-center gap-8 flex-wrap">
                    {Tech_Team.map((member, index) => (
                        <OrganisersCard img={member.img} name={member.name} role={member.role} society={member.society} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Organisers
