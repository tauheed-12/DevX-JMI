import React from 'react';
import soarxlogo from "../assets/soarxlogo.png";

const About = () => {
    return (
        <div className="flex flex-col justify-center items-center px-4 py-4 text-white gap-16 relative" data-aos="fade-up" >
            <div className="w-10/12 relative z-10">
                <div className="mb-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">About SoarX JMI</h1>
                </div>
                <div className="flex flex-col sm:flex-row relative">
                    <div className="flex flex-col flex-1 font-serif text-lg gap-2">
                        <p>Founded in March 2024, SoarX JMI is a technical society dedicated to empowering
                            students through a variety of educational opportunities. Our mission is to enhance
                            students' knowledge and skills by organizing insightful sessions, webinars, and
                            bootcamps led by experts from multinational corporations (MNCs).
                        </p>
                        <p>
                            We also provide industrial visits to various events and corporate offices, helping students gain practical exposure and upskill themselves in real-world environments
                        </p>
                        <p>
                            Since our inception, we have hosted several impactful sessions, including "AI Using ChatGPT," and arranged five visits to Microsoft, benefiting over 100 students. Our entrepreneurship initiatives include visits to Bhashini Connect and workshops such as the Postman API Workshop. We've also organized WebinarFest and an offline event, "Master Class on DSA," in collaboration with Coding Blocks. Additionally, we have had the honor of inviting speakers from Amazon to our campus.
                        </p>
                        <p>
                            At SoarX JMI, our goal is to leverage these opportunities to prepare students for successful careers in the tech industry and beyond.
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center opacity-40 z-0">
                <img src={soarxlogo} alt="SoarX Logo" className="sm:h-5/6" />
            </div>
        </div>
    )
}

export default About;
