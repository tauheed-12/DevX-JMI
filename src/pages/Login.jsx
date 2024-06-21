import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="Register">
            <div className="float-content1"></div>
            <div className="float-content2"></div>
            <div className="float-content3"></div>
            <div className="float-content4"></div>
            <div className="float-content5"></div>
            <div className="form">
                <h1>Login</h1>
                <p id="p">Not registered yet? <Link to="/register" style={{ color: 'blue' }}>Register</Link></p>
                <form>
                    <div className="input-box">
                        <p>Team Name</p>
                        <input
                            type="text"
                            name="leaderNam"
                            required
                        />
                    </div>
                    <div className="input-box">
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            required
                        />
                    </div>
                    <div className="input-button">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
