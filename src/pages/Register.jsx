import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const [totalMember, setTotalMember] = useState(0);
    const [members, setMembers] = useState([]);
    const [formData, setFormData] = useState({
        leaderName: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTotalMemberChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        setTotalMember(value);
        setMembers(new Array(value).fill(''));
    };

    const handleMemberChange = (index, value) => {
        const updatedMembers = members.slice();
        updatedMembers[index] = value;
        setMembers(updatedMembers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData, members);
    };

    return (
        <div className="Register">
            <div className="float-content1"></div>
            <div className="float-content2"></div>
            <div className="float-content3"></div>
            <div className="float-content4"></div>
            <div className="float-content5"></div>
            <div className="form">
                <h1>Registration</h1>
                <p id="p">Already registered? <Link to="/login" style={{ color: 'blue' }}>Login</Link></p>
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <p>Team Name</p>
                        <input
                            type="text"
                            name="leaderName"
                            value={formData.leaderName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <p>Leader Name</p>
                        <input
                            type="text"
                            name="leaderName"
                            value={formData.leaderName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <p>Email</p>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <p>Total members?(ex: 02, 03 etc)</p>
                        <input
                            type="number"
                            name="totalMember"
                            value={totalMember}
                            onChange={handleTotalMemberChange}
                            min="0"
                            required
                        />
                    </div>
                    {members.map((member, index) => (
                        <div key={index} className="input-box">
                            <p>Member {index + 1}</p>
                            <input
                                type="text"
                                value={member}
                                onChange={(e) => handleMemberChange(index, e.target.value)}
                            />
                        </div>
                    ))}
                    <div className="input-box">
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-button">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
