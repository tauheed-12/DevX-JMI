import React from 'react';
import soarxlogo from "../assets/soarxlogo.png";

const About = () => {
    return (
        <div className="flex flex-col justify-center items-center px-4 py-4 text-white gap-16 relative" data-aos="fade-up" >
            <div className="w-10/12 relative z-10">
                <div className="mb-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">SoarX JMI</h1>
                </div>
                <div className="flex flex-col sm:flex-row relative">
                    <div className="flex flex-col flex-1 font-serif text-lg gap-2">
                        <p>SoarX is a thriving nationwide community comprising over 4500 students, renowned for
                            curating exceptional upskilling events tailored for students. Our track record boasts
                            numerous successful events featuring distinguished speakers from industry giants such as
                            Amazon, Microsoft, Meta, and Google etc. Through strategic collaborations with leading
                            companies, SoarX ensures students gain hands-on exposure to cutting-edge technologies.
                            Like, our collaboration with Snapchat for Lensathon empowered students to learn lens
                            creation, with many receiving coveted rewards like t-shirts, speakers, and headphones.</p>
                        <p>
                            Recently, we collaborated with Microsoft for Al Odyssey, rewarding participants with exclusive merchandise like Microsoft T-shirts and stylish fanny bags upon completion. At SoarX, we are passionate about bridging the gap between industry and academia by offering unparalleled exposure and experience to students.
                        </p>
                        <p>
                            We are thrilled to announce the launch of the SoarX chapter at JMI, committed to replicating our success within the JMI community. We extend our heartfelt gratitude to all community members for your unwavering support and enthusiasm.
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
