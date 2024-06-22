import React from 'react'

const OrganisersCard = ({ img, name, role, society, id }) => {
    return (
        <div className="flex flex-col justify-center items-center font-sans bg-black p-4" data-aos="zoom-in" key={id}>
            <img src={img} alt="img" className="rounded-lg h-52 w-52" />
            <div className="gap-1 -mt-8 bg-green-100 w-52">
                <h1 className="text-green-900 text-md font-bold">{name}</h1>
                <h3 className="text-green-800 text-sm">{role}</h3>
                <h3 className="text-green-800 text-sm">{society}</h3>
            </div>
        </div>
    )
}

export default OrganisersCard
